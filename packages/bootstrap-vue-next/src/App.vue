<template>
  <BCard>
    <BButton @click="nestedModal1 = !nestedModal1">Open First Modal</BButton>

    <BModal v-model="nestedModal1" size="lg" title="First Modal" ok-only no-stacking>
      <p class="my-2">First Modal</p>
      <BButton @click="nestedModal2 = !nestedModal2">Open Second Modal</BButton>
    </BModal>

    <BModal v-model="nestedModal2" title="Second Modal" ok-only>
      <p class="my-2">Second Modal</p>
      <BButton size="sm" @click="nestedModal3 = !nestedModal3">Open Third Modal</BButton>
    </BModal>

    <BModal v-model="nestedModal3" size="sm" title="Third Modal" ok-only>
      <p class="my-1">Third Modal</p>
    </BModal>

    <BAccordion v-model="openId" flush>
      <BAccordionItem id="id1" title="Accordion Item #1" :visible="preventHide">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the
        collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </BAccordionItem>

      <BAccordionItem id="id2" title="Accordion Item #2">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until
        the collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </BAccordionItem>

      <BAccordionItem id="id3" title="Accordion Item #3">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
        collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </BAccordionItem>
    </BAccordion>
    <BFormCheckbox v-model="preventShow">prevent show</BFormCheckbox>
    <BFormCheckbox v-model="preventHide">prevent hide</BFormCheckbox>
    <BFormCheckbox v-model="noFade">no fade/animation</BFormCheckbox>
    <BFormCheckbox v-model="slowAnimation">slow animations</BFormCheckbox>
    <BFormCheckbox v-model="lazyLoad">lazy load</BFormCheckbox>
    <BFormCheckbox v-model="persistent">persistent children</BFormCheckbox>
  </BCard>
  <b-row>
    <b-col>
      <BFormCheckbox v-model="modalIf"> v-if modal (modalIf)</BFormCheckbox>
      <p>Using the same ref in v-if and v-model</p>

      <BModal
        v-if="modalIf"
        id="test-modal-if"
        v-model="modalIf"
        :no-fade="noFade"
        :lazy="lazyLoad"
        :persistent="persistent"
        @show="doEvent($event, 'show')"
        @shown="doEvent($event, 'shown')"
        @show-prevented="doEvent($event, 'show-prevented')"
        @hide="doEvent($event, 'hide')"
        @esc="doEvent($event, 'esc')"
        @ok="doEvent($event, 'ok')"
        @close="doEvent($event, 'close')"
        @backdrop="doEvent($event, 'backdrop')"
        @cancel="doEvent($event, 'cancel')"
        @hidden="doEvent($event, 'hidden')"
        @hide-prevented="doEvent($event, 'hide-prevented')"
      >
        content
        <LazyComponent msg="model if" />
      </BModal>
      <BButton @click="modalIf = true">open</BButton>
      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-modal-if']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
    <b-col>
      <div class="d-flex flex-wrap gap-1">
        <BFormCheckbox v-model="modal.value">modal ({{ modal.value }})</BFormCheckbox>
        <BFormCheckbox v-model="modal.toggle">toggle</BFormCheckbox>
        <BFormCheckbox v-model="modal.visible">visible</BFormCheckbox>
      </div>
      <div class="d-flex flex-wrap gap-1">
        <BButton size="sm" @click="show()">modalmanager</BButton>
        <BButton v-b-toggle.test-modal size="sm">directive</BButton>
        <BButton size="sm" @click="(modal.ref as any)?.toggle?.()">expose</BButton>
        <BButton size="sm" @click="timer(modal, 'value')">timer</BButton>
        <BButton size="sm" @click="timer(modal, 'toggle')">timer toggle</BButton>
        <BButton size="sm" @click="timer(modal, 'visible')">timer visible</BButton>
      </div>
      <BModal
        id="test-modal"
        :ref="
          (el: HTMLElement) => {
            modal.ref = el
          }
        "
        v-model="modal.value"
        :no-fade="noFade"
        no-close-on-esc
        :toggle="modal.toggle"
        :visible="modal.visible"
        :lazy="lazyLoad"
        :persistent="persistent"
        @show="doEvent($event, 'show')"
        @shown="doEvent($event, 'shown')"
        @show-prevented="doEvent($event, 'show-prevented')"
        @hide="doEvent($event, 'hide')"
        @esc="doEvent($event, 'esc')"
        @ok="doEvent($event, 'ok')"
        @close="doEvent($event, 'close')"
        @backdrop="doEvent($event, 'backdrop')"
        @cancel="doEvent($event, 'cancel')"
        @hidden="doEvent($event, 'hidden')"
        @hide-prevented="doEvent($event, 'hide-prevented')"
      >
        <LazyComponent
          msg="model"
          @mounted="addMessage('test-modal', 'child-mounted')"
          @unmounted="addMessage('test-modal', 'child-unmounted')"
        />
      </BModal>
      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-modal']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
    <b-col>
      <div class="d-flex flex-wrap gap-1">
        <BFormCheckbox v-model="collapse.value">collapse ({{ collapse.value }})</BFormCheckbox>
        <BFormCheckbox v-model="collapse.toggle">toggle </BFormCheckbox>
        <BFormCheckbox v-model="collapse.visible">visible</BFormCheckbox>
      </div>
      <div class="d-flex flex-wrap gap-1">
        <BButton v-b-toggle.test-collapse size="sm">directive</BButton>
        <BButton size="sm" @click="(collapse.ref as any)?.toggle?.()">expose</BButton>
        <BButton size="sm" @click="timer(collapse, 'value')">timer</BButton>
        <BButton size="sm" @click="timer(collapse, 'toggle')">timer toggle</BButton>
        <BButton size="sm" @click="timer(collapse, 'visible')">timer visible</BButton>
      </div>
      <BCollapse
        id="test-collapse"
        :ref="
          (el: HTMLElement) => {
            collapse.ref = el
          }
        "
        v-model="collapse.value"
        :no-animation="noFade"
        :toggle="collapse.toggle"
        :visible="collapse.visible"
        :lazy="lazyLoad"
        :persistent="persistent"
        @show="doEvent($event, 'show')"
        @shown="doEvent($event, 'shown')"
        @show-prevented="doEvent($event, 'show-prevented')"
        @hide="doEvent($event, 'hide')"
        @hidden="doEvent($event, 'hidden')"
        @hide-prevented="doEvent($event, 'hide-prevented')"
      >
        <LazyComponent
          msg="collapse"
          @mounted="addMessage('test-collapse', 'child-mounted')"
          @unmounted="addMessage('test-collapse', 'child-unmounted')"
        />
        <p>Nostrud sint pariatur cillum aute in pariatur pariatur ea non enim irure.</p>
        <p>Exercitation velit adipiscing fugiat et dolore adipiscing fugiat</p>
      </BCollapse>
      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-collapse']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
    <b-col>
      <div class="d-flex flex-wrap gap-1">
        <BFormCheckbox v-model="popover.value">popover ({{ popover.value }})</BFormCheckbox>
        <BFormCheckbox v-model="popover.toggle">toggle </BFormCheckbox>
        <BFormCheckbox v-model="popover.visible">visible</BFormCheckbox>
      </div>
      <div class="d-flex flex-wrap gap-1">
        <BButton v-b-toggle.test-popover size="sm">directive</BButton>
        <BButton size="sm" @click="(popover.ref as any)?.toggle?.()">expose</BButton>
        <BButton size="sm" @click="timer(popover)">timer</BButton>
      </div>
      <BButton id="button2" class="mt-3">popover target</BButton>

      <BPopover
        id="test-popover"
        :ref="
          (el: HTMLElement) => {
            popover.ref = el
          }
        "
        v-model="popover.value"
        :target="'#button2'"
        :no-fade="noFade"
        :toggle="popover.toggle"
        :visible="popover.visible"
        :lazy="lazyLoad"
        :persistent="persistent"
        @show="doEvent($event, 'show')"
        @shown="doEvent($event, 'shown')"
        @show-prevented="doEvent($event, 'show-prevented')"
        @hide="doEvent($event, 'hide')"
        @hidden="doEvent($event, 'hidden')"
        @hide-prevented="doEvent($event, 'hide-prevented')"
        @click-outside="doEvent($event, 'click-outside')"
        @click="doEvent($event, 'click')"
        @pointerleave="doEvent($event, 'pointerleave')"
        @blur="doEvent($event, 'blur')"
      >
        <LazyComponent
          msg="popover"
          @mounted="addMessage('test-popover', 'child-mounted')"
          @unmounted="addMessage('test-popover', 'child-unmounted')"
        />
        popover
      </BPopover>
      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-popover']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
  </b-row>
  <b-row class="mt-5">
    <b-col>
      <div class="d-flex flex-wrap gap-1">
        <BFormCheckbox v-model="offcanvas.value">offcanvas ({{ offcanvas.value }})</BFormCheckbox>
        <BFormCheckbox v-model="offcanvas.toggle">toggle </BFormCheckbox>
        <BFormCheckbox v-model="offcanvas.visible">visible</BFormCheckbox>
      </div>
      <div class="d-flex flex-wrap gap-1">
        <BButton v-b-toggle.test-offcanvas size="sm">directive</BButton>
        <BButton size="sm" @click="(offcanvas.ref as any)?.toggle?.()">expose</BButton>
        <BButton size="sm" @click="timer(offcanvas, 'value')">timer</BButton>
        <BButton size="sm" @click="timer(offcanvas, 'toggle')">timer toggle</BButton>
        <BButton size="sm" @click="timer(offcanvas, 'visible')">timer visible</BButton>
      </div>

      <BOffcanvas
        id="test-offcanvas"
        :ref="
          (el: HTMLElement) => {
            offcanvas.ref = el
          }
        "
        v-model="offcanvas.value"
        title="Title"
        :no-animation="noFade"
        :toggle="offcanvas.toggle"
        :visible="offcanvas.visible"
        :lazy="lazyLoad"
        :persistent="persistent"
        @show="doEvent($event, 'show')"
        @shown="doEvent($event, 'shown')"
        @show-prevented="doEvent($event, 'show-prevented')"
        @hide="doEvent($event, 'hide')"
        @esc="doEvent($event, 'esc')"
        @close="doEvent($event, 'close')"
        @backdrop="doEvent($event, 'backdrop')"
        @hidden="doEvent($event, 'hidden')"
        @hide-prevented="doEvent($event, 'hide-prevented')"
      >
        content
        <LazyComponent
          msg="offcanvas"
          @mounted="addMessage('test-offcanvas', 'child-mounted')"
          @unmounted="addMessage('test-offcanvas', 'child-unmounted')"
        />
      </BOffcanvas>

      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-offcanvas']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
    <b-col>
      <div class="d-flex flex-wrap gap-1">
        <BFormCheckbox v-model="dropdown.value">dropdown ({{ dropdown.value }})</BFormCheckbox>
        <BFormCheckbox v-model="dropdown.toggle">toggle </BFormCheckbox>
        <BFormCheckbox v-model="dropdown.visible">visible</BFormCheckbox>
      </div>
      <div class="d-flex flex-wrap gap-1">
        <BButton v-b-toggle.test-dropdown size="sm">directive</BButton>
        <BButton size="sm" @click="(dropdown.ref as any)?.toggle?.()">expose</BButton>
        <BButton size="sm" @click="timer(dropdown, 'value')">timer</BButton>
        <BButton size="sm" @click="timer(dropdown, 'toggle')">timer toggle</BButton>
        <BButton size="sm" @click="timer(dropdown, 'visible')">timer visible</BButton>
      </div>

      <BDropdown
        id="test-dropdown"
        :ref="
          (el: HTMLElement) => {
            dropdown.ref = el
          }
        "
        v-model="dropdown.value"
        teleport-to="body"
        class="mt-3"
        text="dropdown"
        :auto-close="true"
        :no-fade="noFade"
        :toggle="dropdown.toggle"
        :visible="dropdown.visible"
        :lazy="lazyLoad"
        :persistent="persistent"
        @show="doEvent($event, 'show')"
        @shown="doEvent($event, 'shown')"
        @show-prevented="doEvent($event, 'show-prevented')"
        @hide="doEvent($event, 'hide')"
        @hidden="doEvent($event, 'hidden')"
        @hide-prevented="doEvent($event, 'hide-prevented')"
      >
        <BDropdownItem href="#">Action</BDropdownItem>
        <LazyComponent
          msg="dropdown"
          @mounted="addMessage('test-dropdown', 'child-mounted')"
          @unmounted="addMessage('test-dropdown', 'child-unmounted')"
        />
      </BDropdown>
      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-dropdown']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
    <b-col>
      <div class="d-flex flex-wrap gap-1">
        <BFormCheckbox v-model="toast.value">toast ({{ toast.value }})</BFormCheckbox>
        <BFormCheckbox v-model="toast.toggle">toggle </BFormCheckbox>
        <BFormCheckbox v-model="toast.visible">visible</BFormCheckbox>
      </div>
      <div class="d-flex flex-wrap gap-1">
        <BButton v-b-toggle.test-toast size="sm">directive</BButton>
        <BButton size="sm" @click="(toast.ref as any)?.toggle?.()">expose</BButton>
        <BButton size="sm" @click="timer(toast, 'value')">timer</BButton>
        <BButton size="sm" @click="timer(toast, 'toggle')">timer toggle</BButton>
        <BButton size="sm" @click="timer(toast, 'visible')">timer visible</BButton>
        <BButton size="sm" @click="toast.value = 5000">reset modelvalue to 5000</BButton>
      </div>

      <BToast
        id="test-toast"
        :ref="
          (el: HTMLElement) => {
            toast.ref = el
          }
        "
        v-model="toast.value"
        title="title"
        :no-fade="noFade"
        :toggle="toast.toggle"
        :visible="toast.visible"
        :progress-props="{}"
        :lazy="lazyLoad"
        :persistent="persistent"
        @show="doEvent($event, 'show')"
        @shown="doEvent($event, 'shown')"
        @show-prevented="doEvent($event, 'show-prevented')"
        @hide="doEvent($event, 'hide')"
        @close="doEvent($event, 'close')"
        @hidden="doEvent($event, 'hidden')"
        @hide-prevented="doEvent($event, 'hide-prevented')"
      >
        TOAST
        <LazyComponent
          msg="toast"
          @mounted="addMessage('test-toast', 'child-mounted')"
          @unmounted="addMessage('test-toast', 'child-unmounted')"
        />
      </BToast>
      <div class="border p-1 m-1">
        <BFormTag v-for="(m, i) in messages['test-toast']" :key="i" :title="m" no-remove />
      </div>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
// import {useModal} from 'bootstrap-vue-next'

import BButton from './components/BButton/BButton.vue'
import LazyComponent from './LazyComponent.vue'
import {useModal} from './index'

import {ref, watch} from 'vue'

const {show} = useModal('test-modal')

const nestedModal1 = ref(false)
const nestedModal2 = ref(false)
const nestedModal3 = ref(false)
const openId = ref(null)

const preventShow = ref(false)
const preventHide = ref(false)
const noFade = ref(false)
const slowAnimation = ref(false)
const lazyLoad = ref(true)
const persistent = ref(true)

const modalIf = ref(false)

type State = {value: boolean | number; toggle: boolean; visible: boolean; ref: HTMLElement | null}
const modal = ref<State>({value: false, toggle: false, visible: false, ref: null})
const collapse = ref<State>({value: false, toggle: false, visible: false, ref: null})
const popover = ref<State>({value: false, toggle: false, visible: false, ref: null})
const offcanvas = ref<State>({value: false, toggle: false, visible: false, ref: null})
const dropdown = ref<State>({value: false, toggle: false, visible: false, ref: null})
const toast = ref<State>({value: 0, toggle: false, visible: false, ref: null})

const messages = ref<Record<string, string[]>>({})

function doEvent(
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
  console.debug(e.eventType || message, e.componentId, e.target?.className, e.trigger, caller, e)
  if (e.eventType) {
    if (!messages.value[e.componentId]) messages.value[e.componentId] = []
    messages.value[e.componentId].push(e.eventType)
  }
}

function addMessage(id: string, message: string) {
  if (!messages.value[id]) messages.value[id] = []
  messages.value[id].push(message)
}

function timer(myVar: State, part: 'value' | 'toggle' | 'visible' = 'value') {
  setTimeout(() => {
    myVar[part] = !myVar[part]
  }, 500)

  setTimeout(() => {
    myVar[part] = !myVar[part]
  }, 3000)
}
import {BCol, BContainer, BRow} from './components'

watch(slowAnimation, (val) => {
  if (val) {
    document.body.classList.add('slow')
  } else {
    document.body.classList.remove('slow')
  }
})
</script>

<style lang="scss">
.slow {
  .offcanvas {
    --bs-offcanvas-transition: transform 2s ease-in-out;
  }
  .fade {
    transition: opacity 2s linear !important;
  }
  .collapsing {
    transition: height 2s linear !important;
  }
}
</style>
