<template>
  <b-container>
    <div class="row">
      <div id="root-element" class="col-8">
        <div class="my-3">
          <p>current: {{ current }}</p>
        </div>
        <b-card id="basic" no-body>
          <b-card-header>
            <b-nav ref="target" pills card-header>
              <b-nav-item href="#fat" @click="scrollIntoView">@fat</b-nav-item>
              <b-nav-item href="#mdo" @click="scrollIntoView">@mdo</b-nav-item>
              <b-nav-item-dropdown text="Dropdown 1,2,3" right-alignment>
                <b-dropdown-item href="#one" @click="scrollIntoView">one</b-dropdown-item>
                <b-dropdown-item href="#two" @click="scrollIntoView">two</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item href="#three" @click="scrollIntoView">three</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item href="#pi0" @click="scrollIntoView">@pi0</b-nav-item>
            </b-nav>
          </b-card-header>

          <b-card-body
            id="nav-scroller"
            ref="content"
            style="position: relative; height: 300px; overflow-y: scroll; scroll-behavior: smooth"
          >
            <p>{{ text }}</p>
            <h4 id="fat">@fat</h4>
            <p v-for="i in 6" :key="i">{{ text }}</p>
            <h4 id="mdo">@mdo</h4>
            <p v-for="i in 6" :key="i">{{ text }}</p>
            <h4 id="one">one</h4>
            <p v-for="i in 2" :key="i">{{ text }}</p>
            <h4 id="two">two</h4>
            <p>{{ text }}</p>
            <h4 id="three">three</h4>
            <p v-for="i in 2" :key="i">{{ text }}</p>
            <h4 id="pi0">@pi0</h4>
            <p v-for="i in 3" :key="i">{{ text }}</p>
          </b-card-body>
        </b-card>
        <div class="split" />
        <p>curren: {{ nestedCurrent }}</p>
        <b-card id="nested">
          <b-row>
            <b-col cols="4">
              <b-navbar ref="targetNested" tag="b-navbar" class="flex-column">
                <b-navbar-brand href="#">Navbar</b-navbar-brand>
                <b-nav pills vertical>
                  <b-nav-item href="#item-1">Item 1</b-nav-item>
                  <b-nav pills vertical>
                    <b-nav-item class="ms-3 my-1" href="#item-1-1">Item 1-1</b-nav-item>
                    <b-nav-item class="ms-3 my-1" href="#item-1-2">Item 1-2</b-nav-item>
                    <b-nav-item class="ms-3 my-1" href="#item-1-3">Item 1-3</b-nav-item>
                    <b-nav pills vertical>
                      <b-nav-item class="ms-5 my-1" href="#item-1-3-1">Item 1-3-1</b-nav-item>
                      <b-nav-item class="ms-5 my-1" href="#item-1-3-2">Item 1-3-2</b-nav-item>
                    </b-nav>
                    <b-nav-item class="ms-3 my-1" href="#item-1-4">Item 1-4</b-nav-item>
                  </b-nav>
                  <b-nav-item href="#item-2">Item 2</b-nav-item>
                  <b-nav-item href="#item-3">Item 3</b-nav-item>
                  <b-nav pills vertical>
                    <b-nav-item class="ms-3 my-1" href="#item-3-1">Item 3-1</b-nav-item>
                    <b-nav-item class="ms-3 my-1" href="#item-3-2">Item 3-2</b-nav-item>
                  </b-nav>
                </b-nav>
              </b-navbar>
            </b-col>

            <b-col cols="8">
              <div
                id="scrollspy-nested"
                ref="contentNested"
                style="position: relative; height: 300px; overflow-y: auto"
              >
                <h4 id="item-1" style="">Item 1</h4>
                <p>{{ text }}</p>
                <h5 id="item-1-1" style="">Item 1-1</h5>
                <p>{{ text }}</p>
                <h5 id="item-1-2" style="">Item 1-2</h5>
                <p>{{ text }}</p>
                <h5 id="item-1-3" style="">Item 1-3</h5>
                <p>{{ text }}</p>
                <h5 id="item-1-3-1" style="">Item 1-3-1</h5>
                <p>{{ text }}</p>
                <h5 id="item-1-3-2" style="">Item 1-3-2</h5>
                <p>{{ text }}</p>
                <h5 id="item-1-4" style="">Item 1-4</h5>
                <p>{{ text }}</p>
                <h4 id="item-2" style="">Item 2</h4>
                <p>{{ text }}</p>
                <h4 id="item-3" style="">Item 3</h4>
                <p>{{ text }}</p>
                <h5 id="item-3-1" style="">Item 3-1</h5>
                <p>{{ text }}</p>
                <h5 id="item-3-2" style="">Item 3-2</h5>
                <p>{{ text }}</p>
              </div>
            </b-col>
          </b-row>
        </b-card>
        <div class="split" />
        <b-card id="list">
          <b-row>
            <b-col cols="4">
              <b-list-group>
                <b-list-group-item
                  v-for="(e, idx) in list"
                  :key="idx"
                  :href="'#' + e.id"
                  :class="currentList === e.id && 'active'"
                >
                  {{ e.text }}
                </b-list-group-item>
              </b-list-group>
            </b-col>

            <b-col cols="8">
              <b-button @click="addItem">add</b-button>
              <div
                id="listgroup-ex"
                ref="contentList"
                style="position: relative; overflow-y: auto; height: 400px"
              >
                <template v-for="i in items" :key="i.id">
                  <h4 :id="i.id">Item {{ i.text }}</h4>
                  <p>{{ text }}</p>
                </template>
              </div>
            </b-col>
          </b-row>
        </b-card>
        <div class="split" />
        <b-card id="directive">
          <b-row>
            <b-col cols="4">
              <b-list-group v-b-scrollspy:directive-list>
                <b-list-group-item v-for="(e, idx) in items" :key="idx" :href="'#' + e.id">
                  {{ e.text }}
                </b-list-group-item>
              </b-list-group>
            </b-col>

            <b-col cols="8">
              <b-button @click="addItem">add</b-button>
              <div id="directive-list" style="position: relative; overflow-y: auto; height: 400px">
                <template v-for="i in items" :key="i.id">
                  <h4 :id="i.id">Item {{ i.text }}</h4>
                  <p>{{ text }}</p>
                </template>
              </div>
            </b-col>
          </b-row>
        </b-card>
        <div class="split" />
      </div>

      <div class="col-4 position-relative">
        <div class="position-sticky top-0">
          <h2>Toc</h2>

          <b-list-group>
            <b-list-group-item
              v-for="(e, idx) in tocList"
              :key="idx"
              :href="'#' + e.id"
              :class="e.id === tocCurrent && 'active'"
            >
              {{ e.id }}
            </b-list-group-item>
          </b-list-group>
          <b-form-radio-group
            v-model="tocContent"
            :options="[
              {text: 'toc', value: 'root-element'},
              {text: 'basic', value: 'nav-scroller'},
              // {text: 'nested', value: contentNested},
              {text: 'list', value: 'listgroup-ex'},
              {text: 'directive', value: 'directive-list'},
            ]"
          />
        </div>
      </div>
    </div>
  </b-container>
</template>

<script setup lang="ts">
import {type ComponentPublicInstance, ref} from 'vue'
import {useScrollspy} from 'bootstrap-vue-next'
// import {useScrollspy} from './BootstrapVue'
const content = ref<HTMLElement | ComponentPublicInstance<HTMLElement> | null>(null)
const target = ref<HTMLElement | ComponentPublicInstance<HTMLElement> | null>(null)
const contentNested = ref<HTMLElement | ComponentPublicInstance<HTMLElement> | null>(null)
const targetNested = ref<HTMLElement | ComponentPublicInstance<HTMLElement> | null>(null)
const contentList = ref<HTMLElement | ComponentPublicInstance<HTMLElement> | null>(null)

const tocContent = ref('root-element')
const {current, scrollIntoView} = useScrollspy(content, target)
const {current: currentList, list} = useScrollspy(contentList, null, {manual: true})
const {current: nestedCurrent} = useScrollspy(contentNested, targetNested)
const {current: tocCurrent, list: tocList} = useScrollspy(tocContent, null, {manual: true})

const text = ref(`
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `)

const items = ref([
  {
    id: 'item-1',
    text: 'Item 1',
  },
  {
    id: 'item-2',
    text: 'Item 2',
  },
  {
    id: 'item-3',
    text: 'Item 3',
  },
])

function addItem() {
  items.value.push({
    id: `item-${items.value.length + 1}`,
    text: `Item ${items.value.length + 1}`,
  })
}

setTimeout(() => {
  addItem()
}, 3000)
</script>
<style scoped>
.split {
  height: 70vh !important;
}
</style>
