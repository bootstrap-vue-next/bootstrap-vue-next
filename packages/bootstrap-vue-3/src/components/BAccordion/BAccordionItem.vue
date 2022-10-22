<template>
  <div class="accordion-item">
    <h2 :id="`${computedId}heading`" class="accordion-header">
      <button
        v-b-toggle:[computedId]
        class="accordion-button"
        :class="{collapsed: !visibleBoolean}"
        type="button"
        :aria-expanded="visibleBoolean ? 'true' : 'false'"
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
import {inject, toRef} from 'vue'
import BCollapse from '../BCollapse.vue'
import {BToggle as vBToggle} from '../../directives'
import {useBooleanish, useId} from '../../composables'
import {injectionKey} from './BAccordion.vue'
import type {Booleanish} from '../../types'
// import type {BAccordionItemProps} from '../types/components'

interface BAccordionItemProps {
  id?: string
  title?: string
  visible?: Booleanish
}

const props = withDefaults(defineProps<BAccordionItemProps>(), {visible: false})

const parent = inject<string>(injectionKey, '')

const computedId = useId(toRef(props, 'id'), 'accordion_item')

const visibleBoolean = useBooleanish(toRef(props, 'visible'))
</script>
