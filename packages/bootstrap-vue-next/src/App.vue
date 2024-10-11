<template>
  <BCard>
    <BFormCheckbox v-model="preventShow">prevent show</BFormCheckbox>
    <BFormCheckbox v-model="preventHide">prevent hide</BFormCheckbox>
  </BCard>
  <b-row>
    <b-col>
      <BFormCheckbox v-model="showModal">modal ({{ showModal }})</BFormCheckbox>
      <BButton @click="show()">Show Modal (modalmanager)</BButton>
      <BButton v-b-toggle.test-modal>Show Modal (directive)</BButton>
      <BButton @click="(modalRef as any)?.show?.()">Show Modal (expose)</BButton>
      <BButton @click="testModal()">timer on modal</BButton>
      <BModal
        id="test-modal"
        ref="modalRef"
        v-model="showModal"
        @show="showEvent($event, 'show')"
        @shown="showEvent($event, 'shown')"
        @show-prevented="showEvent($event, 'show-prevented')"
        @hide="showEvent($event, 'hide')"
        @hidden="showEvent($event, 'hidden')"
        @hide-prevented="showEvent($event, 'hide-prevented')"
      />
      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-modal']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
    <b-col>
      <BFormCheckbox v-model="showCollapse">collapse</BFormCheckbox>
      <BButton id="button1" v-b-toggle.test-collapse>Show collapse</BButton>
      <BCollapse
        id="test-collapse"
        v-model="showCollapse"
        @show="showEvent($event, 'show')"
        @shown="showEvent($event, 'shown')"
        @show-prevented="showEvent($event, 'show-prevented')"
        @hide="showEvent($event, 'hide')"
        @hidden="showEvent($event, 'hidden')"
        @hide-prevented="showEvent($event, 'hide-prevented')"
        >Coll</BCollapse
      >
      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-collapse']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
    <b-col>
      <BButton id="button2">popover</BButton>
      <BFormCheckbox v-model="showPopover"> popover</BFormCheckbox>

      <BPopover
        id="test-popover"
        ref="popover"
        v-model="showPopover"
        :target="'#button2'"
        @show="showEvent($event, 'show')"
        @shown="showEvent($event, 'shown')"
        @show-prevented="showEvent($event, 'show-prevented')"
        @hide="showEvent($event, 'hide')"
        @hidden="showEvent($event, 'hidden')"
        @hide-prevented="showEvent($event, 'hide-prevented')"
        >popover</BPopover
      >
      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-popover']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
    <b-col>
      <BFormCheckbox v-model="showModalIf"> v-if modal</BFormCheckbox>

      <BModal
        v-if="showModalIf"
        id="test-modal-if"
        v-model="showModalIf"
        toggle
        @show="showEvent($event, 'show')"
        @shown="showEvent($event, 'shown')"
        @show-prevented="showEvent($event, 'show-prevented')"
        @hide="showEvent($event, 'hide')"
        @hidden="showEvent($event, 'hidden')"
        @hide-prevented="showEvent($event, 'hide-prevented')"
      >
        content
      </BModal>
      <BButton @click="showModalIf = true">open</BButton>
      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-modal-if']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
  </b-row>
  <b-row class="mt-5">
    <b-col>
      <BFormCheckbox v-model="showOffcanvas"> offcanvas</BFormCheckbox>

      <BOffcanvas
        id="test-offcanvas"
        v-model="showOffcanvas"
        title="Title"
        @show="showEvent($event, 'show')"
        @shown="showEvent($event, 'shown')"
        @show-prevented="showEvent($event, 'show-prevented')"
        @hide="showEvent($event, 'hide')"
        @hidden="showEvent($event, 'hidden')"
        @hide-prevented="showEvent($event, 'hide-prevented')"
      >
        content
      </BOffcanvas>

      <BButton @click="showOffcanvas = !showOffcanvas">Toggle Offcanvas</BButton>
      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-offcanvas']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
    <b-col>
      <BFormCheckbox v-model="showDropdown"> dropdown</BFormCheckbox>
      <BButton @click="testDropdown"> timer on dropdown</BButton>

      <BDropdown
        id="test-dropdown"
        v-model="showDropdown"
        text="dropdown"
        :auto-close="true"
        @show="showEvent($event, 'show')"
        @shown="showEvent($event, 'shown')"
        @show-prevented="showEvent($event, 'show-prevented')"
        @hide="showEvent($event, 'hide')"
        @hidden="showEvent($event, 'hidden')"
        @hide-prevented="showEvent($event, 'hide-prevented')"
      >
        <BDropdownItem href="#">Action</BDropdownItem>
      </BDropdown>
      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-dropdown']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
    <b-col>
      <BFormCheckbox v-model="showToast"> toast</BFormCheckbox>

      <BToast
        id="test-toast"
        v-model="showToast"
        title="title"
        @show="showEvent($event, 'show')"
        @shown="showEvent($event, 'shown')"
        @show-prevented="showEvent($event, 'show-prevented')"
        @hide="showEvent($event, 'hide')"
        @close="showEvent($event, 'close')"
        @hidden="showEvent($event, 'hidden')"
        @hide-prevented="showEvent($event, 'hide-prevented')"
      >
        TOAST
      </BToast>
      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-toast']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
// import {useModal} from 'bootstrap-vue-next'
import {useModal} from './index'

import {ref} from 'vue'

const {show} = useModal('test-modal')

const preventShow = ref(false)
const preventHide = ref(false)

const modalRef = ref(null)

const showModal = ref(false)
const showModalIf = ref(false)
const showCollapse = ref(false)
const showPopover = ref(false)
const showOffcanvas = ref(false)
const showDropdown = ref(false)
const showToast = ref(10000)

const popover = ref(null)

const messages = ref<Record<string, string[]>>({})

function showEvent(
  e: Event & {
    eventType?: string
    componentId: string
    target?: {className?: string}
    trigger?: string
  },
  message: string
) {
  const caller = new Error().stack?.split('\n')[2].trim().split(' ')[1]
  if (!e) {
    // eslint-disable-next-line no-console
    console.debug(message, caller)
    return
  }
  // console.log(arguments.callee.name)
  if (e.eventType === 'show' && preventShow.value) e.preventDefault()
  if (e.eventType === 'hide' && preventHide.value) e.preventDefault()
  // eslint-disable-next-line no-console
  console.debug(e.eventType || message, e.componentId, e.target?.className, e.trigger, caller)
  if (e.eventType) {
    if (!messages.value[e.componentId]) messages.value[e.componentId] = []
    messages.value[e.componentId].push(e.eventType)
  }
}
// function showMe(e: Event, value: boolean, message: string) {
//   // eslint-disable-next-line no-console
//   console.log(e)
//   if (value) e.preventDefault()
//   // eslint-disable-next-line no-console
//   console.debug(message)
// }
function testDropdown() {
  setTimeout(() => {
    showDropdown.value = !showDropdown.value
  }, 1000)

  setTimeout(() => {
    showDropdown.value = !showDropdown.value
  }, 2000)
}
function testModal() {
  setTimeout(() => {
    showModal.value = !showModal.value
  }, 1000)

  setTimeout(() => {
    showModal.value = !showModal.value
  }, 2000)
}
import {BCol, BContainer, BRow} from './components'
</script>
