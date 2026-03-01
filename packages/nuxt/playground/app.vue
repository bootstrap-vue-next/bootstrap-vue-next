<template>
  <div style="min-height: 1000vh">
    <BOrchestrator />
    <BAlert :model-value="true">
      Hello World
    </BAlert>
    <BModal v-model="show">
      Nuxt module playground!
    </BModal>

    <BButton @click="show = !show">
      Click me
    </BButton>
    <img
      src="@/assets/logo.png"
      width="50"
      alt="Bootstrap logo"
    >
    <BImg
      src="@/assets/logo.png"
      width="50"
      alt="Bootstrap logo"
    />
    {{ f }}
    {{ toast }}
    <BButton @click="toast.create({ title: 'Hello World!' })">
      Show Global Toast
    </BButton>
    <BFormSelect
      v-model="formSelectMultipleSelected"
      class="mb-3"
      multiple
    >
      <template #first>
        <BFormSelectOption
          :value="null"
          disabled
        >
          -- Please select an option --
        </BFormSelectOption>
      </template>
      <BFormSelectOption value="C">
        Option C
      </BFormSelectOption>
      <BFormSelectOption value="D">
        Option D
      </BFormSelectOption>
    </BFormSelect>
    <BCollapse
      id="collapse-1"
      class="mt-2"
    >
      <template #header="{ visible, toggle, id }">
        <h4>Custom Header</h4>
        <p>Visible: {{ visible }}</p>
        <BButton
          variant="primary"
          :aria-expanded="visible"
          :aria-controls="id"
          @click="toggle"
        >
          Toggle
        </BButton>
      </template>
      <BCard v-b-color-mode="'light'">
        <p class="card-text">
          Collapse contents Here
        </p>
        <BButton
          v-b-toggle.collapse-1-inner
          size="sm"
        >
          Toggle Inner Collapse with directive
        </BButton>
        <BCollapse
          id="collapse-1-inner"
          class="mt-2"
        >
          <BCard>Hello!</BCard>
        </BCollapse>
      </BCard>
    </BCollapse>
    <BCard title="foobar">
      bar foo
    </BCard>
    <NavTestingArea />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBreadcrumb, useColorMode, useModal, useToast } from 'bootstrap-vue-next'

const show = ref(false)

const f = useBreadcrumb()
useColorMode()
useModal()
const toast = useToast()
const formSelectMultipleSelected = ref([])
</script>
