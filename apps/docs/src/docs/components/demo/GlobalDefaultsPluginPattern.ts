// eslint-disable-next-line @typescript-eslint/no-explicit-any
const app: any = null // Placeholder for the Vue app instance
// #region template
// In main.ts or app setup:
import {createBootstrap} from 'bootstrap-vue-next'

app.use(
  createBootstrap({
    components: {
      global: {
        buttonVariant: 'primary', // Applied to all components
        size: 'lg',
      },
      BFormCheckboxGroup: {
        buttonVariant: 'danger', // Specific to checkbox groups
        size: 'sm',
      },
    },
  })
)
// #endregion template
