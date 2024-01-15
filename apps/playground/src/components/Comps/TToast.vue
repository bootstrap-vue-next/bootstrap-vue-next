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
        {{ toasts }}
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {computed, h, ref} from 'vue'
import {BToast, type ColorVariant, type OrchestratedToast, useToast} from 'bootstrap-vue-next'

const {show, toasts} = useToast()

const firstRef = ref<OrchestratedToast>({
  body: `${Math.random()}`,
})

setInterval(() => {
  firstRef.value.body = `${Math.random()}`
}, 1000)

const showFns = {
  basicNoReactive: () => {
    show?.({
      props: {
        value: true,
        active: true,
        title: 'foobar',
      },
    })
  },
  basicCustomComponent: () => {
    show?.({
      component: h(BToast, null, {default: () => 'foobar!'}),
      props: {
        value: true,
        active: true,
        variant: 'primary',
      },
    })
  },
  simpleRefProps: () => {
    show?.({
      props: firstRef,
    })
  },
  dynamicRefProps: () => {
    show?.({
      props: computed(() => ({
        ...firstRef.value,
        variant: (Number.parseInt(firstRef.value.body?.charAt(2) ?? '0') % 2 === 0
          ? 'danger'
          : 'info') as ColorVariant,
      })),
    })
  },
  getterFunction: () => {
    show?.({
      props: () => ({
        title: firstRef.value.body,
      }),
    })
  },
  // Demonstration psuedocode, you can import a component and use it
  // importedComponent: () => {
  //   show({
  //     component: import('./MyToastComponent.vue'),
  //   })
  // },
}
</script>
