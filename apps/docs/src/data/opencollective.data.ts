import {type CollectivePartialResponse} from '../types'

const collectiveSlug = 'bootstrap-vue-next'
const openCollectiveBaseURL = 'https://opencollective.com'
const openCollectiveMembersFetchUrl = `${openCollectiveBaseURL}/${collectiveSlug}/members/all.json`

export default {
  load: async (): Promise<CollectivePartialResponse> => {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)
      const response = await fetch(openCollectiveMembersFetchUrl, {signal: controller.signal})
      clearTimeout(timeoutId)
      const data = await response.json()
      return {
        members: data,
      }
    } catch {
      return {
        members: [],
      }
    }
  },
}
