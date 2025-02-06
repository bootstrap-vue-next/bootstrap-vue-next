<template>
  <div v-if="members" class="d-flex flex-wrap justify-content-center">
    <BCard
      v-for="member in members"
      :key="member.MemberId"
      class="d-flex flex-column align-items-center mx-1"
    >
      <template #img>
        <BAvatar
          class="mt-2"
          :src="member.image ?? undefined"
          :href="member.profile"
          target="_blank"
          :alt="member.name"
        />
      </template>
      <span>
        {{ member.name }}
        <small v-if="!!member.totalAmountDonated">
          {{
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: member.currency ?? 'USD',
              maximumFractionDigits: 0,
            }).format(member.totalAmountDonated)
          }}</small
        >
      </span>
    </BCard>
  </div>
</template>

<script setup lang="ts">
import type {CollectiveMembersResponse} from '../types'

defineProps<{
  members?: CollectiveMembersResponse[]
}>()
</script>
