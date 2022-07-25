<template>
  <div class="my-2">
    <h2 id="content" class="bd-title">Accordion</h2>
    <p class="bd-lead">
      Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
    </p>

    <b-card no-body title="holaprop" sub-title="sdf" header="hola" footer="chau">
      <template #footer>
        <em>Footer Slot</em>
      </template>

      <b-card-body>
        <b-card-title>Card title</b-card-title>
        <b-card-sub-title>Card subtitle</b-card-sub-title>
      </b-card-body>
      <b-accordion flush>
        <b-accordion-item id="iddddd" title="Accordion Item #1" visible>
          <strong>This is the first item's accordion body.</strong> It is shown by default, until
          the collapse plugin adds the appropriate classes that we use to style each element. These
          classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </b-accordion-item>

        <b-accordion-item title="Accordion Item #2">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until
          the collapse plugin adds the appropriate classes that we use to style each element. These
          classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </b-accordion-item>

        <b-accordion-item title="Accordion Item #3">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until
          the collapse plugin adds the appropriate classes that we use to style each element. These
          classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </b-accordion-item>
      </b-accordion>
    </b-card>
  </div>
</template>
