<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <h4 class="m-2">Sizes</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BDropdown text="Small" class="m-2" size="sm">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown text="Medium" class="m-2">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown text="Large" class="m-2" size="lg">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">v-model</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BFormCheckbox v-model="state"> state</BFormCheckbox>

        <BDropdown v-model="state" text="using v-model" class="m-2">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">Split & variant</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BDropdown
          split
          text="Split variant"
          class="m-2"
          variant="outline-primary"
          split-variant="primary"
          @click="(event: Event) => consoleLog('main split button clicked', event)"
          @toggle="consoleLog('toggle button clicked')"
        >
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">Direction & variant</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BDropdown dropup text="Up" variant="success" class="m-2">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown dropup end text="Up End" variant="dark" class="m-2">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown dropend text="drop end" variant="info" class="m-2">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown dropstart text="dropstart" variant="outline-primary" class="m-2">
          <BDropdownItem href="#">Action</BDropdownItem>
          <BDropdownItem href="#">Action</BDropdownItem>
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown dropstart center text="dropstart center" variant="outline-primary" class="m-2">
          <BDropdownItem href="#">Action</BDropdownItem>
          <BDropdownItem href="#">Action</BDropdownItem>
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown dropstart end text="dropstart end" variant="outline-primary" class="m-2">
          <BDropdownItem href="#">Action</BDropdownItem>
          <BDropdownItem href="#">Action</BDropdownItem>
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown text="Bottom" variant="warning" class="m-2">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown end text="Bottom end" variant="light" class="m-2">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown center text="center" class="m-2">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">Flip</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BDropdown dropup text="Flip enabled" class="m-2">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown dropup text="Flip disabled" class="m-2" no-flip>
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">Size</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BDropdown dropup text="Size enabled" class="m-2">
          <BDropdownItem v-for="i in 200" :key="i" href="#"> Action {{ i }} </BDropdownItem>
        </BDropdown>

        <BDropdown dropup text="Size disabled" class="m-2" no-size>
          <BDropdownItem v-for="i in 200" :key="i" href="#"> Action {{ i }} </BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">Misc</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BDropdown offset="50" text="Offset" class="m-2">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown text="Dark" class="m-2" dark>
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown text="Auto close inside" class="m-2" auto-close="inside">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown text="Auto close outside" class="m-2" auto-close="outside">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>

        <BDropdown text="Various Item Attributes" class="m-2" auto-close="outside">
          <BDropdownItem href="#">First Action</BDropdownItem>
          <BDropdownItem>Second Action</BDropdownItem>
          <BDropdownItem>Third Action</BDropdownItem>
          <BDropdownDivider />
          <BDropdownItem href="#" active>Active action</BDropdownItem>
          <BDropdownItem href="#" disabled>Disabled action</BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">Block</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BDropdown text="Block" class="m-2" block variant="primary">
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">Custom popper config</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BDropdown
          text="Open up, offset & no flip"
          class="m-2"
          variant="success"
          :popper-opts="{
            placement: 'top-end',
            modifiers: [
              {name: 'flip', options: {fallbackPlacements: []}},
              {name: 'offset', options: {offset: [20, 30]}},
            ],
          }"
        >
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4 class="m-2">Custom Button Icon</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BDropdown text="Custom Button Icon" no-caret class="m-2" variant="link">
          <template #button-content>
            <img src="../../assets/logo.png" style="height: 1em" />
          </template>
          <BDropdownItem href="#">Action</BDropdownItem>
        </BDropdown>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h4 class="m-2">Navigation</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BCard>
          <RouterView />
        </BCard>
        <BLink to="/" active-class="link-success">Home</BLink> |
        <BLink to="/about/foo" active-class="link-success">About</BLink> |
        <BLink to="/test" active-class="link-success">Test</BLink>
        <BDropdown text="Router integration" class="m-2">
          <BDropdownItem to="/">Home</BDropdownItem>
          <BDropdownItem
            :to="{
              name: 'about',
              params: {id: '456'},
              query: {param: 'someVal'},
            }"
          >
            About
          </BDropdownItem>
          <RouterLink v-slot="{href, navigate, isActive}" to="/test" custom>
            <BDropdownItem
              :active="isActive"
              :href="href"
              target="_blank"
              rel="noopener"
              @click="navigate"
            >
              test slot
            </BDropdownItem>
          </RouterLink>
        </BDropdown>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const consoleLog = (...args: unknown[]) => console.log(...args)
const state = ref(true)
</script>
