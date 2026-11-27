import fs from 'node:fs'
import path from 'node:path'
import {
  DEPRECATION_LEARN_MORE_PATH,
  DEPRECATION_LEARN_MORE_TEXT,
  DEPRECATION_REASON_TEXT,
  DeprecationReason,
} from '../types/deprecation'

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
// A tag's attributes: quoted values may contain `>` (`@click="count > 0"`), and a `/` only ends
// the tag as `/>`, so a self-closing tag never pairs with a later closing tag
const TAG_ATTRS = `(?:"[^"]*"|'[^']*'|[^'">/]|\\/(?!>))*`
const DEPRECATED_FEATURE_PAIRED_RE = new RegExp(
  `<DeprecatedFeature\\b(${TAG_ATTRS})>([\\s\\S]*?)<\\/DeprecatedFeature>`,
  'g',
)
const DEPRECATED_FEATURE_SELF_CLOSING_RE = new RegExp(
  `<DeprecatedFeature\\b(${TAG_ATTRS})\\/>`,
  'g',
)
const BLINK_RE = new RegExp(`<BLink\\b(${TAG_ATTRS})>([\\s\\S]*?)<\\/BLink>`, 'g')
const SELF_CLOSING_VUE_COMPONENT_RE = new RegExp(`<[A-Z][A-Za-z0-9]*\\b${TAG_ATTRS}\\/>`, 'g')
const OPENING_VUE_COMPONENT_RE = new RegExp(`<[A-Z][A-Za-z0-9]*\\b${TAG_ATTRS}>`, 'g')
const CLOSING_VUE_COMPONENT_RE = /<\/[A-Z][A-Za-z0-9]*\s*>/g
// A code span: a run of backticks, then content (which may hold shorter runs), then a run of the
// same length (`` ` <BAlert> `` included)
const INLINE_CODE_SPAN_RE = /(?<!`)(`+)(?!`)[^\n]*?(?<!`)\1(?!`)/g
// Vue slot wrappers (`<template #html>`) left behind when a component is unwrapped
const TEMPLATE_TAG_RE = new RegExp(`<\\/?template\\b${TAG_ATTRS}>`, 'g')
// `:href="withBase('/docs/icons')"`: the path inside VitePress's `withBase`
const WITH_BASE_CALL_RE = /^\s*withBase\(\s*(['"])(.*?)\1\s*\)\s*$/
// Markdown link targets that start at the site root (`](/docs/icons)`), not protocol-relative,
// with an optional title (`](/docs/icons "Icons")`) that is kept as is
const ROOT_RELATIVE_LINK_RE = /\]\((\/(?!\/)[^)\s]*)((?:\s+(?:"[^"]*"|'[^']*'|\([^)]*\)))?\s*)\)/g
// A placeholder line standing for a fenced block (see resolveLLMVueComponents)
const isFencePlaceholder = (line: string): boolean =>
  line.startsWith('\u0000FENCE_') && line.endsWith('\u0000')
const LIST_ITEM_RE = /^(?:[-*+]|\d+[.)])\s/

/**
 * Prefixes a root-relative path with the site base (`/docs/icons` → `/bootstrap-vue-next/docs/icons`),
 * so links in the generated Markdown point where the rendered pages do
 */
const withSiteBase = (target: string, base: string): string => {
  const trimmedBase = base.replace(/\/$/, '')
  if (trimmedBase === '' || target === trimmedBase || target.startsWith(`${trimmedBase}/`)) {
    return target
  }
  return `${trimmedBase}${target}`
}

/** Swaps each match for a placeholder, so later replacements can't touch it */
const protect = (content: string, pattern: RegExp, kind: string) => {
  const saved: string[] = []
  const protectedContent = content.replace(pattern, (match) => {
    saved.push(match)
    return `\u0000${kind}_${saved.length - 1}\u0000`
  })
  const restore = (result: string): string =>
    saved.reduce(
      (restored, match, index) => restored.replaceAll(`\u0000${kind}_${index}\u0000`, () => match),
      result,
    )
  return { protectedContent, restore }
}

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
  const boundHref =
    typeof attrs[':href'] === 'string' ? WITH_BASE_CALL_RE.exec(attrs[':href']) : null
  const target =
    typeof attrs.href === 'string'
      ? attrs.href
      : boundHref?.[2] !== undefined
        ? boundHref[2]
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
  const reason = reasonText !== undefined ? ` ${reasonText}.` : ''
  // The same link DeprecatedFeature.vue renders after the reason
  const prefix = `${label}${reason} [${DEPRECATION_LEARN_MORE_TEXT}](${DEPRECATION_LEARN_MORE_PATH})`

  const resolvedInner = innerContent
    .replace(BLINK_RE, (_m, linkAttrs: string, linkBody: string) =>
      renderBLinkToMarkdown(linkAttrs, linkBody),
    )
    .replace(SELF_CLOSING_VUE_COMPONENT_RE, '')
    .replace(OPENING_VUE_COMPONENT_RE, '')
    .replace(CLOSING_VUE_COMPONENT_RE, '')
    .replace(TEMPLATE_TAG_RE, '')

  const blocks = toMarkdownBlocks(resolvedInner)
  const first = blocks[0]
  if (first === undefined) {
    return prefix
  }
  // A leading paragraph continues the label line, as the component renders its slot after "–";
  // a body that starts with a list or a fenced block goes below it
  return first.kind === 'paragraph'
    ? `${prefix} – ${first.text}${joinMarkdownBlocks(blocks, 1)}`
    : `${prefix}\n\n${joinMarkdownBlocks(blocks, 0).trimStart()}`
}

type MarkdownBlock = { kind: 'paragraph' | 'list-item' | 'fence'; text: string }

/**
 * Splits a component body into paragraphs, list items and fenced-block placeholders. Wrapped
 * lines of a paragraph or list item are joined; blank lines and list markers start a new block
 */
const toMarkdownBlocks = (content: string): MarkdownBlock[] => {
  const lines = content.split('\n')
  const indents = lines
    .filter((line) => line.trim() !== '')
    .map((line) => /^\s*/.exec(line)?.[0].length ?? 0)
  const commonIndent = indents.length > 0 ? Math.min(...indents) : 0
  const blocks: MarkdownBlock[] = []
  let current: MarkdownBlock | undefined

  for (const rawLine of lines) {
    const line = rawLine.slice(commonIndent).trimEnd()
    const trimmed = line.trim()
    if (trimmed === '') {
      current = undefined
    } else if (isFencePlaceholder(trimmed)) {
      blocks.push({ kind: 'fence', text: trimmed })
      current = undefined
    } else if (LIST_ITEM_RE.test(trimmed)) {
      current = { kind: 'list-item', text: line }
      blocks.push(current)
    } else if (current !== undefined) {
      current.text = `${current.text} ${trimmed}`
    } else {
      current = { kind: 'paragraph', text: trimmed }
      blocks.push(current)
    }
  }

  return blocks
}

/** Joins blocks from `start` on, each with the separator it needs from the block before it */
const joinMarkdownBlocks = (blocks: MarkdownBlock[], start: number): string =>
  blocks
    .slice(start)
    .map((block, offset) => {
      const previous = blocks[start + offset - 1]
      const separator = previous?.kind === 'list-item' && block.kind === 'list-item' ? '\n' : '\n\n'
      return `${separator}${block.text}`
    })
    .join('')

const transformProseSegment = (segment: string, base: string): string => {
  // Inline code spans (e.g. `<BAlert>`, `<script setup>`) are examples: protect them before any
  // transformation, including inside DeprecatedFeature bodies
  const { protectedContent, restore } = protect(segment, INLINE_CODE_SPAN_RE, 'CODE_SPAN')

  const result = protectedContent
    .replace(SCRIPT_OR_STYLE_BLOCK_RE, '')
    .replace(DEPRECATED_FEATURE_PAIRED_RE, (_m, attrs: string, body: string) =>
      renderDeprecatedFeatureToMarkdown(attrs, body),
    )
    .replace(DEPRECATED_FEATURE_SELF_CLOSING_RE, (_m, attrs: string) =>
      renderDeprecatedFeatureToMarkdown(attrs, ''),
    )
    .replace(BLINK_RE, (_m, attrs: string, body: string) => renderBLinkToMarkdown(attrs, body))
    .replace(SELF_CLOSING_VUE_COMPONENT_RE, '')
    .replace(OPENING_VUE_COMPONENT_RE, '')
    .replace(CLOSING_VUE_COMPONENT_RE, '')
    .replace(TEMPLATE_TAG_RE, '')
    .replace(
      ROOT_RELATIVE_LINK_RE,
      (_m, target: string, title: string) => `](${withSiteBase(target, base)}${title})`,
    )

  return restore(result)
}

/**
 * Converts Vue component markup outside frontmatter and fenced code blocks
 * into plain Markdown text while removing `<script>`/`<style>` blocks.
 */
export const resolveLLMVueComponents = (content: string, base = '/'): string => {
  const frontmatterMatch = FRONTMATTER_RE.exec(content)
  const frontmatter = frontmatterMatch?.[1] ?? ''
  const body = frontmatter !== '' ? content.slice(frontmatter.length) : content

  const lines = body.split('\n')
  // Fenced blocks are kept verbatim: each becomes one placeholder line, the whole body is
  // transformed at once (so a component may wrap a fenced example) and its blank lines tidied,
  // then the blocks are put back unchanged
  const fences: string[] = []
  const bodyLines: string[] = []
  let fenceLines: string[] = []
  let activeFence: { char: string; length: number } | undefined

  const flushFence = (): void => {
    bodyLines.push(`\u0000FENCE_${fences.length}\u0000`)
    fences.push(fenceLines.join('\n'))
    fenceLines = []
  }

  for (const line of lines) {
    const fenceMatch = /^\s*(`{3,}|~{3,})/.exec(line)
    if (activeFence === undefined && fenceMatch?.[1] !== undefined) {
      activeFence = { char: fenceMatch[1][0] ?? '`', length: fenceMatch[1].length }
      fenceLines.push(line)
      continue
    }

    if (activeFence !== undefined) {
      fenceLines.push(line)
      const closeRe = new RegExp(`^\\s*${activeFence.char}{${activeFence.length},}\\s*$`)
      if (closeRe.test(line)) {
        activeFence = undefined
        flushFence()
      }
      continue
    }

    bodyLines.push(line)
  }

  // An unclosed fence runs to the end of the file
  if (fenceLines.length > 0) {
    flushFence()
  }

  const normalizedBody = transformProseSegment(bodyLines.join('\n'), base)
    // Lines left with only indentation (an unwrapped component or slot tag) count as blank
    .replace(/^[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    // Keep one blank line after frontmatter, none at the start of a file without it
    .replace(/^\n+/, frontmatter !== '' ? '\n' : '')
    // Trim before the fenced blocks come back, so their own trailing whitespace stays
    .trimEnd()

  const restoredBody = fences.reduce(
    (restored, fence, index) => restored.replace(`\u0000FENCE_${index}\u0000`, () => fence),
    normalizedBody,
  )

  return `${frontmatter}${restoredBody}`
}

export const materializeLLMMarkdown = (
  content: string,
  sourceMarkdownPath: string,
  base = '/',
): string => resolveLLMVueComponents(resolveLLMSnippetDirectives(content, sourceMarkdownPath), base)

export const getMaterializedSourceMarkdown = (
  outputPath: string,
  srcDir: string,
  base = '/',
): { content: string; sourceMarkdownPath: string } | undefined => {
  const sourceMarkdownPath = toSourceMarkdownPath(outputPath, srcDir)

  if (sourceMarkdownPath === undefined) {
    return
  }

  try {
    const sourceContent = fs.readFileSync(sourceMarkdownPath, 'utf8')

    return {
      content: materializeLLMMarkdown(sourceContent, sourceMarkdownPath, base),
      sourceMarkdownPath,
    }
  } catch {
    return
  }
}
