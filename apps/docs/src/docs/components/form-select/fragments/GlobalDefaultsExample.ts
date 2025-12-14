import {createBootstrap} from 'bootstrap-vue-next'

// #region snippet
// This WILL work for buttonVariant, size, and state:
createBootstrap({
  components: {
    BFormSelect: {
      size: 'lg', // ✅ Will be applied
      state: false, // ✅ Will be applied
      multiple: false, // ⚠️ Will NOT be applied (use prop override)
    },
    global: {
      size: 'sm', // ✅ Will be applied as fallback if BFormSelect.size not set
    },
  },
})
// #endregion snippet
