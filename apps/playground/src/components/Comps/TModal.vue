<template>
  <BContainer fluid>
    <BOrchestrator />
    <BRow>
      <BCol>
        <BButton @click="showModal = !showModal">Toggle modal v-model</BButton>
        <BButton v-b-toggle.exampleModal>Toggle with v-b-toggle directive</BButton>
        <BButton v-b-modal.exampleModal>Toggle with v-b-modal directive</BButton>
        {{ showModal }}
        <!-- <BButton v-b-modal:exampleModal>Launch demo modal</BButton> -->
        <BModal
          id="exampleModal"
          v-model="showModal"
          :no-close-on-backdrop="noClose"
          size="xl"
          title="Modal title"
          fade
          >...</BModal
        >
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BModal
          v-model="isModalVisible"
          :no-close-on-esc="noClose"
          :no-close-on-backdrop="noClose"
          title="My Modal"
        >
          abc
        </BModal>

        <BButton @click="isModalVisible = true">Show Modal</BButton>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BModal v-model="showModal2">
          <BButton @click="showModal3 = true">Click me</BButton>
          <BModal v-model="showModal3" />
        </BModal>
        <BButton @click="showModal2 = true">Show Modal</BButton>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <div>noClose is {{ noClose }}</div>
        <BButton @click="noClose = true">Set noClose = true</BButton>
        <BButton @click="noClose = false">Set noClose = false</BButton>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BButton v-for="(fn, name) in showFns" :key="name" @click="fn">{{ name }}</BButton>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        {{ modalCount }}
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {computed, h, markRaw, onMounted, onUnmounted, ref, watchEffect} from 'vue'
import type {ColorVariant, ModalOrchestratorCreateParamBase} from 'bootstrap-vue-next'
import {BModal} from 'bootstrap-vue-next/components/BModal'
import {useModal} from 'bootstrap-vue-next/composables/useModal'

const {create, store} = useModal()
const modalCount = computed(() => store.value.modal.size)

const showModal = ref(false)
const showModal2 = ref(false)
const showModal3 = ref(false)

const noClose = ref(true)
const isModalVisible = ref(false)

const body = ref<ModalOrchestratorCreateParamBase['body']>('foo')
const firstRef = ref<ModalOrchestratorCreateParamBase>({
  // If we want to sync this, we will need a watcher
  body: body.value,
  title: 'foobar',
})
let interval: ReturnType<typeof setInterval> | null = null
onMounted(() => {
  interval = setInterval(() => {
    body.value = body.value === 'foo' ? 'bar' : 'foo'
  }, 1000)
})
onUnmounted(() => {
  if (interval !== null) {
    clearInterval(interval)
  }
})
watchEffect(() => {
  firstRef.value.body = body.value
})

const dynamicModalModelValue = ref<ModalOrchestratorCreateParamBase['modelValue']>(false)
const dynamicModal = computed<ModalOrchestratorCreateParamBase>({
  get: () => ({
    // We use a computed to make derivations down below, but we NEED to make sure we have a syncable modelValue. So we use a writable computed
    modelValue: dynamicModalModelValue.value,

    body: 'my body',
    title: 'my title',
    okVariant: (firstRef.value.body === 'foo' ? 'danger' : 'info') as ColorVariant,
  }),
  set: (value) => {
    dynamicModalModelValue.value = value.modelValue ?? dynamicModalModelValue.value
  },
})

const showFns = {
  basicNoReactive: async () => {
    await using _ = await create({
      title: 'foobar',
      okVariant: 'danger',
    }).show()
    return _
  },
  basicCustomComponent: async () => {
    await using _ = await create({
      slots: {default: () => markRaw(h('div', null, {default: () => 'foobar!'}))},
      okVariant: 'info',
    }).show()
    return _
  },
  simpleRefProps: async () => {
    await using _ = await create(firstRef).show()
    return _
  },
  dynamicRefProps: async () => {
    await using _ = await create(dynamicModal).show()
    return _
  },
  // Demonstration pseudocode, you can import a component and use it
  // importedComponent: () => {
  //   show?.({
  //     component: markRaw((await import('./MyModalComponent.vue')).default),
  //   })
  // },
}
</script>
