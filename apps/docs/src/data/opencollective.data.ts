import { type CollectivePartialResponse } from '../types'

const collectiveSlug = 'bootstrap-vue-next'
const openCollectiveBaseURL = 'https://opencollective.com'
const openCollectiveMembersFetchUrl = `${openCollectiveBaseURL}/${collectiveSlug}/members/all.json`

export default {
  load: async (): Promise<CollectivePartialResponse> => {
    try {
      const response = await fetch(openCollectiveMembersFetchUrl)
      if (!response.ok) {
        console.warn(
          `[opencollective] Failed to fetch members: ${response.status} ${response.statusText}`,
        )
        return { members: [] }
      }
      const data = await response.json()
      return {
        members: data,
      }
    } catch (error) {
      console.warn(`[opencollective] Failed to fetch members:`, error)
      return { members: [] }
    }
  },
}
