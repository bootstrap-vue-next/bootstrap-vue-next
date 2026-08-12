<template>
  <BContainer>
    <BRow>
      <BCol>
        <BOrchestrator />
        <BButton v-for="(fn, name) in showFns" :key="name" @click="fn">{{ name }}</BButton>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        {{ toastCount }}
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {computed, h, markRaw, onMounted, onUnmounted, ref, watchEffect} from 'vue'
import type {ColorVariant, ToastOrchestratorCreateParamBase} from 'bootstrap-vue-next'
import {useToast} from 'bootstrap-vue-next/composables/useToast'

const {create, store} = useToast()
const toastCount = computed(() => store.value.toast.size)

const body = ref<ToastOrchestratorCreateParamBase['body']>('foo')
const firstRef = ref<ToastOrchestratorCreateParamBase>({
  body: body.value,
})
let interval: ReturnType<typeof setInterval> | null = null
onMounted(() => {
  interval = setInterval(() => {
    body.value = body.value === 'foo' ? 'bar' : 'foo'
  }, 1000)
})
onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
watchEffect(() => {
  firstRef.value.body = body.value
})

const dynamicModelValue = ref<ToastOrchestratorCreateParamBase['modelValue']>(false)
const dynamicToast = computed<ToastOrchestratorCreateParamBase>({
  get: () => ({
    modelValue: dynamicModelValue.value,
    body: firstRef.value.body,
    variant: (firstRef.value.body === 'foo' ? 'danger' : 'info') as ColorVariant,
  }),
  set: (value) => {
    dynamicModelValue.value = value.modelValue
  },
})

const showFns = {
  basicNoReactive: async () => {
    await using _  = await create({
      modelValue: true,
      active: true,
      title: 'foobar',
    }).show()
    return _
  },
  basicCustomComponent: async () => {
    await using _ = await create({
      slots: {default: () => markRaw(h('div', null, 'foobar!'))},
      modelValue: true,
      active: true,
      variant: 'primary',
    }).show()
    return _
  },
  simpleRefProps: async () => {
    await using _ = await create(firstRef).show()
    return _
  },
  dynamicRefProps: async () => {
    await using _ = await create(dynamicToast).show()
    return _
  },
  // Demonstration psuedocode, you can import a component and use it
  // importedComponent: () => {
  //   show({
  //     component: markRaw((await import('./MyToastComponent.vue')).default),
  //   })
  // },
}
</script>
