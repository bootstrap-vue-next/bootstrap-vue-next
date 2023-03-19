<template>
  <div class="accordion-item">
    <component :is="headerTag" :id="`${computedId}heading`" class="accordion-header">
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
    </component>
    <b-collapse
      :id="computedId"
      class="accordion-collapse"
      :visible="visible"
      :accordion="parentData?.id.value ?? undefined"
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
import {accordionInjectionKey} from '../../utils'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish} from '../../types'

interface BAccordionItemProps {
  id?: string
  title?: string
  visible?: Booleanish
  headerTag?: string
}

const props = withDefaults(defineProps<BAccordionItemProps>(), {
  visible: false,
  headerTag: 'h2',
})

const parentData = inject(accordionInjectionKey, null)

const computedId = useId(toRef(props, 'id'), 'accordion_item')

const visibleBoolean = useBooleanish(toRef(props, 'visible'))
</script>
