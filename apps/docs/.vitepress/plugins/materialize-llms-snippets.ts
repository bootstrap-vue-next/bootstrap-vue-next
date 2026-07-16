import type { Plugin, ResolvedConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import {
  getMaterializedSourceMarkdown,
  normalizeLLMOutputPath,
  rebuildLLMSFullContent,
  resolveLLMSnippetDirectives,
  toLLMOutputPath,
} from '../../src/utils/llmsSnippetResolution'

type VitePressResolvedConfig = ResolvedConfig & {
  vitepress: {
    outDir: string
    srcDir: string
  }
}

const findFiles = (directory: string, filename?: string): string[] => {
  if (!fs.existsSync(directory)) {
    return []
  }

  return fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      return findFiles(fullPath, filename)
    }

    if (entry.isFile() && (filename === undefined || entry.name === filename)) {
      return [fullPath]
    }

    return []
  })
}

export const materializeLLMSSnippets = (): Plugin => {
  let resolvedConfig: ResolvedConfig | undefined

  return {
    name: 'materialize-llms-snippets',
    enforce: 'post',
    configResolved(config) {
      resolvedConfig = config
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (resolvedConfig === undefined || req.url === undefined || !req.url.endsWith('.md')) {
          next()
          return
        }

        const vitePressConfig = resolvedConfig as VitePressResolvedConfig
        const srcDir = path.resolve(vitePressConfig.root, vitePressConfig.vitepress.srcDir)
        const outputPath = normalizeLLMOutputPath(req.url, vitePressConfig.base)

        if (outputPath === '') {
          next()
          return
        }

        const materializedMarkdown = getMaterializedSourceMarkdown(outputPath, srcDir)

        if (materializedMarkdown === undefined) {
          next()
          return
        }

        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(materializedMarkdown.content)
      })
    },
    closeBundle() {
      if (resolvedConfig === undefined) {
        return
      }

      const vitePressConfig = resolvedConfig as VitePressResolvedConfig

      if (vitePressConfig.command !== 'build') {
        return
      }

      const srcDir = path.resolve(vitePressConfig.root, vitePressConfig.vitepress.srcDir)
      const outDir = path.resolve(vitePressConfig.root, vitePressConfig.vitepress.outDir)

      for (const sourceMarkdownPath of findFiles(srcDir).filter((file) => file.endsWith('.md'))) {
        const outputPath = path.join(outDir, toLLMOutputPath(sourceMarkdownPath, srcDir))

        if (!fs.existsSync(outputPath)) {
          continue
        }

        const existingContent = fs.readFileSync(outputPath, 'utf8')

        if (!existingContent.includes('<<< ')) {
          continue
        }

        const resolvedContent = resolveLLMSnippetDirectives(existingContent, sourceMarkdownPath)

        if (resolvedContent !== existingContent) {
          fs.writeFileSync(outputPath, resolvedContent)
        }
      }

      for (const llmsTxtPath of findFiles(outDir, 'llms.txt')) {
        const llmsFullPath = path.join(path.dirname(llmsTxtPath), 'llms-full.txt')

        if (!fs.existsSync(llmsFullPath)) {
          continue
        }

        const rebuiltContent = rebuildLLMSFullContent(
          fs.readFileSync(llmsTxtPath, 'utf8'),
          (outputPath) => {
            const pagePath = path.join(outDir, outputPath)
            return fs.existsSync(pagePath) ? fs.readFileSync(pagePath, 'utf8') : undefined
          },
          vitePressConfig.base
        )

        if (rebuiltContent !== undefined) {
          fs.writeFileSync(llmsFullPath, rebuiltContent)
        }
      }
    },
  }
}
