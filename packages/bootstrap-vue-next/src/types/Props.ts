export type PropDefinition = {
  type: unknown[]
  default: unknown
}

/**
 * Not to be confused with the ComponentProps.ts file
 */
export interface ComponentProps {
  [key: string]: PropDefinition
}
