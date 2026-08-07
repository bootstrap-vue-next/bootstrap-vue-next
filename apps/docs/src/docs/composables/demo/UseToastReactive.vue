<template>
  <BButton @click="showMe">Show</BButton>
</template>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref, watchEffect} from 'vue'
import {
  BButton,
  type ColorVariant,
  type ToastOrchestratorCreateParamBase,
  useToast,
} from 'bootstrap-vue-next'

const {create} = useToast()

const body = ref(`${Math.random()}`)

let intervalId: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  intervalId = setInterval(() => {
    body.value = `${Math.random()}`
  }, 1000)
})

onUnmounted(() => {
  if (intervalId !== undefined) {
    clearInterval(intervalId)
  }
})

// `create()` needs a writable ref/plain object (it needs to control its own state),
// so `reactive()` is not used here. Instead, derive the reactive pieces with `computed()`,
// then sync them onto a plain ref via `watchEffect()`.
const derivedVariant = computed(
  () =>
    (Number.parseInt(body.value.charAt(2) ?? '0') % 2 === 0 ? 'danger' : 'info') as ColorVariant
)
const myToast = ref<ToastOrchestratorCreateParamBase>({
  body: body.value,
  variant: derivedVariant.value,
})
watchEffect(() => {
  myToast.value.body = body.value
  myToast.value.variant = derivedVariant.value
})

const showMe = async() => {
  await using _ = await create(myToast).show()
}
</script>
