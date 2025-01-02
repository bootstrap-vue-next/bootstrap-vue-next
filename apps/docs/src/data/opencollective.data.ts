import {type CollectivePartialResponse} from '../types'

const collectiveSlug = 'bootstrap-vue-next'
const openCollectiveBaseURL = 'https://opencollective.com'
const openCollectiveMembersFetchUrl = `${openCollectiveBaseURL}/${collectiveSlug}/members/all.json`

export default {
  load: async (): Promise<CollectivePartialResponse> => {
    const response = await fetch(openCollectiveMembersFetchUrl)
    const data = await response.json()
    return {
      members: data,
    }
  },
}
