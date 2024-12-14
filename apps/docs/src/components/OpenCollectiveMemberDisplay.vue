<template>
  <BContainer>
    <BRow>
      <BCol>
        <h2 class="text-center">Administrators</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <OpenCollectiveMemberDisplayAvatarCard :members="groupedCollectiveMembers.ADMIN" />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2 class="text-center">Contributors</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <OpenCollectiveMemberDisplayAvatarCard :members="removedDuplicatedContributors" />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2 class="text-center">Financial Backers</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <div v-for="tier in sortTiers" :key="tier">
          <h3 class="text-center">{{ tier }}</h3>
          <OpenCollectiveMemberDisplayAvatarCard :members="groupedActiveFinancialBackers[tier]" />
        </div>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2>
          <BPopover>
            <template #target>
              <div class="text-center">Inactive Financial Backers</div>
            </template>
            <div class="mb-2">
              An inactive financial backer is someone who has not made a financial contribution in
              the last year.
            </div>
            <div class="mb-2">
              We thank them for their past contributions and hope they will consider contributing
              again in the future.
            </div>
            <div>
              Those that have not contributed in the last two years are removed from the financial
              backers list.
            </div>
          </BPopover>
        </h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol class="text-center">
        {{ inactiveFinancialBackers.map((el) => el.name).join(', ') }}
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {type CollectiveMembersResponse, type CollectivePartialResponse} from '../types'
import {data} from '../data/opencollective.data'

const OpenCollectiveData = data as CollectivePartialResponse

const filteredKeys = ['HOST', 'FOLLOWER']
const roleNames = ['ADMIN', 'CONTRIBUTOR', 'BACKER'] as const
type RoleNames = (typeof roleNames)[number]

type RoleGroups = Record<RoleNames, CollectiveMembersResponse[]>
const filteredMembers = OpenCollectiveData.members.filter((el) => !filteredKeys.includes(el.role))
const groupedCollectiveMembers: RoleGroups = {
  ...Object.fromEntries(roleNames.map((role) => [role, []])),
  ...Object.groupBy(filteredMembers, (el) => el.role),
} as RoleGroups

/**
 * Profiles are used because for some reason MemberIds are not the same between roles?
 */
const adminProfiles = new Set(groupedCollectiveMembers.ADMIN.map((adm) => adm.profile))
const removedDuplicatedContributors = groupedCollectiveMembers.CONTRIBUTOR.filter(
  (el) => !adminProfiles.has(el.profile)
)

const now = new Date()
const oneYearAgo = new Date()
const twoYearsAgo = new Date()

oneYearAgo.setFullYear(now.getFullYear() - 1)
twoYearsAgo.setFullYear(now.getFullYear() - 2)

// Active backers (within the last year)
const activeFinancialBackers = groupedCollectiveMembers.BACKER.filter((el) => {
  const lastTransactionDate = new Date(el.lastTransactionAt)
  return lastTransactionDate >= oneYearAgo
})

// Inactive backers (between one and two years ago)
const inactiveFinancialBackers = groupedCollectiveMembers.BACKER.filter((el) => {
  const lastTransactionDate = new Date(el.lastTransactionAt)
  return lastTransactionDate < oneYearAgo && lastTransactionDate >= twoYearsAgo
})

// Grouping active financial backers by tier

const tierNames = [
  'Platinum Sponsor',
  'Gold Sponsor',
  'Silver Sponsor',
  'Bronze Sponsor',
  'Sponsor',
  'Backer',
] as const

type TierNames = (typeof tierNames)[number]

type BackerGroups = Partial<Record<TierNames, CollectiveMembersResponse[]>>

const groupedActiveFinancialBackers: BackerGroups = Object.groupBy(
  activeFinancialBackers,
  (el) => el.tier
)

/**
 * The priority of the tiers
 */
const sortTiers = tierNames.filter((el) =>
  Object.keys(groupedActiveFinancialBackers)
    .map((v) => v.toLowerCase())
    .includes(el.toLowerCase())
) as (keyof BackerGroups)[]
</script>
