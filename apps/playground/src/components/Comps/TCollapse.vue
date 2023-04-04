<template>
  <b-container>
    <b-row>
      <b-col>
        <b-collapse id="collapse-1" class="mt-2">
          <template #header="{visible, toggle, id}">
            <h4>Custom Header</h4>
            <p>Visible: {{ visible }}</p>
            <b-button variant="primary" :aria-expanded="visible" :aria-controls="id" @click="toggle"
              >Toggle</b-button
            >
          </template>
          <b-card>
            <p class="card-text">Collapse contents Here</p>
            <b-button v-b-toggle.collapse-1-inner size="sm"
              >Toggle Inner Collapse with directive</b-button
            >
            <b-collapse id="collapse-1-inner" class="mt-2">
              <b-card>Hello!</b-card>
            </b-collapse>
          </b-card>
        </b-collapse>

        <b-collapse id="collapse-2" visible class="mt-2">
          <template #header="{visible, toggle}">
            <h4>Start open</h4>
            <b-button :variant="visible ? 'secondary' : 'primary'" @click="toggle">Toggle</b-button>
          </template>
          <b-card>
            <p class="card-text">Started open with visible prop</p>
          </b-card>
        </b-collapse>
        <b-collapse id="collapse-2" toggle class="mt-2">
          <template #header="{toggle}">
            <h4>Toggled open on load</h4>
            <b-button variant="primary" @click="toggle">Toggle</b-button>
          </template>
          <b-card>
            <p class="card-text">Openned with animation using toggle prop</p>
          </b-card>
        </b-collapse>
        <div style="min-height: 120px">
          <b-collapse id="collapse-2" horizontal class="mt-2">
            <template #header="{toggle}">
              <b-button variant="primary" @click="toggle">Toggle horizontal</b-button>
            </template>
            <b-card style="width: 300px">
              <p class="card-text">Collapse contents Here</p>
            </b-card>
          </b-collapse>
        </div>
        <div>
          <b-button @click="collapseState = !collapseState">Toggle via v-model</b-button>
          <b-collapse id="collapse-2" v-model="collapseState" class="mt-2">
            <b-card>
              <p class="card-text">Collapse contents Here</p>
            </b-card>
          </b-collapse>
        </div>
        <div>
          <b-button @click="collapseRef?.toggle()">Toggle via ref</b-button>
          <b-collapse ref="collapseRef" class="mt-2">
            <b-card>
              <p class="card-text">Collapse contents Here</p>
            </b-card>
          </b-collapse>
        </div>
      </b-col>
      <b-col>
        <b-accordion flush free>
          <b-accordion-item id="iddddd" title="Accordion Item #1" visible>
            Accordion is also using collapse. Openned by visible prop
          </b-accordion-item>

          <b-accordion-item v-model="collapseState" title="Openned with v-model">
            <strong>This is the second item's accordion body.</strong> It is hidden by default,
            until the collapse plugin adds the appropriate classes that we use to style each
            element. These classes control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or overriding our
            default variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </b-accordion-item>

          <b-accordion-item title="Accordion Item #3">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </b-accordion-item>
        </b-accordion>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {ref} from 'vue'
const collapseState = ref(true)
const collapseRef = ref(null as unknown as {toggle: () => void})
</script>
