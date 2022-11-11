export type BasicColorVariant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'

export type BgColorVariant =
    BasicColorVariant
    | 'body'
    | 'white'
    | 'transparent'

export type BorderColorVariant =
    BasicColorVariant
    | 'white'

export type TextColorVariant =
    BasicColorVariant
    | 'body'
    | 'muted'
    | 'white'
    | 'black-50'
    | 'white-50'
    | 'reset'
