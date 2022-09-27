<template>
  <b-card>
    <!-- TODO add possible blank Img? -->
    <!-- Problem is BCard doesn't have an option for blank imgs -->
    <template v-if="!noHeaderBoolean" #header>
      <slot name="header">
        <b-placeholder v-bind="headerAttrs" />
      </slot>
    </template>
    <slot>
      <div>
        <b-placeholder cols="7" />
        <b-placeholder cols="4" />
        <b-placeholder cols="4" />
        <b-placeholder cols="6" />
        <b-placeholder cols="8" />
      </div>
    </slot>
    <template v-if="!noFooterBoolean" #footer>
      <slot name="footer">
        <b-placeholder v-bind="footerAttrs" />
      </slot>
    </template>
  </b-card>
</template>

<script setup lang="ts">
import BCard from '../BCard/BCard.vue'
import BPlaceholder from './BPlaceholder.vue'
import {Booleanish, ColorVariant} from '../../types'
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'

interface Props {
  noHeader?: Booleanish
  headerWidth?: string | number
  headerVariant?: ColorVariant
  headerAnimation?: 'glow' | 'wave'
  headerSize?: 'xs' | 'sm' | 'lg'

  noFooter?: Booleanish
  footerWidth?: string | number
  footerVariant?: ColorVariant
  footerAnimation?: 'glow' | 'wave'
  footerSize?: 'xs' | 'sm' | 'lg'

  animation?: 'glow' | 'wave'
  size?: 'xs' | 'sm' | 'lg'
  variant?: ColorVariant
  noButton?: Booleanish
}

const props = withDefaults(defineProps<Props>(), {
  noButton: false,
  headerWidth: 100,
  footerWidth: 100,
  noHeader: false,
  noFooter: false,
})

const noButtonBoolean = useBooleanish(toRef(props, 'noButton'))
const noHeaderBoolean = useBooleanish(toRef(props, 'noHeader'))
const noFooterBoolean = useBooleanish(toRef(props, 'noFooter'))

const headerAttrs = computed(() => ({
  width: props.headerWidth,
  variant: props.headerVariant,
  animation: props.headerAnimation,
  size: props.headerSize,
}))

const ButtonClasses = computed<Array<string>>(() => [
  'btn',
  `btn-${props.footerVariant ?? 'primary'}`,
  'disabled',
])

const footerAttrs = computed(() => ({
  class: !noButtonBoolean.value ? ButtonClasses.value : undefined,
  tag: !noButtonBoolean.value ? 'div' : undefined,
  width: props.footerWidth,
  animation: props.footerAnimation,
  size: props.footerSize,
  variant: props.footerVariant,
}))
</script>
