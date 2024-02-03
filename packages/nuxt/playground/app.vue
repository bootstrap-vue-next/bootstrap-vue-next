<template>
  <div style="min-height: 1000vh">
    <BToastOrchestrator />
    <BModal v-model="show"> Nuxt module playground! </BModal>
    <BButton @click="show = !show"> Click me </BButton>
    <img src="@/assets/logo.png" width="50" alt="Bootstrap logo" />
    <BImg src="@/assets/logo.png" width="50" alt="Bootstrap logo" />
    {{ f }}
    {{ toast }}
    <BButton @click="toast.show({props: {title: 'Hello World!'}})">Show Global Toast</BButton>
    <BFormSelect v-model="formSelectMultipleSelected" class="mb-3" multiple>
      <template #first>
        <BFormSelectOption :value="null" disabled>-- Please select an option --</BFormSelectOption>
      </template>
      <BFormSelectOption value="C">Option C</BFormSelectOption>
      <BFormSelectOption value="D">Option D</BFormSelectOption>
    </BFormSelect>
  </div>
</template>

<script setup>
const show = ref(false)

const f = useBreadcrumb()
useColorMode()
useModal()
useModalController()
const toast = useToast()
const formSelectMultipleSelected = ref([])
</script>
