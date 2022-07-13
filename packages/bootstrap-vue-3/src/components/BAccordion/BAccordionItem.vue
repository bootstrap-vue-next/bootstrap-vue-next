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
      :visible="visible"
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
import {inject} from 'vue'
import BCollapse from '../BCollapse.vue'
import vBToggle from '../../directives/BToggle'
import useId from '../../composables/useId'
import {injectionKey} from './BAccordion.vue'
// import type {BAccordionItemProps} from '../types/components'

interface BAccordionItemProps {
  id?: string
  title?: string
  visible?: boolean
}

const props = withDefaults(defineProps<BAccordionItemProps>(), {visible: false})

const computedId = useId(props.id, 'accordion_item')
const parent = inject(injectionKey, '')
</script>
