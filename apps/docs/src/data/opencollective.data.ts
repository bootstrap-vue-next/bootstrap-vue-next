import { type CollectivePartialResponse } from '../types'
import { fetchJsonWithFallback } from '../utils/networkUtils'

const collectiveSlug = 'bootstrap-vue-next'
const openCollectiveBaseURL = 'https://opencollective.com'
const openCollectiveMembersFetchUrl = `${openCollectiveBaseURL}/${collectiveSlug}/members/all.json`

export default {
  load: async (): Promise<CollectivePartialResponse> => ({
    members: await fetchJsonWithFallback(openCollectiveMembersFetchUrl, [], 'opencollective'),
  }),
}
