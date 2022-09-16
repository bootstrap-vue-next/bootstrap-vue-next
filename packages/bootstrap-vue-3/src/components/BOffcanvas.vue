<template>
  <div
    ref="element"
    class="offcanvas"
    :class="classes"
    tabindex="-1"
    aria-labelledby="offcanvasLabel"
    :data-bs-backdrop="backdropBoolean"
    :data-bs-scroll="bodyScrollingBoolean"
  >
    <div class="offcanvas-header">
      <slot name="header" v-bind="{visible: modelValue, placement, hide}">
        <h5 id="offcanvasLabel" class="offcanvas-title">
          <slot name="title">
            {{ title }}
          </slot>
        </h5>
        <button
          v-if="!noHeaderCloseBoolean"
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          :aria-label="dismissLabel"
        />
      </slot>

      <!-- TODO in v0.2.10 this was fixed to include a dynamic aria-label -->
      <!-- My note still persists, that perhaps we should include native multilanguage support similar to Vuetify -->
      <!-- Regardless, if native multilanguage support is included or not, -->
      <!-- It will need to be reviewed through and ensure that any aria-{type} can be modified by a user -->
      <!-- of course, ignoring true static aria tags like the above aria-labelledby -->
    </div>
    <div class="offcanvas-body">
      <slot />
    </div>
    <div v-if="$slots.footer">
      <slot name="footer" v-bind="{visible: modelValue, placement, hide}" />
    </div>
  </div>
</template>

<script setup lang="ts">
// import type {BOffcanvasEmits, BOffcanvasProps} from '../types/components'
import {computed, onMounted, ref, toRef, watch} from 'vue'
import {Offcanvas} from 'bootstrap'
import {useBooleanish, useEventListener} from '../composables'
import type {Booleanish} from '../types'

interface BOffcanvasProps {
  dismissLabel?: string
  modelValue?: Booleanish
  bodyScrolling?: Booleanish
  backdrop?: Booleanish
  placement?: string
  title?: string
  noHeaderClose?: Booleanish
}

const props = withDefaults(defineProps<BOffcanvasProps>(), {
  dismissLabel: 'Close',
  modelValue: false,
  bodyScrolling: false,
  backdrop: true,
  placement: 'start',
  noHeaderClose: false,
})

const modelValueBoolean = useBooleanish(toRef(props, 'modelValue'))
const bodyScrollingBoolean = useBooleanish(toRef(props, 'bodyScrolling'))
const backdropBoolean = useBooleanish(toRef(props, 'backdrop'))
const noHeaderCloseBoolean = useBooleanish(toRef(props, 'noHeaderClose'))

interface BOffcanvasEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'show'): void
  (e: 'shown'): void
  (e: 'hide'): void
  (e: 'hidden'): void
}

const emit = defineEmits<BOffcanvasEmits>()

const element = ref<HTMLElement>()
const instance = ref<Offcanvas>()

useEventListener(element, 'shown.bs.offcanvas', () => emit('shown'))
useEventListener(element, 'hidden.bs.offcanvas', () => emit('hidden'))

const show = () => {
  emit('show')
  emit('update:modelValue', true)
}

const hide = () => {
  emit('hide')
  emit('update:modelValue', false)
}

useEventListener(element, 'show.bs.offcanvas', () => {
  show()
})

useEventListener(element, 'hide.bs.offcanvas', () => {
  hide()
})

onMounted((): void => {
  instance.value = new Offcanvas(element.value as HTMLElement)

  if (modelValueBoolean.value) {
    instance.value?.show(element.value as HTMLElement)
  }
})

const classes = computed(() => ({
  [`offcanvas-${props.placement}`]: !!props.placement,
}))

watch(
  () => modelValueBoolean.value,
  (value) => {
    if (value) {
      instance.value?.show(element.value as HTMLElement)
    } else {
      instance.value?.hide()
    }
  }
)
</script>
