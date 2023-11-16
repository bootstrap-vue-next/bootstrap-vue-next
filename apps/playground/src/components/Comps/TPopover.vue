<template>
  <BContainer fluid>
    <BRow class="my-5">
      <BCol>
        <BButton id="popover">hover me</BButton>
        <BPopover target="popover" :delay="{show: 400, hide: 5000}" placement="right">
          <template #title>What?</template>
          Hello Word
        </BPopover>
        <span ref="popoverContainerRef" class="m-4"> targetRef for popover defined lower. </span>
      </BCol>
      <BCol>
        <BFormTextarea v-model="textValue" type="text" />
      </BCol>
    </BRow>
    <BRow class="my-5">
      <BCol class="d-flex justify-content-between">
        <button
          v-b-tooltip.show.realtime="{
            title: textValue,
            placement: popoverPlacemet,
            manual: true,
          }"
        >
          sync position
        </button>

        <button v-b-popover.body.show="{content: textValue, placement: 'top'}">popover</button>
      </BCol>
      <BCol style="width: 250px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <span v-b-tooltip.show="'tool tip not inline'" class="text-warning">
          this is without using .inline modifier.
        </span>
        Ut porta rhoncus elit et tincidunt gravida.
        <span v-b-tooltip.inline.show="'tool tip inline'" class="text-warning">
          Better inline tooltip location with .inline.
        </span>
        Curabitur bibendum, velit vel gravida finibus, nisl tortor condimentum metus, eu pulvinar
        risus augue in neque.
      </BCol>
    </BRow>
    <BRow class="my-5 justify-content-between">
      <BCol>
        <BPopover click :model-value="true" placement="right">
          <template #title> Click </template>
          <template #target>
            <BButton>click</BButton>
          </template>
          this should close on click outside
        </BPopover>
      </BCol>
      <BCol>
        <BTooltip click>
          <template #target="{showState}">
            <BButton :variant="showState ? 'primary' : 'secondary'">
              click tooltip component
            </BButton>
          </template>
          <template #default> <b>Tooltip</b> content </template>
        </BTooltip>
      </BCol>
    </BRow>
    <BRow class="my-5">
      <BCol>
        <BPopover placement="top">
          <template #title>
            Popover
            <em>Title</em>
            - {{ popoverInput }}
          </template>
          <template #target>
            <BButton id="popover-target-1">Hover Me</BButton>
          </template>
          <BButton @click="consoleLog('Button Click!')">456</BButton>I am popover
          <b>component</b> content! <BFormInput v-model="popoverInput" type="text" />Name:
          <strong>{{ popoverInput }}</strong>
        </BPopover>
      </BCol>
      <BCol>
        <button
          v-b-popover.click.top="{
            title: 'Popover title',
            content: 'And here\'s some amazing content. It\'s very engaging. Right?',
          }"
          type="button"
          class="btn btn-lg btn-danger"
        >
          Click to toggle popover
        </button>
      </BCol>
      <BCol>
        <button
          v-b-popover.left="'I\'m another popover!'"
          type="button"
          class="btn btn-lg btn-success"
        >
          Hover to toggle popover
        </button>
      </BCol>
      <BCol>
        <BButton ref="popoverRef">Hover popover by ref with ref target</BButton>
        <BPopover :target="popoverRef" :reference="popoverContainerRef" placement="right">
          <template #title>
            Popover
            <em>Title</em>
            - {{ popoverInput }}
          </template>
          <template #target>
            <span>Not the real trigger or reference</span>
          </template>
          <BButton @click="consoleLog('Button Click!')">456</BButton>I am popover
          <b>component</b> content! <BFormInput v-model="popoverInput" type="text" />Name:
          <strong>{{ popoverInput }}</strong>
        </BPopover>
      </BCol>
      <BCol>
        <BButton
          ref="popoverManualButtonRef"
          @click="manualClickPopoverExample = !manualClickPopoverExample"
          >Manual popover showing</BButton
        >
        <BPopover
          :target="popoverManualButtonRef"
          manual
          :model-value="manualClickPopoverExample"
          placement="right"
        >
          simple content
        </BPopover>
      </BCol>
      <BCol>
        <BPopover placement="auto">
          <template #title> Auto placement </template>
          <template #target>
            <BButton id="popover-target-1">Hover Me</BButton>
          </template>
          Pop over content
        </BPopover>
      </BCol>
    </BRow>
    <BRow class="my-5 position-relative">
      <BCol>
        <BPopover
          v-model="value"
          :placement="popoverPlacemet"
          strategy="absolute"
          no-fade
          no-auto-close
          manual
        >
          <template #title>
            <h3>Popover title</h3>
          </template>

          <p>Position is calculated to parent relative element. (Try changing the textarea size)</p>

          <template #target="{toggle, showState}">
            <BButton @click="toggle">Click to toggle popover</BButton>
            <div>
              {{ showState ? 'Visible' : 'hidden' }}
            </div>
            <BFormCheckbox :model-value="showState" @click="toggle"> show </BFormCheckbox>
          </template>
        </BPopover>
        <BFormRadioGroup>
          <BFormRadio v-model="popoverPlacemet" value="top">top</BFormRadio>
          <BFormRadio v-model="popoverPlacemet" value="bottom">bottom</BFormRadio>
          <BFormRadio v-model="popoverPlacemet" value="left">left</BFormRadio>
          <BFormRadio v-model="popoverPlacemet" value="right">right</BFormRadio>
        </BFormRadioGroup>
        <BFormCheckbox v-model="value"> show based on v-model</BFormCheckbox>
      </BCol>
      <BCol>
        <BPopover>
          <template #title>
            Popover
            <em>Title</em>
          </template>
          <template #target>
            <BButton>hover / focus</BButton>
          </template>
          <BButton @click="consoleLog('Button Click!')">456</BButton>I am popover
          <b>component</b> content! <BFormInput v-model="popoverInput" type="text" />Name:
          <strong>{{ popoverInput }}</strong>
        </BPopover>
      </BCol>
      <BCol>
        <BPopover realtime :model-value="true" click placement="bottom">
          <template #title> Title </template>
          <template #target>
            <span class="border rounded m-3 p-2">sync position with RequestAnimationFrame</span>
          </template>
          Burn cpu cycles to be more accurate. Try changing the size of the textarea above.
        </BPopover>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BPopover click placement="bottom" container="body">
          <template #title> Title </template>
          <template #target>
            <span class="border rounded m-3 p-2">move to body.</span>
          </template>
          in body. {{ textValue }}
        </BPopover>
      </BCol>
      <BCol>
        <div style="height: 50vh; width: 400px; overflow-y: scroll; padding: 5em">
          <div v-for="(_, i) in Array(20)" :key="i" style="height: 100px">
            <BPopover v-bind="vari">
              jee
              <template #target>
                <BButton>hover / focus</BButton>
              </template>
            </BPopover>
          </div>
        </div>
      </BCol>
      <BCol>
        <div style="height: 50vh; width: 400px; overflow-y: scroll; padding: 5em">
          <div v-for="(_, i) in Array(20)" :key="i" style="height: 100px">
            <BPopover v-bind="vari" noninteractive>
              jee
              <template #target>
                <BButton>hover / focus noninteractive</BButton>
              </template>
            </BPopover>
          </div>
        </div>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type {PopoverPlacement} from 'bootstrap-vue-next'

const popoverInput = ref('foo')
const popoverRef = ref(null)
const popoverContainerRef = ref(null)
const value = ref(true)
const manualClickPopoverExample = ref(false)
const popoverManualButtonRef = ref(null)

const textValue = ref('test <b onmouseover="alert(\'XSS testing!\')">with html</b>')
const popoverPlacemet = ref<PopoverPlacement>('left')

const vari = ref({
  title: 'foo',
  container: 'body',
  delay: {
    show: 0,
    hide: 0,
  },
})

// eslint-disable-next-line no-console
const consoleLog = (...args: unknown[]) => console.log(...args)
</script>
