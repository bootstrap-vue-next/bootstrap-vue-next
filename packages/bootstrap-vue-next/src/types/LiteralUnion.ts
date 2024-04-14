/**
 * Represents a type that is a union of a literal type `T` and a string type `U`.
 * The `U & Record<never, never>` part is a trick that allows string types to be used in a way that is compatible with literal types.
 *
 * @template T The literal type.
 * @template U The string type. Defaults to `string` if not provided.
 *
 * @example
 * // Define a type that can be "small", "medium", "large", or any string
 * type Size = LiteralUnion<"small" | "medium" | "large">
 *
 * // Now this variable can be assigned "small", "medium", "large", or any string
 * let shirtSize: Size;
 * shirtSize = "small"; // OK
 * shirtSize = "medium"; // OK
 * shirtSize = "large"; // OK
 * shirtSize = "extra large"; // Also OK
 */
export type LiteralUnion<T, U = string> = T | (U & Record<never, never>)
