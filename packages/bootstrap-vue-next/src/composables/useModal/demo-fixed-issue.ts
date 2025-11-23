/**
 * Demo: This file demonstrates that the typing issue from the bug report is now fixed
 *
 * Before the fix, this would have produced TypeScript error TS2353:
 * "Object literal may only specify known properties, and 'myProp' does not exist in type 'ModalOrchestratorCreateParam'"
 *
 * After the fix with generics, TypeScript provides proper type checking for custom props.
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

// Define the prop types for type safety
type MyModalProps = {
  myProp: string
}

// Usage example from the bug report - now works with type safety!
export function demonstrateFixedIssue() {
  const {create} = useModal()

  // Recommended: Use explicit type parameter for full type safety
  const modal = create<MyModalProps>({
    component: MyModal,
    myProp: 'My Value', // ✅ Type-checked - no longer triggers TS 2353
  })

  modal.show()

  // Alternative: Implicit typing (backward compatible, but less type-safe)
  const modal2 = create({
    component: MyModal,
    myProp: 'My Value', // ✅ Also works without error
  })

  modal2.show()
}
