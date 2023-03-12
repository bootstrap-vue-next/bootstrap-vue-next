import type {Ref} from 'vue'
// Props
export interface Props {
  flush?: boolean
  free?: boolean
  id?: string
}
// Emits

// Other

export interface ParentData {
  id: Ref<string>
}
