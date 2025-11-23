/**
 * TypeScript type checking verification for useModal custom component props
 * This file is not meant to be executed, just type-checked
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

// Type checking test - this should not produce TypeScript errors
export function typeCheckTest() {
  const {create} = useModal()

  // Custom component with custom props - should work without ts-expect-error
  const modal1 = create({
    component: MyCustomModal,
    myProp: 'My Value',
    anotherProp: 42,
  })

  // Standard BModal props - should still work
  const modal2 = create({
    title: 'Test Modal',
    body: 'Test body',
    size: 'lg',
  })

  // Mix of standard and custom props - should work
  const modal3 = create({
    component: MyCustomModal,
    title: 'Test Title',
    myProp: 'Custom Value',
    size: 'md',
  })

  // All modals should have the same interface
  modal1.show()
  modal2.hide()
  modal3.toggle()
}
