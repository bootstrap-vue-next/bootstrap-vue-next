import {createBootstrap} from 'bootstrap-vue-next'

// #region snippet
// This WILL work for buttonVariant, size, and state:
createBootstrap({
  components: {
    BFormRadioGroup: {
      buttonVariant: 'primary', // ✅ Will be applied
      size: 'lg', // ✅ Will be applied
      state: false, // ✅ Will be applied
      stacked: true, // ⚠️ Will NOT be applied (use prop override)
    },
    global: {
      size: 'sm', // ✅ Will be applied as fallback if BFormRadioGroup.size not set
    },
  },
})
// #endregion snippet
