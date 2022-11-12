// Props
export interface Props {
  append?: string
  appendHtml?: string
  id?: string
  prepend?: string
  prependHtml?: string
  size?: 'sm' | 'lg' // Exclude<InputSize, 'md'> <-- TODO: this code generates an error during building time, another option is using an specific type in InputSize.d.ts file
  tag?: string
}
// Emits

// Other
