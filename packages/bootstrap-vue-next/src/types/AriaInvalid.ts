export type AriaInvalid = boolean | 'grammar' | 'spelling'
export type StringAriaInvalid = 'true' | 'false' | Exclude<AriaInvalid, boolean>
