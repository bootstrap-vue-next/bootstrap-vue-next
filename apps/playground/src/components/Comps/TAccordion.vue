<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-accordion flush>
          <b-accordion-item id="iddddd" title="Accordion Item #1" visible>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </b-accordion-item>

          <b-accordion-item title="Accordion Item #2">
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
      <b-col>
        <b-accordion free>
          <b-accordion-item id="iddddd" title="Free accordion Item #1">
            Don't close other items when this one is opened.
          </b-accordion-item>
          <b-accordion-item title="Free accordion Item #2">
            Don't close other items when this one is opened.
          </b-accordion-item>
          <b-accordion-item title="Free accordion Item #3">
            Don't close other items when this one is opened.
          </b-accordion-item>
        </b-accordion>
      </b-col>
    </b-row>
  </b-container>
</template>
