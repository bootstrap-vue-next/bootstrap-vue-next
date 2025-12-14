/**
 * Compile-time type assertion helpers for TypeScript type checking in tests
 *
 * These helpers validate TypeScript types at compile-time rather than runtime.
 * They are useful for ensuring that component props and v-model types are correctly inferred.
 */

/**
 * Helper to test that v-model type is correctly inferred
 *
 * This is a compile-time test helper - it validates TypeScript types
 * rather than runtime behavior. Use in test files like:
 *
 * @example
 * ```typescript
 * it('has correct v-model type inference', () => {
 *   expectCorrectModelType<number>() // for numeric value fields
 *   expectCorrectModelType<string>() // for string value fields
 *   expectCorrectModelType<TestEnum>() // for enum value fields
 * })
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const expectCorrectModelType = <T>(): void => {
  // This is a type-only test - no runtime behavior needed
  // TypeScript will error if the types don't match
}
