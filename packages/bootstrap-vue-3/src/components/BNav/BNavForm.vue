<template>
  <BForm
    :id="id"
    class="d-flex"
    :role="role"
    :floating="floating"
    :novalidate="novalidate"
    :validated="validated"
  >
    <slot />
  </BForm>
</template>

<script setup lang="ts">
import type {Booleanish} from '../../types'

interface Props {
  role?: string
  id?: string // Extend BFormProps
  floating?: Booleanish
  novalidate?: Booleanish
  validated?: Booleanish
}

withDefaults(defineProps<Props>(), {
  floating: false,
  novalidate: false,
  validated: false,
})
</script>
