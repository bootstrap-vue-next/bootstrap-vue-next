import fs from 'node:fs'
import path from 'node:path'

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
  regionName: string
): {matcher: RegionMatcher; start: number} | undefined => {
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index]

    if (line === undefined) {
      continue
    }

    for (const matcher of markers) {
      if (matcher.start.exec(line)?.[1] === regionName) {
        return {matcher, start: index + 1}
      }
    }
  }
}

const findRegionEnd = (lines: string[], regionName: string, regionStart: RegionRange): number | undefined => {
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
      .filter((line) => !(regionRange.matcher.start.test(line) || regionRange.matcher.end.test(line)))
      .join('\n')
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
  const {filepath, extension, lang, region} = rawPathToToken(rawPath)

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
      region
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
  base: string
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

export const getMaterializedSourceMarkdown = (
  outputPath: string,
  srcDir: string
): {content: string; sourceMarkdownPath: string} | undefined => {
  const sourceMarkdownPath = toSourceMarkdownPath(outputPath, srcDir)

  if (sourceMarkdownPath === undefined) {
    return
  }

  try {
    const sourceContent = fs.readFileSync(sourceMarkdownPath, 'utf8')

    return {
      content: resolveLLMSnippetDirectives(sourceContent, sourceMarkdownPath),
      sourceMarkdownPath,
    }
  } catch {
    return
  }
}
