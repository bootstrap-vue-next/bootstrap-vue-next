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
        {{ store.filter((el) => el.type === 'modal') }}
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {computed, h, onMounted, ref, toValue} from 'vue'
import type {ColorVariant, OrchestratedModal} from 'bootstrap-vue-next'
import {BModal} from 'bootstrap-vue-next/components/BModal'
import {useModal} from 'bootstrap-vue-next/composables/useModal'

const showModal = ref(false)
const showModal2 = ref(false)
const showModal3 = ref(false)

const noClose = ref(true)
const isModalVisible = ref(false)

const firstRef = ref<OrchestratedModal>({
  body: `${Math.random()}`,
  title: 'foobar',
})

onMounted(() => {
  setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})

const {create, store} = useModal()

const showFns = {
  basicNoReactive: () => {
    create({
      title: 'foobar',
      okVariant: 'danger',
    })
  },
  basicCustomComponent: () => {
    create({
      slots: {default: h('div', null, {default: () => 'foobar!'})},

      okVariant: 'info',
    })
  },
  simpleRefProps: () => {
    create(firstRef)
  },
  dynamicRefProps: () => {
    create(
      computed(() => ({
        ...firstRef.value,
        okVariant: (Number.parseInt((toValue(firstRef.value.body) ?? '').charAt(2) ?? '0') % 2 === 0
          ? 'danger'
          : 'info') as ColorVariant,
      }))
    )
  },
  // Demonstration psuedocode, you can import a component and use it
  // importedComponent: () => {
  //   show?.({
  //     component: import('./MyModalComponent.vue'),
  //   })
  // },
  customComponentTest: () => {
    // Test that custom components no longer produce reactive warnings
    const TestComponent = {
      name: 'InlineTestComponent',
      template: '<div class="p-3">This is a test custom component that should not produce reactive warnings!</div>'
    }
    create({
      component: TestComponent,
      title: 'Custom Component Test (No Warning)',
      size: 'lg'
    }).show()
  },
}
</script>
