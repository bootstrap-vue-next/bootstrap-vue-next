<template>
  <BContainer>
    <div class="row">
      <div id="root-element" class="col-8">
        <div class="my-3">
          <p>current: {{ current }}</p>
        </div>
        <BCard id="basic" no-body>
          <BCardHeader>
            <BNav ref="target" pills card-header>
              <BNavItem href="#fat" @click="scrollIntoView">@fat</BNavItem>
              <BNavItem href="#mdo" @click="scrollIntoView">@mdo</BNavItem>
              <BNavItemDropdown text="Dropdown 1,2,3" right-alignment>
                <BDropdownItem href="#one" @click="scrollIntoView">one</BDropdownItem>
                <BDropdownItem href="#two" @click="scrollIntoView">two</BDropdownItem>
                <BDropdownDivider />
                <BDropdownItem href="#three" @click="scrollIntoView">three</BDropdownItem>
              </BNavItemDropdown>
              <BNavItem href="#pi0" @click="scrollIntoView">@pi0</BNavItem>
            </BNav>
          </BCardHeader>

          <BCardBody
            id="nav-scroller"
            ref="content"
            style="position: relative; height: 300px; overflow-y: scroll; scroll-behavior: smooth"
          >
            <p>{{ lorem }}</p>
            <h4 id="fat">@fat</h4>
            <p v-for="i in 6" :key="i">{{ lorem }}</p>
            <h4 id="mdo">@mdo</h4>
            <p v-for="i in 6" :key="i">{{ lorem }}</p>
            <h4 id="one">one</h4>
            <p v-for="i in 2" :key="i">{{ lorem }}</p>
            <h4 id="two">two</h4>
            <p>{{ lorem }}</p>
            <h4 id="three">three</h4>
            <p v-for="i in 2" :key="i">{{ lorem }}</p>
            <h4 id="pi0">@pi0</h4>
            <p v-for="i in 3" :key="i">{{ lorem }}</p>
          </BCardBody>
        </BCard>
        <div class="split" />
        <p>current: {{ nestedCurrent }}</p>
        <BCard id="nested">
          <BRow>
            <BCol cols="4">
              <BNavbar ref="targetNested" class="flex-column">
                <BNavbarBrand href="#">Navbar</BNavbarBrand>
                <BNav pills vertical>
                  <BNavItem href="#item-1">Item 1</BNavItem>
                  <BNav pills vertical>
                    <BNavItem class="ms-3 my-1" href="#item-1-1">Item 1-1</BNavItem>
                    <BNavItem class="ms-3 my-1" href="#item-1-2">Item 1-2</BNavItem>
                    <BNavItem class="ms-3 my-1" href="#item-1-3">Item 1-3</BNavItem>
                    <BNav pills vertical>
                      <BNavItem class="ms-5 my-1" href="#item-1-3-1">Item 1-3-1</BNavItem>
                      <BNavItem class="ms-5 my-1" href="#item-1-3-2">Item 1-3-2</BNavItem>
                    </BNav>
                    <BNavItem class="ms-3 my-1" href="#item-1-4">Item 1-4</BNavItem>
                  </BNav>
                  <BNavItem href="#item-2">Item 2</BNavItem>
                  <BNavItem href="#item-3">Item 3</BNavItem>
                  <BNav pills vertical>
                    <BNavItem class="ms-3 my-1" href="#item-3-1">Item 3-1</BNavItem>
                    <BNavItem class="ms-3 my-1" href="#item-3-2">Item 3-2</BNavItem>
                  </BNav>
                </BNav>
              </BNavbar>
            </BCol>

            <BCol cols="8">
              <div
                id="scrollspy-nested"
                ref="contentNested"
                style="position: relative; height: 300px; overflow-y: auto"
              >
                <h4 id="item-1" style="">Item 1</h4>
                <p>{{ lorem }}</p>
                <h5 id="item-1-1" style="">Item 1-1</h5>
                <p>{{ lorem }}</p>
                <h5 id="item-1-2" style="">Item 1-2</h5>
                <p>{{ lorem }}</p>
                <h5 id="item-1-3" style="">Item 1-3</h5>
                <p>{{ lorem }}</p>
                <h5 id="item-1-3-1" style="">Item 1-3-1</h5>
                <p>{{ lorem }}</p>
                <h5 id="item-1-3-2" style="">Item 1-3-2</h5>
                <p>{{ lorem }}</p>
                <h5 id="item-1-4" style="">Item 1-4</h5>
                <p>{{ lorem }}</p>
                <h4 id="item-2" style="">Item 2</h4>
                <p>{{ lorem }}</p>
                <h4 id="item-3" style="">Item 3</h4>
                <p>{{ lorem }}</p>
                <h5 id="item-3-1" style="">Item 3-1</h5>
                <p>{{ lorem }}</p>
                <h5 id="item-3-2" style="">Item 3-2</h5>
                <p>{{ lorem }}</p>
              </div>
            </BCol>
          </BRow>
        </BCard>
        <div class="split" />
        <BCard id="list">
          <BRow>
            <BCol cols="4">
              <BListGroup>
                <BListGroupItem
                  v-for="(e, idx) in currentListItems"
                  :key="idx"
                  :href="'#' + e.id"
                  :class="currentList === e.id && 'active'"
                >
                  {{ e.text }}
                </BListGroupItem>
              </BListGroup>
            </BCol>

            <BCol cols="8">
              <BButton @click="addItem">add</BButton>
              <div
                id="listgroup-ex"
                ref="contentList"
                style="position: relative; overflow-y: auto; height: 400px"
              >
                <template v-for="i in items" :key="i.id">
                  <h4 :id="i.id">Item {{ i.text }}</h4>
                  <p>{{ lorem }}</p>
                </template>
              </div>
            </BCol>
          </BRow>
        </BCard>
        <div class="split" />
        <BCard id="directive">
          <BRow>
            <BCol cols="4">
              <BListGroup v-b-scrollspy:directive-list>
                <BListGroupItem v-for="(e, idx) in items" :key="idx" :href="'#' + e.id">
                  {{ e.text }}
                </BListGroupItem>
              </BListGroup>
            </BCol>

            <BCol cols="8">
              <BButton @click="addItem">add</BButton>
              <div id="directive-list" style="position: relative; overflow-y: auto; height: 400px">
                <template v-for="i in items" :key="i.id">
                  <h4 :id="i.id">Item {{ i.text }}</h4>
                  <p>{{ lorem }}</p>
                </template>
              </div>
            </BCol>
          </BRow>
        </BCard>
        <div class="split" />
      </div>

      <div class="col-4 position-relative">
        <div class="position-sticky top-0">
          <h2>Toc</h2>

          <BListGroup>
            <BListGroupItem
              v-for="(e, idx) in tocListItems"
              :key="idx"
              :href="'#' + e.id"
              :class="e.id === tocCurrent && 'active'"
            >
              {{ e.id }}
            </BListGroupItem>
          </BListGroup>
          <BFormRadioGroup
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
  </BContainer>
</template>

<script setup lang="ts">
import {ref, useTemplateRef} from 'vue'
import {useScrollspy} from 'bootstrap-vue-next/composables/useScrollspy'
// import {useScrollspy} from './BootstrapVue'
const content = useTemplateRef('content')
const target = useTemplateRef('target')
const contentNested = useTemplateRef('contentNested')
const targetNested = useTemplateRef('targetNested')
const contentList = useTemplateRef('contentList')

const tocContent = ref('root-element')
const {current, scrollIntoView} = useScrollspy(content, target)
const {current: currentList, list: currentListItems} = useScrollspy(contentList, null, {
  manual: true,
})
const {current: nestedCurrent} = useScrollspy(contentNested, targetNested)
const {current: tocCurrent, list: tocListItems} = useScrollspy(tocContent, null, {
  manual: true,
})

const lorem = `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `

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
