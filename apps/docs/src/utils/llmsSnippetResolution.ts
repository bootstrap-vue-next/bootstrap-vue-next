import fs from 'node:fs'
import path from 'node:path'
import { DEPRECATION_REASON_TEXT, DeprecationReason } from '../types/deprecation'

const snippetDirectiveRE = /^<<<\s+(?:FRAGMENT|DEMO)\s+(.*?)$/gm

const rawPathRegexp =
  /^(.+?(?:(?:\.([a-z0-9]+))?))(?:(#[\w-]+))?(?: ?(?:{(\d+(?:[,-]\d+)*)? ?(\S+)? ?(\S+)?}))? ?(?:\[(.+)\])?$/i

const markers = [
  {
    end: /^\s*\/\/\s*#?endregion\b\s*(.*?)\s*$/,
    start: /^\s*\/\/\s*#?region\b\s*(.*?)\s*$/,
  },
  {
    end: /^\s*<!--\s*#?endregion\b\s*(.*?)\s*-->/,
    start: /^\s*<!--\s*#?region\b\s*(.*?)\s*-->/,
  },
  {
    end: /^\s*\/\*\s*#endregion\b\s*(.*?)\s*\*\//,
    start: /^\s*\/\*\s*#region\b\s*(.*?)\s*\*\//,
  },
  {
    end: /^\s*#[eE]nd ?[rR]egion\b\s*(.*?)\s*$/,
    start: /^\s*#[rR]egion\b\s*(.*?)\s*$/,
  },
  {
    end: /^\s*#\s*#?endregion\b\s*(.*?)\s*$/,
    start: /^\s*#\s*#?region\b\s*(.*?)\s*$/,
  },
  {
    end: /^\s*(?:--|::|@?REM)\s*#endregion\b\s*(.*?)\s*$/,
    start: /^\s*(?:--|::|@?REM)\s*#region\b\s*(.*?)\s*$/,
  },
  {
    end: /^\s*#pragma\s+endregion\b\s*(.*?)\s*$/,
    start: /^\s*#pragma\s+region\b\s*(.*?)\s*$/,
  },
  {
    end: /^\s*\(\*\s*#endregion\b\s*(.*?)\s*\*\)/,
    start: /^\s*\(\*\s*#region\b\s*(.*?)\s*\*\)/,
  },
] as const

type RegionMatcher = (typeof markers)[number]

type RegionRange = {
  end: number
  start: number
  matcher: RegionMatcher
}

type ParsedSnippetPath = {
  extension: string
  filepath: string
  lang: string
  region: string
}

const dedent = (text: string): string => {
  const lines = text.split('\n')
  let minIndentLength = Number.POSITIVE_INFINITY

  for (const line of lines) {
    if (line.trim() === '') {
      continue
    }

    for (let index = 0; index < line.length; index += 1) {
      if (line[index] !== ' ' && line[index] !== '\t') {
        minIndentLength = Math.min(index, minIndentLength)
        break
      }
    }
  }

  if (!Number.isFinite(minIndentLength)) {
    return text
  }

  return lines.map((line) => line.slice(minIndentLength)).join('\n')
}

const rawPathToToken = (rawPath: string): ParsedSnippetPath => {
  const [filepath = '', extension = '', region = '', _lines = '', lang = ''] = (
    rawPathRegexp.exec(rawPath) ?? []
  ).slice(1)

  return {
    extension,
    filepath,
    lang,
    region,
  }
}

const findRegionStart = (
  lines: string[],
  regionName: string,
): { matcher: RegionMatcher; start: number } | undefined => {
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]

    if (line === undefined) {
      continue
    }

    for (const matcher of markers) {
      if (matcher.start.exec(line)?.[1] === regionName) {
        return { matcher, start: index + 1 }
      }
    }
  }
}

const findRegionEnd = (
  lines: string[],
  regionName: string,
  regionStart: RegionRange,
): number | undefined => {
  let counter = 1

  for (let index = regionStart.start; index < lines.length; index += 1) {
    const line = lines[index]

    if (line === undefined) {
      continue
    }

    if (regionStart.matcher.start.exec(line)?.[1] === regionName) {
      counter += 1
    }

    const endRegion = regionStart.matcher.end.exec(line)?.[1]
    if (endRegion === regionName || endRegion === '') {
      counter -= 1

      if (counter === 0) {
        return index
      }
    }
  }
}

const findRegion = (lines: string[], regionName: string): RegionRange | undefined => {
  const startRange = findRegionStart(lines, regionName)

  if (startRange === undefined) {
    return
  }

  const end = findRegionEnd(lines, regionName, {
    ...startRange,
    end: startRange.start,
  })

  if (end === undefined) {
    return
  }

  return {
    ...startRange,
    end,
  }
}

const extractSnippetContent = (rawCode: string, region: string): string => {
  if (region === '') {
    return rawCode
  }

  const regionName = region.slice(1)
  const lines = rawCode.split('\n')
  const regionRange = findRegion(lines, regionName)

  if (regionRange === undefined) {
    return rawCode
  }

  return dedent(
    lines
      .slice(regionRange.start, regionRange.end)
      .filter(
        (line) => !(regionRange.matcher.start.test(line) || regionRange.matcher.end.test(line)),
      )
      .join('\n'),
  )
}

export const normalizeLLMOutputPath = (outputPath: string, base: string): string => {
  const normalizedBase = base.replace(/^\/+|\/+$/g, '')
  const urlPath = (() => {
    try {
      return new URL(outputPath).pathname
    } catch {
      return outputPath
    }
  })()
  const normalizedPath = urlPath.replace(/[#?].*$/, '').replace(/^\/+/, '')

  if (normalizedBase !== '' && normalizedPath.startsWith(`${normalizedBase}/`)) {
    return normalizedPath.slice(normalizedBase.length + 1)
  }

  return normalizedPath
}

export const toSourceMarkdownPath = (outputPath: string, srcDir: string): string | undefined => {
  const directPath = path.resolve(srcDir, outputPath)

  if (fs.existsSync(directPath)) {
    return directPath
  }

  const parsedPath = path.parse(outputPath)

  if (parsedPath.ext !== '.md') {
    return
  }

  const indexPath = path.resolve(srcDir, parsedPath.dir, parsedPath.name, 'index.md')

  if (fs.existsSync(indexPath)) {
    return indexPath
  }
}

const resolveDirective = (rawPath: string, sourceMarkdownPath: string): string | undefined => {
  const { filepath, extension, lang, region } = rawPathToToken(rawPath)

  if (filepath === '') {
    return
  }

  const snippetPath = path.resolve(path.dirname(sourceMarkdownPath), filepath)

  if (!fs.existsSync(snippetPath)) {
    return
  }

  try {
    const snippetContent = extractSnippetContent(
      fs.readFileSync(snippetPath, 'utf8').replaceAll('\r\n', '\n'),
      region,
    )
    const fenceLanguage = lang || extension

    return `\`\`\`${fenceLanguage}\n${snippetContent}\n\`\`\``
  } catch {
    return
  }
}

export const resolveLLMSnippetDirectives = (content: string, sourceMarkdownPath: string): string =>
  content.replace(snippetDirectiveRE, (directive, rawPath: string) => {
    const resolvedDirective = resolveDirective(rawPath.trim(), sourceMarkdownPath)
    return resolvedDirective ?? directive
  })

export const toLLMOutputPath = (sourceMarkdownPath: string, srcDir: string): string => {
  const relativePath = path.relative(srcDir, sourceMarkdownPath)

  if (path.basename(relativePath) === 'index.md' && path.dirname(relativePath) !== '.') {
    return `${path.dirname(relativePath)}.md`
  }

  return relativePath
}

export const rebuildLLMSFullContent = (
  llmsTxtContent: string,
  readPage: (outputPath: string) => string | undefined,
  base: string,
): string | undefined => {
  const matches = [...llmsTxtContent.matchAll(/\[[^\]]+\]\(([^)]+\.md)\)/g)]
  const pages = matches
    .map((match) => normalizeLLMOutputPath(match[1] ?? '', base))
    .filter((outputPath) => outputPath !== '')
    .map((outputPath) => readPage(outputPath))
    .filter((page): page is string => page !== undefined)

  if (pages.length === 0) {
    return
  }

  return pages.join('\n---\n\n')
}

const DEPRECATION_REASON_VALUES = new Set<string>(Object.values(DeprecationReason))
const DEPRECATION_ENUM_MAP: Record<string, DeprecationReason> = {
  BOOTSTRAP_DEPRECATED: DeprecationReason.BOOTSTRAP_DEPRECATED,
  BOOTSTRAP_NATIVE: DeprecationReason.BOOTSTRAP_NATIVE,
  INSUFFICIENT_DEMAND: DeprecationReason.INSUFFICIENT_DEMAND,
  MODERN_ALTERNATIVE: DeprecationReason.MODERN_ALTERNATIVE,
  VUE3_BOOTSTRAP5_CHANGES: DeprecationReason.VUE3_BOOTSTRAP5_CHANGES,
}

const FRONTMATTER_RE = /^(---\r?\n[\s\S]*?\r?\n---\r?\n?)/
const ATTR_RE = /(:?[\w-]+)(?:=(?:"([^"]*)"|'([^']*)'))?/g
const SCRIPT_OR_STYLE_BLOCK_RE = /<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi
const DEPRECATED_FEATURE_PAIRED_RE = /<DeprecatedFeature\b([^>]*)>([\s\S]*?)<\/DeprecatedFeature>/g
const DEPRECATED_FEATURE_SELF_CLOSING_RE = /<DeprecatedFeature\b([^>]*)\/>/g
const BLINK_RE = /<BLink\b([^>]*)>([\s\S]*?)<\/BLink>/g
const SELF_CLOSING_VUE_COMPONENT_RE = /<[A-Z][A-Za-z0-9]*\b[^>]*\/>/g
const OPENING_VUE_COMPONENT_RE = /<[A-Z][A-Za-z0-9]*\b[^>]*>/g
const CLOSING_VUE_COMPONENT_RE = /<\/[A-Z][A-Za-z0-9]*\s*>/g
const INLINE_CODE_SPAN_RE = /`[^`\n]+`/g

const parseAttributes = (rawAttrs: string): Record<string, string | true> => {
  const attrs: Record<string, string | true> = {}

  for (const match of rawAttrs.matchAll(ATTR_RE)) {
    const name = match[1]
    if (name === undefined) {
      continue
    }
    const value = match[2] ?? match[3]
    attrs[name] = value ?? true
  }

  return attrs
}

const resolveDeprecationReasonText = (attrs: Record<string, string | true>): string | undefined => {
  const boundReason = attrs[':reason']
  if (typeof boundReason === 'string') {
    const enumKey = boundReason.trim().replace(/^DeprecationReason\./, '')
    const mapped = DEPRECATION_ENUM_MAP[enumKey]
    if (mapped !== undefined) {
      return DEPRECATION_REASON_TEXT[mapped]
    }
  }

  const staticReason = attrs.reason
  if (typeof staticReason === 'string' && DEPRECATION_REASON_VALUES.has(staticReason.trim())) {
    return DEPRECATION_REASON_TEXT[staticReason.trim() as DeprecationReason]
  }

  return undefined
}

const isPluralAttribute = (attrs: Record<string, string | true>): boolean => {
  if (attrs.plural === true || attrs.plural === '' || attrs.plural === 'true') {
    return true
  }
  return attrs[':plural'] === 'true'
}

const renderBLinkToMarkdown = (rawAttrs: string, innerContent: string): string => {
  const attrs = parseAttributes(rawAttrs)
  const label = innerContent.trim().replace(/\s+/g, ' ')
  const target =
    typeof attrs.href === 'string'
      ? attrs.href
      : typeof attrs.to === 'string'
        ? attrs.to
        : undefined

  if (label === '') {
    return ''
  }

  return target !== undefined && target !== '' ? `[${label}](${target})` : label
}

const renderDeprecatedFeatureToMarkdown = (rawAttrs: string, innerContent: string): string => {
  const attrs = parseAttributes(rawAttrs)
  const what = typeof attrs.what === 'string' ? attrs.what.trim() : ''
  const plural = isPluralAttribute(attrs)
  const reasonText = resolveDeprecationReasonText(attrs)

  const label = what !== '' ? `**${what} ${plural ? 'are' : 'is'} deprecated:**` : '**Deprecated:**'
  const prefix = reasonText !== undefined ? `${label} ${reasonText}.` : label

  const resolvedInner = innerContent
    .replace(BLINK_RE, (_m, linkAttrs: string, linkBody: string) =>
      renderBLinkToMarkdown(linkAttrs, linkBody),
    )
    .replace(SELF_CLOSING_VUE_COMPONENT_RE, '')
    .replace(OPENING_VUE_COMPONENT_RE, '')
    .replace(CLOSING_VUE_COMPONENT_RE, '')
    .trim()
    .replace(/\s*\n\s*/g, ' ')

  return resolvedInner !== '' ? `${prefix} – ${resolvedInner}` : prefix
}

const transformProseSegment = (segment: string): string => {
  let result = segment
    .replace(SCRIPT_OR_STYLE_BLOCK_RE, '')
    .replace(DEPRECATED_FEATURE_PAIRED_RE, (_m, attrs: string, body: string) =>
      renderDeprecatedFeatureToMarkdown(attrs, body),
    )
    .replace(DEPRECATED_FEATURE_SELF_CLOSING_RE, (_m, attrs: string) =>
      renderDeprecatedFeatureToMarkdown(attrs, ''),
    )

  // Protect inline code spans (e.g. `<BAlert>`) before stripping remaining Vue tags.
  const codeSpans: string[] = []
  result = result.replace(INLINE_CODE_SPAN_RE, (span) => {
    const token = `\u0000CODE_SPAN_${codeSpans.length}\u0000`
    codeSpans.push(span)
    return token
  })

  result = result
    .replace(BLINK_RE, (_m, attrs: string, body: string) => renderBLinkToMarkdown(attrs, body))
    .replace(SELF_CLOSING_VUE_COMPONENT_RE, '')
    .replace(OPENING_VUE_COMPONENT_RE, '')
    .replace(CLOSING_VUE_COMPONENT_RE, '')

  for (let index = 0; index < codeSpans.length; index += 1) {
    result = result.replaceAll(`\u0000CODE_SPAN_${index}\u0000`, codeSpans[index] ?? '')
  }

  return result
}

/**
 * Converts Vue component markup outside frontmatter and fenced code blocks
 * into plain Markdown text while removing `<script>`/`<style>` blocks.
 */
export const resolveLLMVueComponents = (content: string): string => {
  const frontmatterMatch = FRONTMATTER_RE.exec(content)
  const frontmatter = frontmatterMatch?.[1] ?? ''
  const body = frontmatter !== '' ? content.slice(frontmatter.length) : content

  const lines = body.split('\n')
  const outputChunks: string[] = []
  let proseLines: string[] = []
  let activeFence: { char: string; length: number } | undefined

  const flushProse = (): void => {
    if (proseLines.length === 0) {
      return
    }
    outputChunks.push(transformProseSegment(proseLines.join('\n')))
    proseLines = []
  }

  for (const line of lines) {
    const fenceMatch = /^\s*(`{3,}|~{3,})/.exec(line)
    if (activeFence === undefined && fenceMatch?.[1] !== undefined) {
      flushProse()
      activeFence = { char: fenceMatch[1][0] ?? '`', length: fenceMatch[1].length }
      outputChunks.push(line)
      continue
    }

    if (activeFence !== undefined) {
      outputChunks.push(line)
      const closeRe = new RegExp(`^\\s*${activeFence.char}{${activeFence.length},}\\s*$`)
      if (closeRe.test(line)) {
        activeFence = undefined
      }
      continue
    }

    proseLines.push(line)
  }

  flushProse()

  const normalizedBody = outputChunks
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\s+$/, '\n')

  return `${frontmatter}${normalizedBody.trimEnd()}`
}

export const materializeLLMMarkdown = (content: string, sourceMarkdownPath: string): string =>
  resolveLLMVueComponents(resolveLLMSnippetDirectives(content, sourceMarkdownPath))

export const getMaterializedSourceMarkdown = (
  outputPath: string,
  srcDir: string,
): { content: string; sourceMarkdownPath: string } | undefined => {
  const sourceMarkdownPath = toSourceMarkdownPath(outputPath, srcDir)

  if (sourceMarkdownPath === undefined) {
    return
  }

  try {
    const sourceContent = fs.readFileSync(sourceMarkdownPath, 'utf8')

    return {
      content: materializeLLMMarkdown(sourceContent, sourceMarkdownPath),
      sourceMarkdownPath,
    }
  } catch {
    return
  }
}
