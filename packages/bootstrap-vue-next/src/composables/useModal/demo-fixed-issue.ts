/**
 * Demo: This file demonstrates that the typing issue from the bug report is now fixed
 * 
 * Before the fix, this would have produced TypeScript error TS2353:
 * "Object literal may only specify known properties, and 'myProp' does not exist in type 'ModalOrchestratorCreateParam'"
 * 
 * After the fix, this compiles without errors.
 */

import {defineComponent} from 'vue'
import {useModal} from './index'

// Custom modal component with custom props (from the bug report)
const MyModal = defineComponent({
  name: 'MyModal',
  props: {
    myProp: {
      type: String,
      required: true,
    },
  },
  template: '<div>{{ myProp }}</div>',
})

// Usage example from the bug report - this now works without ts-expect-error!
export function demonstrateFixedIssue() {
  const {create} = useModal()
  
  // This previously caused TS2353 error, but now compiles successfully
  const modal = create({
    component: MyModal,
    myProp: 'My Value', // ✅ No longer triggers TS 2353
  })
  
  modal.show()
}
