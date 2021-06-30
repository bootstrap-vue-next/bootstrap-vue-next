<template>
<div class="container">
  <h1 class="bd-title" id="content">List group</h1>
  <p class="bd-lead">List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>

  <b-list-group>
    <b-list-group-item>An item</b-list-group-item>
    <b-list-group-item>A second item</b-list-group-item>
    <b-list-group-item>A third item</b-list-group-item>
    <b-list-group-item>A fourth item</b-list-group-item>
    <b-list-group-item>And a fifth one</b-list-group-item>
  </b-list-group>

  <h2>Active items</h2>

  <b-list-group>
    <b-list-group-item active>An active item</b-list-group-item>
    <b-list-group-item>A second item</b-list-group-item>
    <b-list-group-item>A third item</b-list-group-item>
    <b-list-group-item>A fourth item</b-list-group-item>
    <b-list-group-item>And a fifth one</b-list-group-item>
  </b-list-group>

  <h2>Disabled items</h2>

  <b-list-group>
    <b-list-group-item disabled>A disabled item</b-list-group-item>
    <b-list-group-item>A second item</b-list-group-item>
    <b-list-group-item>A third item</b-list-group-item>
    <b-list-group-item>A fourth item</b-list-group-item>
    <b-list-group-item>And a fifth one</b-list-group-item>
  </b-list-group>

  <h2>Flush</h2>

  <b-list-group flush>
    <b-list-group-item>An item</b-list-group-item>
    <b-list-group-item>A second item</b-list-group-item>
    <b-list-group-item>A third item</b-list-group-item>
    <b-list-group-item>A fourth item</b-list-group-item>
    <b-list-group-item>And a fifth one</b-list-group-item>
  </b-list-group>

  <h2>Numbered</h2>

  <b-list-group numbered>
    <b-list-group-item>An item</b-list-group-item>
    <b-list-group-item>A second item</b-list-group-item>
    <b-list-group-item>A third item</b-list-group-item>
    <b-list-group-item>A fourth item</b-list-group-item>
    <b-list-group-item>And a fifth one</b-list-group-item>
  </b-list-group>

  <h2>Horizontal</h2>

  <b-list-group horizontal>
    <b-list-group-item>An item</b-list-group-item>
    <b-list-group-item>A second item</b-list-group-item>
    <b-list-group-item>A third item</b-list-group-item>
    <b-list-group-item>A fourth item</b-list-group-item>
    <b-list-group-item>And a fifth one</b-list-group-item>
  </b-list-group>

  <hr/>

  <h1 class="bd-title" id="content">Card</h1>
  <p class="bd-lead">Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</p>

  <b-card title="Card title">
    <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
    <b-button variant="primary">Go somewhere</b-button>
  </b-card>
  
  <b-card title="Card title" class="mt-4" subtitle="Card subtitle">
    <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
    <b-button variant="primary">Go somewhere</b-button>
  </b-card>

  <hr />

  <h1 class="bd-title" id="content">Badge</h1>
  <p class="bd-lead">Documentation and examples for badges, our small count and labeling component.</p>

  <h1>Example heading <b-badge>New</b-badge></h1>
  <h2>Example heading <b-badge>New</b-badge></h2>
  <h3>Example heading <b-badge>New</b-badge></h3>
  <h4>Example heading <b-badge>New</b-badge></h4>
  <h5>Example heading <b-badge>New</b-badge></h5>
  <h6>Example heading <b-badge>New</b-badge></h6>

  <h3>Buttons</h3>

  <b-button variant="primary">
    Notifications <b-badge>4</b-badge>
  </b-button>

  <h3>Background colors</h3>

  <b-badge variant="primary">Primary</b-badge>
  <b-badge variant="secondary">Secondary</b-badge>
  <b-badge variant="success">Success</b-badge>
  <b-badge variant="danger">Danger</b-badge>
  <b-badge variant="warning">Warning</b-badge>
  <b-badge variant="info">Info</b-badge>
  <b-badge variant="light">Light</b-badge>
  <b-badge variant="dark">Dark</b-badge>

  <h3>Pill badges</h3>

  <b-badge pill variant="primary">Primary</b-badge>
  <b-badge pill variant="secondary">Secondary</b-badge>
  <b-badge pill variant="success">Success</b-badge>
  <b-badge pill variant="danger">Danger</b-badge>
  <b-badge pill variant="warning">Warning</b-badge>
  <b-badge pill variant="info">Info</b-badge>
  <b-badge pill variant="light">Light</b-badge>
  <b-badge pill variant="dark">Dark</b-badge>
  
  <hr />
  
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

export default defineComponent({
  name: 'App',
});
</script>
