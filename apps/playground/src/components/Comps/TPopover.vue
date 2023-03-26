<template>
  <b-container fluid>
    <b-row class="my-5">
      <b-col>
        <b-button id="popover">hover me</b-button>
        <b-popover target="popover" :delay="{show: 400, hide: 5000}" placement="right">
          <template #title>What?</template>
          Hello Word
        </b-popover>
        <span ref="popoverContainerRef" class="m-4"> targetRef for popover defined lower. </span>
      </b-col>
      <b-col>
        <b-form-textarea v-model="textValue" type="text" />
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col class="d-flex justify-content-between">
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
      </b-col>
      <b-col style="width: 250px">
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
      </b-col>
    </b-row>
    <b-row class="my-5 justify-content-between">
      <b-col>
        <b-popover click :model-value="true" placement="right">
          <template #title> Click </template>
          <template #target>
            <b-button>click</b-button>
          </template>
          this should close on click outside
        </b-popover>
      </b-col>
      <b-col>
        <b-tooltip click>
          <template #target="{showState}">
            <b-button :variant="showState ? 'primary' : 'secondary'">
              click tooltip component
            </b-button>
          </template>
          <template #default> <b>Tooltip</b> content </template>
        </b-tooltip>
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col>
        <b-popover placement="top">
          <template #title>
            Popover
            <em>Title</em>
            - {{ popoverInput }}
          </template>
          <template #target>
            <b-button id="popover-target-1">Hover Me</b-button>
          </template>
          <b-button @click="consoleLog('Button Click!')">456</b-button>I am popover
          <b>component</b> content! <b-form-input v-model="popoverInput" type="text" />Name:
          <strong>{{ popoverInput }}</strong>
        </b-popover>
      </b-col>
      <b-col>
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
      </b-col>
      <b-col>
        <button
          v-b-popover.left="'I\'m another popover!'"
          type="button"
          class="btn btn-lg btn-success"
        >
          Hover to toggle popover
        </button>
      </b-col>
      <b-col>
        <b-button ref="popoverRef">Hover popover by ref with ref target</b-button>
        <b-popover
          :target="() => popoverRef"
          :reference="() => popoverContainerRef"
          placement="right"
        >
          <template #title>
            Popover
            <em>Title</em>
            - {{ popoverInput }}
          </template>
          <template #target>
            <span>Not the real trigger or reference</span>
          </template>
          <b-button @click="consoleLog('Button Click!')">456</b-button>I am popover
          <b>component</b> content! <b-form-input v-model="popoverInput" type="text" />Name:
          <strong>{{ popoverInput }}</strong>
        </b-popover>
      </b-col>
    </b-row>
    <b-row class="my-5 position-relative">
      <b-col>
        <b-popover
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
            <b-button @click="toggle">Click to toggle popover</b-button>
            <div>
              {{ showState ? 'Visible' : 'hidden' }}
            </div>
            <b-form-checkbox :model-value="showState" @click="toggle"> show </b-form-checkbox>
          </template>
        </b-popover>
        <b-form-radio-group>
          <b-form-radio v-model="popoverPlacemet" value="top">top</b-form-radio>
          <b-form-radio v-model="popoverPlacemet" value="bottom">bottom</b-form-radio>
          <b-form-radio v-model="popoverPlacemet" value="left">left</b-form-radio>
          <b-form-radio v-model="popoverPlacemet" value="right">right</b-form-radio>
        </b-form-radio-group>
        <b-form-checkbox v-model="value"> show based on v-model</b-form-checkbox>
      </b-col>
      <b-col>
        <b-popover>
          <template #title>
            Popover
            <em>Title</em>
          </template>
          <template #target>
            <b-button>hover / focus</b-button>
          </template>
          <b-button @click="consoleLog('Button Click!')">456</b-button>I am popover
          <b>component</b> content! <b-form-input v-model="popoverInput" type="text" />Name:
          <strong>{{ popoverInput }}</strong>
        </b-popover>
      </b-col>
      <b-col>
        <b-popover realtime :model-value="true" click placement="bottom">
          <template #title> Title </template>
          <template #target>
            <span class="border rounded m-3 p-2">sync position with RequestAnimationFrame</span>
          </template>
          Burn cpu cycles to be more accurate. Try changing the size of the textarea above.
        </b-popover>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-popover click placement="bottom" container="body">
          <template #title> Title </template>
          <template #target>
            <span class="border rounded m-3 p-2">move to body.</span>
          </template>
          in body. {{ textValue }}
        </b-popover>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const popoverInput = ref('foo')
const popoverRef = ref(null)
const popoverContainerRef = ref(null)
const value = ref(true)

const textValue = ref('test <b onmouseover="alert(\'XSS testing!\')">with html</b>')
const popoverPlacemet = ref('left')

// eslint-disable-next-line no-console
const consoleLog = (...args: unknown[]) => console.log(...args)
</script>
