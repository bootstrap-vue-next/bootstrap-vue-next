<template>
  <BLink
    v-bind="props"
    :href="computedLocation"
    :active="route.path === props.to"
    :aria-haspopup="isExternalLink ? 'dialog' : undefined"
    @click.stop.prevent="onClick"
  >
    <slot />
  </BLink>
</template>

<script setup lang="ts">
import {useRoute, useRouter, withBase} from 'vitepress'
import {useModal} from 'bootstrap-vue-next/composables/useModal'
import type {BLinkProps} from 'bootstrap-vue-next'
import {computed, h} from 'vue'
import {BButton} from 'bootstrap-vue-next/components/BButton'
import {BLink} from 'bootstrap-vue-next/components/BLink'

const props = defineProps<Omit<BLinkProps, 'to'> & {to?: string}>()

const route = useRoute()
const router = useRouter()
const modal = useModal()

const computedLocation = computed(() => {
  if (props.href) return props.href
  if (props.to) return withBase(props.to)
  return undefined
})
const isHash = computed(() => computedLocation.value?.startsWith('#'))

const isExternalLink = computed(() => {
  if (props.href && !isHash.value) return true
  return (
    props.to &&
    (props.to.startsWith('http://') || props.to.startsWith('https://') || props.to.startsWith('//'))
  )
})

const onClick = async () => {
  // isHash links just use browser default nav with href
  if (!computedLocation.value || isHash.value) return
  if (isExternalLink.value) {
    const locationURL = new URL(computedLocation.value)

    await using conf = modal.create({
      title: 'You are leaving the site',
      cancelTitle: 'Cancel',
      slots: {
        ok: (scope) =>
          h(
            BButton,
            {
              variant: 'primary',
              target: '_blank',
              onClick: () => {
                if (
                  typeof scope === 'object' &&
                  scope !== null &&
                  'ok' in scope &&
                  typeof scope.ok === 'function'
                ) {
                  scope.ok()
                }
              },
            },
            {default: () => 'Continue'}
          ),
        default: () =>
          h('div', null, [
            'You are about to leave the current page to go to ',
            h('code', null, locationURL.origin),
            '. Do you want to continue?',
          ]),
      },
    })
    const result = await conf.show()
    if (result.ok) {
      window.open(computedLocation.value, '_blank')
    }
  } else if (props.to) {
    await router.go(computedLocation.value)
  }
}
</script>
