/**
 * Shared utilities for making network requests from VitePress data loaders.
 *
 * Data loaders run at build time, so any network request they make can fail
 * due to network issues, rate limiting, or an unavailable API. These helpers
 * ensure such failures are caught, logged, and handled with a sensible
 * fallback so the docs build never fails because of an external request.
 */

/**
 * Fetch JSON from a URL, gracefully falling back to a default value if the
 * request fails or the response is not OK.
 * @param url - The URL to fetch
 * @param fallback - The value to return if the fetch fails
 * @param context - A short label used to prefix console warnings (e.g. the data loader name)
 * @returns The parsed JSON response, or the fallback value on failure
 */
const FETCH_TIMEOUT_MS = 10_000

export async function fetchJsonWithFallback<T>(
  url: string,
  fallback: T,
  context: string,
): Promise<T> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
  try {
    const response = await fetch(url, {signal: controller.signal})
    if (!response.ok) {
      console.error(`[${context}] Failed to fetch ${url}: ${response.status} ${response.statusText}`)
      return fallback
    }
    return (await response.json()) as T
  } catch (error) {
    console.error(`[${context}] Failed to fetch ${url}:`, error)
    return fallback
  } finally {
    clearTimeout(timeoutId)
  }
}
