<template>
  <BContainer>
    <BRow>
      <BCol>
        <BCollapse id="collapse-1" class="mt-2">
          <template #header="{visible, toggle, id}">
            <h4>Custom Header</h4>
            <p>Visible: {{ visible }}</p>
            <BButton variant="primary" :aria-expanded="visible" :aria-controls="id" @click="toggle"
              >Toggle</BButton
            >
          </template>
          <BCard>
            <p class="card-text">Collapse contents Here</p>
            <BButton v-b-toggle.collapse-1-inner size="sm"
              >Toggle Inner Collapse with directive</BButton
            >
            <BCollapse id="collapse-1-inner" class="mt-2">
              <BCard>Hello!</BCard>
            </BCollapse>
          </BCard>
        </BCollapse>

        <BCollapse id="collapse-2" visible class="mt-2">
          <template #header="{visible, toggle}">
            <h4>Start open</h4>
            <BButton :variant="visible ? 'secondary' : 'primary'" @click="toggle">Toggle</BButton>
          </template>
          <BCard>
            <p class="card-text">Started open with visible prop</p>
          </BCard>
        </BCollapse>
        <BCollapse id="collapse-2" toggle class="mt-2">
          <template #header="{toggle}">
            <h4>Toggled open on load</h4>
            <BButton variant="primary" @click="toggle">Toggle</BButton>
          </template>
          <BCard>
            <p class="card-text">Openned with animation using toggle prop</p>
          </BCard>
        </BCollapse>
        <div style="min-height: 120px">
          <BCollapse id="collapse-2" horizontal class="mt-2">
            <template #header="{toggle}">
              <BButton variant="primary" @click="toggle">Toggle horizontal</BButton>
            </template>
            <BCard style="width: 300px">
              <p class="card-text">Collapse contents Here</p>
            </BCard>
          </BCollapse>
        </div>
        <div>
          <BButton @click="collapseState = !collapseState">Toggle via v-model</BButton>
          <BCollapse id="collapse-2" v-model="collapseState" class="mt-2">
            <BCard>
              <p class="card-text">Collapse contents Here</p>
            </BCard>
          </BCollapse>
        </div>
        <div>
          <BButton @click="collapseRef?.toggle()">Toggle via ref</BButton>
          <BCollapse ref="collapseRef" class="mt-2">
            <BCard>
              <p class="card-text">Collapse contents Here</p>
            </BCard>
          </BCollapse>
        </div>
      </BCol>
      <BCol>
        <BAccordion flush free>
          <BAccordionItem id="iddddd" title="Accordion Item #1" visible>
            Accordion is also using collapse. Openned by visible prop
          </BAccordionItem>

          <BAccordionItem v-model="collapseState" title="Openned with v-model">
            <strong>This is the second item's accordion body.</strong> It is hidden by default,
            until the collapse plugin adds the appropriate classes that we use to style each
            element. These classes control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or overriding our
            default variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </BAccordionItem>

          <BAccordionItem title="Accordion Item #3">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </BAccordionItem>
        </BAccordion>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {ref} from 'vue'
const collapseState = ref(true)
const collapseRef = ref(null as unknown as {toggle: () => void})
</script>
