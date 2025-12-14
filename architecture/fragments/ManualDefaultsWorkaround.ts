import {computed, inject, ref} from 'vue'
import {defaultsKey} from 'bootstrap-vue-next'

// @ts-expect-error - props is from component context
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = {} as any

// #region snippet
// In component setup:
const globalDefaults = inject(defaultsKey, ref({}))
const componentDefaults = computed(() => globalDefaults.value?.BFormRadioGroup ?? {})

// Create computed properties for props that need global defaults support:
const buttonVariant = computed(
  () =>
    props.buttonVariant ??
    componentDefaults.value.buttonVariant ??
    globalDefaults.value?.global?.buttonVariant ??
    'secondary'
)
// #endregion snippet
