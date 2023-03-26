import type Booleanish from './Booleanish'

type BTableProviderContext = {
  readonly filter?: string
  readonly currentPage?: number
  readonly perPage?: number
  readonly sortBy?: string
  readonly sortDesc?: Booleanish
}

export default BTableProviderContext
