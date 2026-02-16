export interface VersionData {
  version: string
  tag: string
  isLatest: boolean
  publishedAt: string
}

declare const data: VersionData[]
export {data}

/**
 * Fetch releases from GitHub at build time
 * This data loader fetches the list of releases from the GitHub API
 * and filters for bootstrapvuenext releases only
 */
export default {
  async load(): Promise<VersionData[]> {
    try {
      // Fetch releases from GitHub API
      const response = await fetch(
        'https://api.github.com/repos/bootstrap-vue-next/bootstrap-vue-next/releases?per_page=50',
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            // Add User-Agent to avoid rate limiting
            'User-Agent': 'BootstrapVueNext-Docs',
          },
        }
      )

      if (!response.ok) {
        console.warn('Failed to fetch releases from GitHub:', response.status)
        return [{version: 'latest', tag: 'latest', isLatest: true, publishedAt: ''}]
      }

      const releases = await response.json()

      // Filter for bootstrapvuenext releases only and map to our format
      const versions: VersionData[] = releases
        .filter((release: any) => release.tag_name.startsWith('bootstrapvuenext-v'))
        .map((release: any) => ({
          version: release.tag_name.replace('bootstrapvuenext-v', 'v'),
          tag: release.tag_name,
          isLatest: false,
          publishedAt: release.published_at,
        }))

      // Add "latest" as the current development version (always first)
      versions.unshift({
        version: 'latest',
        tag: 'latest',
        isLatest: true,
        publishedAt: new Date().toISOString(),
      })

      return versions
    } catch (error) {
      console.error('Error fetching releases:', error)
      // Return fallback data if fetch fails
      return [{version: 'latest', tag: 'latest', isLatest: true, publishedAt: ''}]
    }
  },
}
