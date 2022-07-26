<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h4 class="m-2">Sizes</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-dropdown text="Small" class="m-2" size="sm">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Medium" class="m-2">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Large" class="m-2" size="lg">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="m-2">Split & variant</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-dropdown
          split
          text="Split variant"
          class="m-2"
          variant="outline-primary"
          split-variant="primary"
          @click="(event: Event) => consoleLog('main split button clicked', event)"
          @toggle="consoleLog('toggle button clicked')"
        >
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="m-2">Direction & variant</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-dropdown dropup right text="Up Left" variant="dark" class="m-2">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>

        <b-dropdown dropup text="Up Right" variant="success" class="m-2">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>

        <b-dropdown dropright text="Right" variant="info" class="m-2">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Bottom Right" variant="warning" class="m-2">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>

        <b-dropdown right text="Bottom Left" variant="light" class="m-2">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>

        <b-dropdown dropleft text="Left" variant="outline-primary" class="m-2">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="m-2">Flip</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-dropdown dropup text="Flip enabled" class="m-2">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>

        <b-dropdown dropup text="Flip disabled" class="m-2" no-flip>
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="m-2">Misc</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-dropdown offset="50" text="Offset" class="m-2">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Dark" class="m-2" dark>
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Auto close inside" class="m-2" auto-close="inside">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>

        <b-dropdown text="Auto close outside" class="m-2" auto-close="outside">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="m-2">Block</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-dropdown text="Block" class="m-2" block variant="primary">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="m-2">Custom popper config</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-dropdown
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
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="m-2">Custom Button Icon</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-dropdown text="Custom Button Icon" no-caret class="m-2" variant="link">
          <template #button-content>
            <img src="../../assets/logo.png" style="height: 1em" />
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h4 class="m-2">Navigation</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <router-view />
        </b-card>
        <b-link to="/" active-class="link-success">Home</b-link> |
        <b-link to="/about/foo" active-class="link-success">About</b-link> |
        <b-link to="/test" active-class="link-success">Test</b-link>
        <b-dropdown text="Router integration" class="m-2">
          <b-dropdown-item to="/">Home</b-dropdown-item>
          <b-dropdown-item
            :to="{
              name: 'About',
              params: {id: '456'},
              query: {param: 'someVal'},
            }"
          >
            About
          </b-dropdown-item>
          <router-link v-slot="{href, navigate, isActive}" to="/test" custom>
            <b-dropdown-item :active="isActive" :href="href" @click="navigate">
              test slot
            </b-dropdown-item>
          </router-link>
        </b-dropdown>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
const consoleLog = (...args: unknown[]) => console.log(...args)
</script>
