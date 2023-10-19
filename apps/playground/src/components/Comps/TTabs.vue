<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BTabs v-model="tabIndex" small>
          <BTab title="First" disabled>
            <p>I'm the first tab</p>
          </BTab>
          <BTab title="Second">
            <p>I'm the second tab</p>
          </BTab>
          <BTab title="Third" disabled>
            <p>I'm a disabled tab!</p>
          </BTab>
          <BTab title="Fourth" disabled>
            <p>I'm a disabled tab!</p>
          </BTab>
          <BTab title="Fifth">
            <p>I'm the fifth tab</p>
          </BTab>
          <BTab title="Sixth" :disabled="true">
            <p>I'm a disabled tab!</p>
          </BTab>
        </BTabs>

        <div class="text-center">
          <BButtonGroup class="mt-2">
            <BButton @click="tabIndex--">Previous</BButton>
            <BButton @click="tabIndex++">Next</BButton>
          </BButtonGroup>
          <BButtonGroup class="mt-2">
            <BButton @click="tabIndex = 0">0</BButton>
            <BButton @click="tabIndex = 1">1</BButton>
            <BButton @click="tabIndex = 2">2</BButton>
            <BButton @click="tabIndex = 3">3</BButton>
            <BButton @click="tabIndex = 4">4</BButton>
            <BButton @click="tabIndex = 5">5</BButton>
            <BButton @click="tabIndex = 6">6</BButton>
            <BButton @click="tabIndex = 7">7</BButton>
          </BButtonGroup>

          <div class="text-body-secondary">Current Tab: {{ tabIndex }}</div>
        </div>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h4 class="my-3">Tabs with custom title</h4>
        <BTabs>
          <BTab active>
            <template #title>
              <BSpinner type="grow" small />I'm
              <i>custom</i>
              <strong>title</strong>
            </template>
            <p class="p-3">Tab contents 1</p>
          </BTab>

          <BTab>
            <template #title> <BSpinner type="border" small />Tab 2 </template>
            <p class="p-3">Tab contents 2</p>
          </BTab>
        </BTabs>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <div class="border m-3">
          {{ activeBool }}
          <BFormCheckbox v-model="activeBool">ac</BFormCheckbox>
          <ParentComp>
            <ChildComp
              v-for="tab in tabs"
              :key="tab.uuid"
              :title="tab.title"
              :content="tab.content"
              v-bind="tab.attrs"
            />
            <ChildComp :title="tabs[0].title" :content="tabs[0].content" />
            <b-tab :title="test" @click="log"> test </b-tab>
            <b-tab v-model:active="activeBool" title="ac" button-id="ac-button"> ac </b-tab>
            <b-tab title="test1" lazy-once title-link-class="bg-danger" class="bg-danger">
              <template #title> doo</template> doo <LoggerComp>goo</LoggerComp></b-tab
            >
          </ParentComp>
        </div>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BTabs v-model:active-id="activeId" v-model="tabIndex2">
          <BTab id="a1" title="a1">a1</BTab>
          <BTab id="a2" title="a2">a2</BTab>
          <BTab id="a3" title="a3">a3</BTab>
          <BTab id="a4" title="a4">a4</BTab>
        </BTabs>
      </BCol>
    </BRow>
    <BRow>
      <BCol cols="auto">
        activeId: {{ activeId }}
        <BButton @click="activeId = 'a1'">a1</BButton>
        <BButton @click="activeId = 'a2'">a2</BButton>
        <BButton @click="activeId = 'a3'">a3</BButton>
        <BButton @click="activeId = 'a4'">a4</BButton>
      </BCol>
      <BCol cols="auto">
        index: {{ tabIndex2 }}
        <BButton @click="tabIndex2 = 0">0</BButton>
        <BButton @click="tabIndex2 = 1">1</BButton>
        <BButton @click="tabIndex2 = 2">2</BButton>
        <BButton @click="tabIndex2 = 3">3</BButton>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BTabs>
          <BTab title="b1" disabled>b1</BTab>
          <BTab title="b2" disabled>b2</BTab>
          <BTab title="b3">b3</BTab>
          <BTab title="b4" disabled>b4</BTab>
        </BTabs>
      </BCol>
      <BCol>
        <BTabs v-model:active-id="tab3Id" v-model="tab3Index">
          <BTab v-for="t in tab3" :key="t.title" :title="t.title">{{ t.content }}</BTab>
        </BTabs>
        <BButton
          @click="tab3.unshift({title: 't' + (tab3.length + 1), content: 't' + (tab3.length + 1)})"
          >+</BButton
        >
        <BButton @click="tab3.splice(0, 1)">X</BButton> -
        <BButton
          @click="tab3.push({title: 't' + (tab3.length + 1), content: 't' + (tab3.length + 1)})"
          >+</BButton
        >
        {{ tab3Index }} {{ tab3Id }}
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {defineComponent, h, ref} from 'vue'
import {BTab, BTabs} from 'bootstrap-vue-next'
// import {BTab, BTabs} from './BootstrapVue.ts'

// eslint-disable-next-line vue/one-component-per-file
const ChildComp = defineComponent({
  name: 'ChildComp',
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
  render() {
    return h(BTab, {title: this.title}, () => this.content)
  },
})

// eslint-disable-next-line vue/one-component-per-file
const ParentComp = defineComponent({
  name: 'ParentComp',
  render() {
    return h(BTabs, {}, () => this.$slots.default())
  },
})

// eslint-disable-next-line vue/one-component-per-file
const LoggerComp = defineComponent({
  name: 'ParentComp',
  components: {},
  mounted() {
    console.log('logger component mounted')
  },
  render() {
    return h(BTabs, {class: 'border m-3 p-3'}, () => this.$slots.default())
  },
})

const tabIndex = ref(1)
const tabIndex2 = ref(2)
const activeId = ref('a4')
const tabs = ref([
  {uuid: 1, title: '1', content: '1', attrs: {}},
  {uuid: 2, title: '2', content: '2', attrs: {active: true}},
])
const test = ref('test')
const activeBool = ref(false)
const tab3Index = ref(0)
const tab3Id = ref()
const tab3 = ref([
  {title: 't1', content: 't1'},
  {title: 't2', content: 't2'},
  {title: 't3', content: 't3'},
  {title: 't4', content: 't4'},
])
function log(e) {
  console.log('click', e)
}

setTimeout(() => {
  // console.log('add')
  tabs.value.push({uuid: 3, title: '3', content: '3', attrs: {}})
  tabs.value[0].title = '11'
  test.value = 'test 2'
}, 2000)
setTimeout(() => {
  tabs.value[0].title = '1'
  // console.log('remove')
  tabs.value.splice(1, 1)
}, 4000)
setTimeout(() => {
  // console.log('add')
  tabs.value.push({uuid: 4, title: '4', content: '4', attrs: {active: true}})
}, 6000)
</script>
