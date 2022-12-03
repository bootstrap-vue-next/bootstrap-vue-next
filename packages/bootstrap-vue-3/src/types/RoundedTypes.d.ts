type RoundedNumberTypes = 0 | 1 | 2 | 3 | 4 | 5;
type RoundedNumberStringTypes = "0" | "1" | "2" | "3" | "4" | "5";
// empty string is considered as true value
type RoundedStringTypes = "bottom" | "circle" | "end" | "pill" | "start" | "top" | "";
export type RoundedTypesAll = boolean | RoundedNumberTypes | RoundedStringTypes | RoundedNumberStringTypes
