import {type CollectivePartialResponse} from '../types'

const collectiveSlug = 'bootstrap-vue-next'
const openCollectiveBaseURL = 'https://opencollective.com'
const openCollectiveMembersFetchUrl = `${openCollectiveBaseURL}/${collectiveSlug}/members/all.json`

// This is a stubbed export to satisfy typescript, for some reason
//  the generated export from vitepress data isn't being recognized in this case
//  but vitepress is generating the correct export at runtime
export const data: CollectivePartialResponse = {members: []}

export default {
  load: async (): Promise<CollectivePartialResponse> => {
    const response = await fetch(openCollectiveMembersFetchUrl)
    const data = await response.json()
    return {
      members: data,
    }
  },
}
