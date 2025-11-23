/**
 * TypeScript type checking verification for useModal custom component props
 * This file demonstrates both approaches: with and without explicit type parameters
 */

import {defineComponent} from 'vue'
import {useModal} from './index'

// Define a custom modal component with custom props
const MyCustomModal = defineComponent({
  name: 'MyCustomModal',
  props: {
    myProp: {
      type: String,
      required: true,
    },
    anotherProp: {
      type: Number,
      default: 0,
    },
  },
  template: '<div>{{ myProp }} - {{ anotherProp }}</div>',
})

// Extract prop types from the component
type MyCustomModalProps = {
  myProp: string
  anotherProp?: number
}

// Type checking test - this should not produce TypeScript errors
export function typeCheckTest() {
  const {create} = useModal()

  // Approach 1: Explicit type parameter (RECOMMENDED for type safety)
  const modal1 = create<MyCustomModalProps>({
    component: MyCustomModal,
    myProp: 'My Value', // ✅ Type-checked
    anotherProp: 42, // ✅ Type-checked
    // @ts-expect-error - invalidProp should cause an error
    invalidProp: 'error', // ❌ Would cause type error if uncommented
  })

  // Approach 2: Implicit (still works, allows any props but less safe)
  const modal2 = create({
    component: MyCustomModal,
    myProp: 'My Value', // Works but not strictly type-checked
    anotherProp: 42,
  })

  // Standard BModal props - still work as before
  const modal3 = create({
    title: 'Test Modal',
    body: 'Test body',
    size: 'lg',
  })

  // Mix of standard and custom props with explicit typing
  const modal4 = create<MyCustomModalProps>({
    component: MyCustomModal,
    title: 'Test Title',
    myProp: 'Custom Value',
    size: 'md',
  })

  // All modals should have the same interface
  modal1.show()
  modal2.hide()
  modal3.toggle()
  modal4.show()
}
