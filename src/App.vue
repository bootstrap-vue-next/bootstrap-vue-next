<template>
<div class="container">
  <h1 class="bd-title" id="content">Spinner</h1>
  <p class="bd-lead">Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.</p>

  <b-spinner />
  <b-spinner variant="primary" />
  <b-spinner grow />
  <b-spinner variant="primary" grow />

  <hr/>
  
  <b-spinner small />
  <b-spinner small variant="primary" />
  <b-spinner small grow />
  <b-spinner small variant="primary" grow />

  <hr/>

  <b-button variant="primary" disabled>
    <b-spinner grow small />
  </b-button>
  
  <b-button variant="primary" disabled>
    <b-spinner grow small />
    Loading...
  </b-button>
  
  <hr />
  
  <h1 class="bd-title" id="content">Accordion</h1>
  <p class="bd-lead">Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.</p>

  <b-accordion id="accordionExample">
    <b-accordion-item id="collapseOne" header="Accordion Item #1" show>
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </b-accordion-item>

    <b-accordion-item id="collapseTwo" header="Accordion Item #2">
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </b-accordion-item>

    <b-accordion-item id="collapseThree" header="Accordion Item #3">
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </b-accordion-item>
  </b-accordion>

  <hr />

  <h1 class="bd-title" id="content">Buttons</h1>
  <p class="bd-lead">Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>

  <b-button v-b-modal:exampleModal>Launch demo modal</b-button>
  <b-modal title="Modal title" fade id="exampleModal">...</b-modal>
  <hr/>

  <h1 class="bd-title" id="content">Alerts</h1>
  <p class="bd-lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>

  <b-alert variant="primary" show>A simple primary alert—check it out!</b-alert>
  <b-alert variant="warning" show dismissible>
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  </b-alert>

  <hr/>

  <h1 class="bd-title" id="content">Collapse</h1>
  <p class="bd-lead">Toggle the visibility of content across your project with a few classes and our JavaScript plugins.</p>

  <p>
    <b-button variant="primary" v-b-toggle:multiCollapseExample1>Toggle first element</b-button>&nbsp;
    <b-button variant="primary" v-b-toggle:multiCollapseExample2>Toggle second element</b-button>&nbsp;
    <b-button variant="primary" v-b-toggle:multi-collapse>Toggle both elements</b-button>
  </p>

  <div class="row">
    <div class="col">
      <BCollapse class="multi-collapse" id="multiCollapseExample1" show>
        <div class="card card-body">
          Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </BCollapse>
    </div>
    <div class="col">
      <BCollapse class="multi-collapse" id="multiCollapseExample2">
        <div class="card card-body">
          Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </BCollapse>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BAccordion from './components/BAccordion.vue';
import BButton from './components/BButton.vue';
import BSpinner from './components/BSpinner.vue';

export default defineComponent({
  components: { BAccordion, BButton, BSpinner },
  name: 'App',
});
</script>
