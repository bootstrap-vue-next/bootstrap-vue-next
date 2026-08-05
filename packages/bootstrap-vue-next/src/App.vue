<script src="composables/usePopover/index.ts"></script>
<template>
  <BContainer>
    <BRow>
      <BCol>
        {{ iid }}
        <BButton @click="showoModal">MOdal button</BButton>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {BButton, BCol, BContainer, BRow} from './components'
import {useModal, usePopover, useToast} from './composables'
import {computed, ref} from 'vue'

const modal = useModal()
const toast = useToast()
const popover = usePopover()

const id = ref(1)
const iid = computed(() => id.value.toString())
const input = ref({
  id: '1',
  body: iid,
  modelValue: false,
})

const msg = ref('Hello World!')
const a = ref({
  msg,
  msgfff: computed(() => `${msg.value} pluys `),
})
setInterval(() => {
  id.value = id.value + 1
}, 2500)

const c = ref(a)
const mod = ref(false)
const d = computed({
  get() {
    const {msg: myMessage, ...rest} = c.value

    return {
      body: myMessage,
      id: rest.msgfff,
      modelValue: mod.value,
    }
  },
  set: (v) => {
    msg.value = v.body
    mod.value = v.modelValue
  },
})

const rrr = modal.create(input)

const showoModal = async () => {
  await using __ = await modal.create(input).show()
  await using _ = await rrr.show()
}
</script>
