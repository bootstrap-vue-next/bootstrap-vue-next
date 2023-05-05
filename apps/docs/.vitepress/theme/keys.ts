import type { InjectionKey } from "vue";

export const appInfoKey: InjectionKey<{githubUrl: string; discordUrl: string}> = Symbol('app-info')
