import type {RendererElement} from 'vue'

export type Numberish = string | number

export type TeleporterProps = {
  teleportDisabled?: boolean
  teleportTo?: string | Readonly<RendererElement> | null | undefined
}
