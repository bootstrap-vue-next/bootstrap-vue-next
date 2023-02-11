<template>
  <b-container>
    <b-row>
      <b-col>
        <b-button ref="myRef" @click="b = !b">Click me {{ b }}</b-button>
        {{ a }}
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div>
          fasdfasdfasdddfasdfasdfs
          <b-dropdown
            id="dropdown-1"
            v-model="a"
            :split="b"
            text="Dropdown Buttonasdkfjhaskldfhjf"
            @shown="doStuff"
          >
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item active>Active action</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {ref} from 'vue'
import {BvEvent} from './utils'
const a = ref(false)
const b = ref(false)

const myRef = ref<HTMLElement>()

const doStuff = () => {
  console.log('stuff')
}

const doStuffv2 = (e: BvEvent) => {
  e.preventDefault()
  console.log(e)
}
</script>
