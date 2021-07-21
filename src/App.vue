<template>
<div class="container mt-4">
  <b-breadcrumb />
  <b-form-input v-model="name" type="range" />
  {{ name }}
  <b-table
  responsive="xs"
    caption="List of users"

    :items="items"
    striped hover
    foot-clone
  >
    <template #cell(first_name)="data">
      <a href="#">{{ data.value }}</a>
    </template>
  </b-table>
  <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
      active
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

  <details class="accordion-item">
    <summary class="accordion-header">
      <div class="details-button">Accordion Item #1</div>
    </summary>
    <div class="accordion-body">
      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </details>

  <div class="text-danger">
  <b-icon icon="exclamation-circle-fill" />
  </div>


  <b-button @click="showModal = !showModal">Toggle modal v-model</b-button>
  {{ showModal }}
  <!-- <b-button v-b-modal:exampleModal>Launch demo modal</b-button> -->
  <b-modal no-backdrop fullscreen="sm" size="xl" v-model="showModal" title="Modal title" fade id="exampleModal">...</b-modal>
  <!-- <b-nav pills>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item-dropdown
      id="my-nav-dropdown"
      text="Dropdown"
      toggle-class="nav-link-custom"
      right
    >
      <b-dropdown-item>One</b-dropdown-item>
      <b-dropdown-item>Two</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Three</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav> -->
  <!-- <b-tabs class="mt-3">
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs> -->
  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <b-form-floating-label label="Email address">
    <b-form-input placeholder=" " />
  </b-form-floating-label>
  <span class="input-group-text">.00</span>
  </div>

  <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <b-form-input v-model="city" :list="['San Francisco',
  'New York',
  'Seattle',
  'Los Angeles',
  'Chicago']" />
  <span class="input-group-text">.00</span>
  </div>

  {{ city }}

  <b-form-floating-label label="Email address">
    <b-form-input placeholder=" " />
  </b-form-floating-label>

  <b-button :title="tooltip" v-b-tooltip.top>Tolltip on top</b-button>
  <b-button @click="tooltip = `${new Date()} <strong>fechaaa</strong>`">Change tooltip</b-button>
  <b-button title="Tooltip on left" v-b-tooltip.left>Tolltip on left</b-button>
  <b-button title="Tooltip on right" v-b-tooltip.right.click>Tolltip on right</b-button>
  <b-button title="Tooltip on bottom" v-b-tooltip.bottom>Tolltip on bottom</b-button>

  <b-button id="popover-target-1">
    Hover Me
  </b-button>
  <b-popover target="popover-target-1" triggers="click" placement="top">
    <template #title>Popover <em>Title</em></template>
    <b-button @click="consoleLog">456</b-button>
    I am popover <b>component</b> content!
  </b-popover>

  <button v-b-popover.top="'And here\'s some amazing content. It\'s very engaging. Right?'" type="button" class="btn btn-lg btn-danger" title="Popover title">Click to toggle popover</button>
  <button v-b-popover.left="'I\'m another popover!'" type="button" class="btn btn-lg btn-success" title="Popover title 2">Click to toggle popover</button>

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
      <b-accordion-item title="Accordion Item #1" visible>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </b-accordion-item>

      <b-accordion-item title="Accordion Item #2">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </b-accordion-item>

      <b-accordion-item title="Accordion Item #3">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </b-accordion-item>
    </b-accordion>
  </b-card>


<b-card no-body title="holaprop" sub-title="sdf" header="hola" footer="chau">
    <template #footer>
        <em>Footer Slot</em>
      </template>

    <b-card-body>
      <b-card-title>Card title</b-card-title>
      <b-card-sub-title>Card subtitle</b-card-sub-title>
    </b-card-body>
    <b-accordion flush>
      <b-accordion-item title="Accordion Item #1" visible>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </b-accordion-item>

      <b-accordion-item title="Accordion Item #2">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </b-accordion-item>

      <b-accordion-item title="Accordion Item #3">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </b-accordion-item>
    </b-accordion>
  </b-card>

    <b-input-group sm class="mb-3 mt-3">
      <b-input-group-text>small</b-input-group-text>
      <b-form-input placeholder="input"></b-form-input>
      <b-button>button</b-button>
    </b-input-group>
    <b-input-group class="mb-3">
      <b-input-group-text>medium</b-input-group-text>
      <b-form-input placeholder="input"></b-form-input>
      <b-button>button</b-button>
    </b-input-group>
    <b-input-group lg class="mb-3">
      <b-input-group-text>large</b-input-group-text>
      <b-form-input placeholder="input"></b-form-input>
      <b-button>button</b-button>
    </b-input-group>

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
  </b-tabs> -->
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


  <b-button variant="primary" class="mb-3" v-b-toggle:collapseExample>Toggle collapse</b-button>
  <b-collapse id="collapseExample" visible>
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
    <b-accordion-item id="collapseOne" header="Accordion Item #1" visible>
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
    <b-accordion-item id="collapseOne" header="Accordion Item #1" visible>
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
      <BCollapse class="multi-collapse" id="multiCollapseExample1" visible>
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
import { useBreadcrumb } from './composables/useBreadcrumb';

export default defineComponent({
  name: 'App',
  data() {
      return{values: [15, 30, 20],
      max: 100}
  },
  setup() {
    const tooltip = ref('Tooltip on <em>top</em>');
    const showModal = ref(false);
    const city = ref('');
    const { items } = useBreadcrumb();
    const collapse = ref(false);
    const offcanvas = ref(false);
    const tableItems = [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ];
    const name = ref('');

    const consoleLog = () => console.log('button clicked!');

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
      name,
      consoleLog,
      tooltip,
      showModal,
      city,
      collapse,
      offcanvas,
      items: tableItems,
    }
  }
});
</script>

<style scoped>
details.accordion-item summary {
  list-style-type: none;
}
details.accordion-item[open] .details-button {
	color: #0c63e4;
	background-color: #e7f1ff;
	box-shadow: inset 0 -1px 0 rgba(0,0,0,.125);
}

details.accordion-item .details-button {
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	padding: 1rem 1.25rem;
	font-size: 1rem;
	color: #212529;
	text-align: left;
	background-color: #fff;
	border: 0;
	border-radius: 0;
	overflow-anchor: none;
	transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease;
}

details.accordion-item .details-button::after {
	flex-shrink: 0;
	width: 1.25rem;
	height: 1.25rem;
	margin-left: auto;
	content: "";
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-size: 1.25rem;
	transition: transform .2s ease-in-out;
}

details.accordion-item[open] .details-button::after {
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
	transform: rotate(-180deg);
}
</style>
