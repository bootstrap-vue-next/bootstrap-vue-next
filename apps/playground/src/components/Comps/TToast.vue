<template>
  <BContainer>
    <BRow>
      <BCol>
        <BToastOrchestrator />
        <BButton v-for="(fn, name) in showFns" :key="name" @click="fn">{{ name }}</BButton>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        {{ store.filter((el) => el.type === 'toast') }}
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {computed, h, onMounted, ref} from 'vue'
import type {ColorVariant} from 'bootstrap-vue-next'
import {useToast} from 'bootstrap-vue-next/composables/useToast'

const {create, store} = useToast()

// const firstRef = ref<OrchestratedToast>({
const firstRef = ref({
  body: `${Math.random()}`,
})

onMounted(() => {
  setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})

const showFns = {
  basicNoReactive: () => {
    create({
      modelValue: true,
      active: true,
      title: 'foobar',
    })
  },
  basicCustomComponent: () => {
    create({
      slots: {default: h('div', null, {default: () => 'foobar!'})},
      modelValue: true,
      active: true,
      variant: 'primary',
    })
  },
  simpleRefProps: () => {
    create(firstRef)
  },
  dynamicRefProps: () => {
    create(
      computed(() => ({
        ...firstRef.value,
        variant: (Number.parseInt(firstRef.value.body?.charAt(2) ?? '0') % 2 === 0
          ? 'danger'
          : 'info') as ColorVariant,
      }))
    )
  },
  // Demonstration psuedocode, you can import a component and use it
  // importedComponent: () => {
  //   show({
  //     component: import('./MyToastComponent.vue'),
  //   })
  // },
}
</script>
