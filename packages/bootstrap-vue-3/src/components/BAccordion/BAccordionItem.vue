<template>
  <div class="accordion-item">
    <h2 :id="`${computedId}heading`" class="accordion-header">
      <button
        v-b-toggle:[computedId]
        class="accordion-button"
        :class="{collapsed: !visible}"
        type="button"
        :aria-expanded="visible ? 'true' : 'false'"
        :aria-controls="computedId"
      >
        <slot name="title">
          {{ title }}
        </slot>
      </button>
    </h2>
    <b-collapse
      :id="computedId"
      class="accordion-collapse"
      :visible="booleanVisible"
      :accordion="parent"
      :aria-labelledby="`heading${computedId}`"
    >
      <div class="accordion-body">
        <slot />
      </div>
    </b-collapse>
  </div>
</template>

<script setup lang="ts">
import {computed, inject} from 'vue'
import BCollapse from '../BCollapse.vue'
import vBToggle from '../../directives/BToggle'
import {useId} from '../../composables'
import {injectionKey} from './BAccordion.vue'
import {Booleanish} from '../../types'
import {resolveBooleanish} from '../../utils'
// import type {BAccordionItemProps} from '../types/components'

interface BAccordionItemProps {
  id?: string
  title?: string
  visible?: Booleanish
}

const props = withDefaults(defineProps<BAccordionItemProps>(), {visible: false})

const booleanVisible = computed(() => resolveBooleanish(props.visible))

const computedId = useId(props.id, 'accordion_item')
const parent = inject(injectionKey, '')
</script>
