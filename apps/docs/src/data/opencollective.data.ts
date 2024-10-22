export type CollectiveMembersResponse = {
  MemberId: number
  createdAt: string
  type: string
  role: string
  tier: string
  isActive: boolean
  totalAmountDonated: number
  currency: string
  lastTransactionAt: string
  lastTransactionAmount: number
  profile: string
  name: string
  company: null | null
  description: string | null
  image: string | null
  email: null | string
  twitter: null | string
  github: string | null
  website: null | string
}

const collectiveSlug = 'bootstrap-vue-next'
const openCollectiveBaseURL = 'https://opencollective.com'
const openCollectiveMembersFetchUrl = `${openCollectiveBaseURL}/${collectiveSlug}/members/all.json`

export default {
  load: async (): Promise<{
    members: CollectiveMembersResponse[]
  }> => {
    const response = await fetch(openCollectiveMembersFetchUrl)
    const data = await response.json()
    return {
      members: data,
    }
  },
}
