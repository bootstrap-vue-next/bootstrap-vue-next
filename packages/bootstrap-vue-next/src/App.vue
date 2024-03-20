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
    </b-col>
    <b-col>
      <BFormCheckbox v-model="showCollapse">collapse</BFormCheckbox>
      <BButton id="button1" v-b-toggle.collapse1>Show collapse</BButton>
      <BCollapse
        id="collapse1"
        v-model="showCollapse"
        @show="showEvent($event, 'show')"
        @shown="showEvent($event, 'shown')"
        @show-prevented="showEvent($event, 'show-prevented')"
        @hide="showEvent($event, 'hide')"
        @hidden="showEvent($event, 'hidden')"
        @hide-prevented="showEvent($event, 'hide-prevented')"
        >Coll</BCollapse
      >
    </b-col>
    <b-col>
      <BButton id="button2">popover</BButton>
      <BFormCheckbox v-model="showPopover"> popover</BFormCheckbox>

      <BPopover
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
    </b-col>
    <b-col>
      <BFormCheckbox v-model="showModalIf"> v-if modal</BFormCheckbox>

      <BModal
        v-if="showModalIf"
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
    </b-col>
  </b-row>
  <b-row class="mt-5">
    <b-col>
      <BFormCheckbox v-model="showOffcanvas"> offcanvas</BFormCheckbox>

      <BOffcanvas
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
    </b-col>
    <b-col>
      <BFormCheckbox v-model="showDropdown"> dropdown</BFormCheckbox>
      <BButton @click="testDropdown"> timer on dropdown</BButton>

      <BDropdown
        v-model="showDropdown"
        text="dropdown"
        @show="showEvent($event, 'show')"
        @shown="showEvent($event, 'shown')"
        @show-prevented="showEvent($event, 'show-prevented')"
        @hide="showEvent($event, 'hide')"
        @hidden="showEvent($event, 'hidden')"
        @hide-prevented="showEvent($event, 'hide-prevented')"
      >
        <BDropdownItem href="#">Action</BDropdownItem>
      </BDropdown>
    </b-col>
    <b-col>
      <BFormCheckbox v-model="showToast"> toast</BFormCheckbox>

      <BToast
        v-model="showToast"
        @show="showEvent($event, 'show')"
        @shown="showEvent($event, 'shown')"
        @show-prevented="showEvent($event, 'show-prevented')"
        @hide="showEvent($event, 'hide')"
        @hidden="showEvent($event, 'hidden')"
        @hide-prevented="showEvent($event, 'hide-prevented')"
      >
        TOAST
      </BToast>
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
const showToast = ref(false)

const popover = ref(null)
// setTimeout(() => {
//   ;(popover.value as any)?.show?.()
// }, 1000)
function showEvent(e: any, message: string) {
  const caller = new Error().stack?.split('\n')[2].trim().split(' ')[1]
  if (!e) {
    console.debug(message, caller)
    return
  }
  // console.log(arguments.callee.name)
  if (e.eventType === 'show' && preventShow.value) e.preventDefault()
  if (e.eventType === 'hide' && preventHide.value) e.preventDefault()
  console.debug(e.eventType || message, e.componentId, e.target?.className, e.trigger, caller)
}
function showMe(e: Event, value: boolean, message: string) {
  console.log(e)
  if (value) e.preventDefault()
  console.debug(message)
}
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
