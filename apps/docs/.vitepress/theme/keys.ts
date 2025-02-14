import type {InjectionKey} from 'vue'

export const appInfoKey: InjectionKey<{
  githubMainBranch: string
  githubUrl: string
  githubPackageDirectory: string
  githubComponentsDirectory: string
  githubComposablesDirectory: string
  githubDirectivesDirectory: string
  githubDocsDirectory: string
  discordUrl: string
  opencollectiveUrl: string
}> = Symbol('app-info')
