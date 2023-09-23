// This needs to be in sync with packages/bootstrap-vue-next/src/composables/exports
// It cannot be destructured. I think this is a Nuxt limitation
// You also need to add this to the list on module.ts
export {
  useBreadcrumb,
  useColorMode,
  useModal,
  useModalController,
  useToast,
} from 'bootstrap-vue-next'
