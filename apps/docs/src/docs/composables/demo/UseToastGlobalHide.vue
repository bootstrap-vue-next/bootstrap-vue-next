<template>
  <BButtonGroup>
    <BButton variant="success" @click="notify"> Show Toasts </BButton>
    <BButton variant="warning" @click="hide('user-request', 'session-expiring')">
      Hide Session Toast
    </BButton>
    <BButton variant="danger" @click="hideAll('route-change')"> Hide All </BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
import { BButton, BButtonGroup } from 'bootstrap-vue-next/components/BButton'
import { useToast } from 'bootstrap-vue-next/composables/useToast'

const { create, hide, hideAll } = useToast()

// Shows the toast, then disposes of it once it has been hidden
const show = async (payload: Parameters<typeof create>[0]) => {
  await using toast = create(payload)
  await toast.show()
}

const notify = () => {
  void show({
    id: 'session-expiring',
    title: 'Session expiring',
    body: 'You will be signed out soon',
    variant: 'warning',
    position: 'bottom-center',
  })
  void show({
    id: 'sync-complete',
    title: 'Sync complete',
    body: 'Everything is up to date',
    variant: 'success',
    position: 'bottom-center',
  })
}
</script>
