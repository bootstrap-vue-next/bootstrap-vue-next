<template>
  <BButtonGroup>
    <BButton variant="success" @click="promiseToast"> Show the Toast </BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
import { h, markRaw } from 'vue'
import { BButton, BButtonGroup } from 'bootstrap-vue-next/components/BButton'
import { useToast } from 'bootstrap-vue-next/composables/useToast'

const { create } = useToast()

const promiseToast = async () => {
  await using r = await create({
    variant: 'primary',
    position: 'middle-center',
    bodyClass: 'w-100',
    modelValue: true,
    slots: {
      default: ({ hide }: { hide: (trigger?: string) => void }) => {
        const yesButton = markRaw(
          h(BButton, { onClick: () => hide('ok'), size: 'lg' }, () => 'Yes'),
        )
        const noButton = markRaw(
          h(BButton, { onClick: () => hide('cancel'), size: 'lg' }, () => 'No'),
        )

        return [
          markRaw(h('h2', { class: 'text-center mb-3' }, 'Ready?')),
          markRaw(
            h('div', { class: 'd-flex justify-content-center gap-2' }, [yesButton, noButton]),
          ),
        ]
      },
    },
    options: {
      resolveOnHide: true,
    },
  }).show()

  if (r && typeof r === 'object' && 'ok' in r) {
    await using _ = await create({ title: `you pressed: ${r.ok ? 'yes' : 'no'}` }).show()
  }
}
</script>
