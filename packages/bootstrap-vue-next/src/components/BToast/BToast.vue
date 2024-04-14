<template>
  <BTransition
    :no-fade="props.noFade"
    v-bind="transProps"
    @before-enter="onBeforeEnter"
    @after-enter="onAfterEnter"
    @after-leave="onAfterLeave"
  >
    <div
      v-if="isToastVisible"
      :id="id"
      ref="element"
      class="toast"
      :class="[toastClass, computedClasses]"
      tabindex="0"
      :role="!isToastVisible ? undefined : props.isStatus ? 'status' : 'alert'"
      :aria-live="!isToastVisible ? undefined : props.isStatus ? 'polite' : 'assertive'"
      :aria-atomic="!isToastVisible ? undefined : true"
    >
      <component :is="headerTag" v-if="$slots.title || title" class="toast-header">
        <slot name="title" :hide="hideFn">
          <strong class="me-auto">
            {{ title }}
          </strong>
        </slot>
        <BCloseButton v-if="!props.noCloseButton" @click="hideFn('close')" />
      </component>
      <template v-if="$slots.default || body">
        <component
          :is="computedTag"
          class="toast-body"
          style="display: block"
          :class="bodyClass"
          v-bind="computedLinkProps"
          @click="computedLink ? hideFn() : () => {}"
        >
          <slot :hide="hideFn">
            {{ body }}
          </slot>
        </component>
      </template>
      <BProgress
        v-if="typeof modelValue === 'number' && progressProps !== undefined"
        :animated="progressProps.animated"
        :precision="progressProps.precision"
        :show-progress="progressProps.showProgress"
        :show-value="progressProps.showValue"
        :striped="progressProps.striped"
        :variant="progressProps.variant"
        :max="modelValue"
        :value="remainingMs"
        height="4px"
      />
    </div>
  </BTransition>
</template>

<script setup lang="ts">
import {computed, onBeforeUnmount, ref, toRef, watch, watchEffect} from 'vue'
import {useBLinkHelper, useColorVariantClasses, useCountdown} from '../../composables'
import type {BToastProps} from '../../types'
import BTransition from '../BTransition/BTransition.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BLink from '../BLink/BLink.vue'
import {useElementHover, useToNumber} from '@vueuse/core'
import BProgress from '../BProgress/BProgress.vue'
import {BvTriggerableEvent} from '../../utils'

const props = withDefaults(defineProps<BToastProps>(), {
  bgVariant: null,
  body: undefined,
  bodyClass: undefined,
  headerClass: undefined,
  headerTag: 'div',
  id: undefined,
  interval: 1000,
  isStatus: false,
  noCloseButton: false,
  noFade: false,
  noHoverPause: false,
  progressProps: undefined,
  showOnPause: true,
  solid: false,
  textVariant: null,
  title: undefined,
  toastClass: undefined,
  transProps: undefined,
  // Link props
  // All others use defaults
  active: undefined,
  activeClass: undefined,
  append: undefined,
  disabled: undefined,
  exactActiveClass: undefined,
  href: undefined,
  icon: undefined,
  opacity: undefined,
  opacityHover: undefined,
  rel: undefined,
  replace: undefined,
  routerComponentName: undefined,
  target: undefined,
  to: undefined,
  underlineOffset: undefined,
  underlineOffsetHover: undefined,
  underlineOpacity: undefined,
  underlineOpacityHover: undefined,
  underlineVariant: undefined,
  variant: undefined,
  // End link props
})

const emit = defineEmits<{
  'close': [value: BvTriggerableEvent]
  'close-countdown': [value: number]
  'hide': [value: BvTriggerableEvent]
  'hidden': [value: BvTriggerableEvent]
  'show': [value: BvTriggerableEvent]
  'shown': [value: BvTriggerableEvent]
  'show-prevented': []
  'hide-prevented': []
}>()

const element = ref<HTMLElement | null>(null)

const isHovering = useElementHover(element)
// Note: passive: true will sync an internal ref... This is required for useToast to exit,
// Since the modelValue that's passed from that composable is not reactive, this internal ref _is_ and thus it will trigger closing the toast
const modelValue = defineModel<boolean | number>({default: false})

const {computedLink, computedLinkProps} = useBLinkHelper(props)

const intervalNumber = useToNumber(() => props.interval)
// TODO solid is never used
const resolvedBackgroundClasses = useColorVariantClasses(props)
const countdownLength = toRef(() => (typeof modelValue.value === 'boolean' ? 0 : modelValue.value))

const {
  isActive,
  pause,
  restart,
  resume,
  stop,
  isPaused,
  value: remainingMs,
} = useCountdown(countdownLength, intervalNumber, {
  immediate: typeof modelValue.value === 'number',
})

watchEffect(() => {
  emit('close-countdown', remainingMs.value)
})

const computedTag = toRef(() => (computedLink.value ? BLink : 'div'))

const isToastVisible = toRef(() =>
  typeof modelValue.value === 'boolean'
    ? modelValue.value
    : isActive.value || (props.showOnPause && isPaused.value)
)

const computedClasses = computed(() => [
  resolvedBackgroundClasses.value,
  {
    show: isToastVisible.value,
  },
])

const onMouseEnter = () => {
  if (props.noHoverPause) return
  pause()
}

watch(isHovering, (newValue) => {
  if (newValue) {
    onMouseEnter()
    return
  }
  resume()
})

const buildTriggerableEvent = (
  type: string,
  opts: Readonly<Partial<BvTriggerableEvent>> = {}
): BvTriggerableEvent =>
  new BvTriggerableEvent(type, {
    cancelable: false,
    target: element.value || null,
    relatedTarget: null,
    trigger: null,
    ...opts,
    componentId: props.id,
  })

const showFn = () => {
  const event = buildTriggerableEvent('show', {cancelable: true})
  emit('show', event)
  if (event.defaultPrevented) {
    if (modelValue.value) modelValue.value = false
    emit('show-prevented')
    return
  }
  if (!modelValue.value) modelValue.value = true
}
const hideFn = (trigger = '') => {
  const event = buildTriggerableEvent('hide', {cancelable: trigger !== '', trigger})

  emit('hide', event)

  if (trigger === 'close') {
    emit('close', event)
  }

  if (event.defaultPrevented) {
    emit('hide-prevented')
    if (!modelValue.value) modelValue.value = true
    return
  }

  if (typeof modelValue.value === 'boolean') {
    modelValue.value = false
  } else {
    modelValue.value = 0
    stop()
  }
}

const onBeforeEnter = () => {
  showFn()
}
const onAfterEnter = () => {
  emit('shown', buildTriggerableEvent('shown'))
}
const onAfterLeave = () => {
  emit('hidden', buildTriggerableEvent('hidden'))
}

// isActive in the composable will cause the toast to hide when the countdown is done
watch(isActive, (newValue) => {
  if (newValue === false && isPaused.value === false && !!modelValue.value) {
    hideFn()
  }
})

onBeforeUnmount(stop)

defineExpose({
  pause,
  restart,
  resume,
  stop,
})
</script>
