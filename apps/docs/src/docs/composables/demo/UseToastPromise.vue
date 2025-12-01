<template>
  <BButtonGroup>
    <BButton
      variant="success"
      @click="promiseToast"
    >
      Show the Toast
    </BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
import {h} from 'vue'
import {BButton, BButtonGroup, useToast} from 'bootstrap-vue-next'

const {create} = useToast()

const promiseToast = () => {
  create(
    {
      variant: 'primary',
      position: 'middle-center',
      bodyClass: 'w-100',
      modelValue: true,
      slots: {
        default: ({hide}) => [
          h('h2', {class: 'text-center mb-3'}, 'Ready?'),
          h('div', {class: 'd-flex justify-content-center gap-2'}, [
            h(BButton, {onClick: () => hide('ok'), size: 'lg'}, () => 'Yes'),
            h(BButton, {onClick: () => hide('cancel'), size: 'lg'}, () => 'No'),
          ]),
        ],
      },
    },
    {resolveOnHide: true}
  ).then((r) => {
    if (r && typeof r === 'object' && 'ok' in r) {
      create({title: `you pressed: ${r.ok ? 'yes' : 'no'}`})
    }
  })
}
</script>
