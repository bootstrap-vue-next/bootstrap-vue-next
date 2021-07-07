<template>
<div class="container mt-4">

  <h1 class="bd-title" id="content">Accordion</h1>
  <p class="bd-lead">Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.</p>

  <b-card no-body title="holaprop" sub-title="sdf" header="hola" footer="chau">
    <template #footer>
        <em>Footer Slot</em>
      </template>
      
    <b-card-body>
      <b-card-title>Card title</b-card-title>
      <b-card-sub-title>Card subtitle</b-card-sub-title>
    </b-card-body>
    <b-accordion flush>
      <b-accordion-item header="Accordion Item #1" show>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </b-accordion-item>

      <b-accordion-item header="Accordion Item #2">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </b-accordion-item>

      <b-accordion-item header="Accordion Item #3">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </b-accordion-item>
    </b-accordion>
  </b-card>
  <!-- <b-button v-b-toggle:my-collapse>Collapse</b-button>
  <b-button @click="collapse = !collapse">Toggle collapse v-model</b-button>
  <b-collapse id="my-collapse" v-model="collapse">
    <b-card>hola</b-card>
  </b-collapse>
  {{ collapse }} -->
  <!-- <b-tabs>
    <b-tab title="Home" active>1</b-tab>
    <b-tab title="Profile">2</b-tab>
    <b-tab title="Contact">3</b-tab>
  </b-tabs>

  <b-button title="Tooltip on <em>top</em>" v-b-tooltip.top>Tolltip on top</b-button>
  <b-button title="Tooltip on left" v-b-tooltip.left>Tolltip on left</b-button>
  <b-button title="Tooltip on right" v-b-tooltip.right.click>Tolltip on right</b-button>
  <b-button title="Tooltip on bottom" v-b-tooltip.bottom>Tolltip on bottom</b-button> -->
  <!-- <b-progress :value="50" striped animated />

  <b-progress class="mt-2" :value="50" showValue/>


  <b-progress class="mt-2" showValue >
    <b-progress-bar :value="10" />
    <b-progress-bar variant="warning" :value="25" />
    <b-progress-bar :value="15" />
  </b-progress> -->

  <!-- <b-button v-b-toggle:offcanvas>Open offcanvas</b-button> -->
  <!-- <b-button @click="offcanvas = !offcanvas">Offcanvas v-model</b-button>

  {{ offcanvas }}

  <b-offcanvas v-model="offcanvas" title="Menú" id="offcanvas">HOlaa</b-offcanvas> -->

  

  <!-- <div>
    <b-button-group>
      <b-button>Button 1</b-button>
      <b-button>Button 2</b-button>
      <b-button>Button 3</b-button>
    </b-button-group>
  </div>
  <div class="mt-3">
    <b-button-group>
      <b-button variant="success">Success</b-button>
      <b-button variant="info">Info</b-button>
      <b-button variant="warning">Warning</b-button>
    </b-button-group>
  </div>
  <div>
    <b-button-group vertical>
    <b-button toggle active>Top</b-button>
    <b-button toggle>Middle</b-button>
    <b-button toggle>Bottom</b-button>
  </b-button-group>
  </div> -->
  <!-- <b-close-button />
  <b-close-button disabled />
  <div class="bg-dark">
      <b-close-button white />
      <b-close-button white disabled />
  </div>
  <b-breadcrumb />

  <b-button variant="primary" class="mb-3" v-b-toggle:collapseExample>Toggle collapse</b-button>
  <b-collapse id="collapseExample" show>
    <div class="card card-body">
      Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    </div>
  </b-collapse>

  <hr />
  
  <b-button v-b-toggle:myCollapse2>Collapse</b-button>
  <b-collapse id="myCollapse2">holaaa</b-collapse>

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
  </b-accordion> -->
  <!-- <h1 class="bd-title" id="content">List group</h1>
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
  </div> -->
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import BCollapse from './components/BCollapse.vue';
import { useBreadcrumb } from '@/composables/useBreadcrumb';
import BProgress from './components/BProgress.vue';

export default defineComponent({
  components: { BCollapse, BProgress },
  name: 'App',
  data() {
      return{values: [15, 30, 20],
      max: 100}
  },
  setup() {
    const { items } = useBreadcrumb();
    const collapse = ref(false);
    const offcanvas = ref(false);

    onMounted(() => {
      items.push({
        text: 'Inicio',
        href: '/home'
      });

      items.push({
        text: 'hola'
      })
    })

    return {
      collapse,
      offcanvas,
    }
  }
});
</script>
