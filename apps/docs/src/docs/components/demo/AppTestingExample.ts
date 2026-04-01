// MyComponent.spec.ts
import {mount} from '@vue/test-utils'
import {createBootstrap} from 'bootstrap-vue-next'
import MyComponent from './MyComponent.vue'

test('mounts a component that uses useToast()', () => {
  const wrapper = mount(MyComponent, {
    global: {
      plugins: [createBootstrap()],
    },
  })
  expect(wrapper.text()).toContain('Show Toast')
})
