export type LiteralUnion<T, U = string> = T | (U & Record<never, never>)
