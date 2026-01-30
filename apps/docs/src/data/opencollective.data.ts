import {type CollectivePartialResponse} from '../types'

const collectiveSlug = 'bootstrap-vue-next'
const openCollectiveBaseURL = 'https://opencollective.com'
const openCollectiveMembersFetchUrl = `${openCollectiveBaseURL}/${collectiveSlug}/members/all.json`

export default {
  load: async (): Promise<CollectivePartialResponse> => {
    try {
      const response = await fetch(openCollectiveMembersFetchUrl)
      const data = await response.json()
      return {
        members: data,
      }
    } catch (error) {
      // Return empty members array if fetch fails (e.g., in sandboxed environments)
      console.warn('Failed to fetch OpenCollective data:', error)
      return {
        members: [],
      }
    }
  },
}
