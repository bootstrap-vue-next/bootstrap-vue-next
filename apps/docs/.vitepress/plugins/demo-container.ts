import type {MarkdownEnv, MarkdownRenderer} from 'vitepress'
import type {RuleBlock} from 'markdown-it/lib/parser_block.mjs'
import path from 'path'

// This plugin is inspired by vitepress' snippet plugin and must run before it to work
//  https://vitepress.dev/guide/markdown.html#import-code-snippets
//  It accepts all of the same syntax as the snippet plugin, but will render the demo
//  _and_ display the example code inside of a HighlightCard component
// To invoke this plugin use <<< DEMO /path/to/file.extension#region{meta} for a running demo
//  and example code or <<< FRAGMENT /path/to/file.extension#region{meta} for just the example code

export const demoContainer = (md: MarkdownRenderer, srcDir: string) => {
  const blockParser: RuleBlock = (state, startLine, endLine, silent) => {
    const demoSentinal = '<<< DEMO '
    const fragmentSentinal = '<<< FRAGMENT '
    const pos = state.bMarks[startLine] + state.tShift[startLine]
    const max = state.eMarks[startLine]

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false
    }

    const isDemo = state.src.slice(pos, pos + demoSentinal.length) === demoSentinal
    const isFragment = state.src.slice(pos, pos + fragmentSentinal.length) === fragmentSentinal

    if (!isDemo && !isFragment) {
      return false
    }
    const sentinalLength = isDemo ? demoSentinal.length : fragmentSentinal.length

    if (silent) {
      return true
    }

    const start = pos + sentinalLength
    const end = state.skipSpacesBack(max, pos)

    const rawPath = state.src.slice(start, end).trim().replace(/^@/, srcDir).trim()

    const {filepath, extension, region, lines, lang, title} = rawPathToToken(rawPath)
    const component = isDemo ? `<${title.substring(0, title.indexOf('.'))}/>` : ''

    state.line += 1

    const prefixToken = state.push('html_block', '', 0)
    prefixToken.content = `<HighlightCard>${component}<template #html>`

    const codeToken = state.push('fence', 'code', 0)
    codeToken.info = `${lang || extension}${lines ? `{${lines}}` : ''}${title ? `[${title}]` : ''}`

    const {realPath, path: _path} = state.env as MarkdownEnv
    const resolvedPath = path.resolve(path.dirname(realPath ?? _path), filepath)

    // @ts-ignore
    codeToken.src = [resolvedPath, region.slice(1)]
    codeToken.markup = '```'
    codeToken.map = [startLine, startLine + 1]

    const postfixToken = state.push('html_block', '', 0)
    postfixToken.content = `</template></HighlightCard>`

    return true
  }

  md.block.ruler.before('snippet', 'demo', blockParser)
}

/**
 * raw path format: "/path/to/file.extension#region {meta} [title]"
 *    where #region, {meta} and [title] are optional
 *    meta can be like '1,2,4-6 lang', 'lang' or '1,2,4-6'
 *    lang can contain special characters like C++, C#, F#, etc.
 *    path can be relative to the current file or absolute
 *    file extension is optional
 *    path can contain spaces and dots
 *
 * captures: ['/path/to/file.extension', 'extension', '#region', '{meta}', '[title]']
 */
const rawPathRegexp =
  /^(.+?(?:(?:\.([a-z0-9]+))?))(?:(#[\w-]+))?(?: ?(?:{(\d+(?:[,-]\d+)*)? ?(\S+)?}))? ?(?:\[(.+)\])?$/

function rawPathToToken(rawPath: string) {
  const [filepath = '', extension = '', region = '', lines = '', lang = '', rawTitle = ''] = (
    rawPathRegexp.exec(rawPath) || []
  ).slice(1)

  const title = rawTitle || filepath.split('/').pop() || ''

  return {filepath, extension, region, lines, lang, title}
}
