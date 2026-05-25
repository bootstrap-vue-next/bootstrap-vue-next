<template>
  <!-- #region template -->
  <BContainer>
    <BRow>
      <BCol cols="4">
        <BListGroup v-b-scrollspy:directive-overview-content>
          <BListGroupItem href="#scrollspy-introduction">Introduction</BListGroupItem>
          <BListGroupItem href="#scrollspy-usage">Usage</BListGroupItem>
          <BListGroupItem href="#scrollspy-options">Options</BListGroupItem>
        </BListGroup>
      </BCol>

      <BCol cols="8">
        <div
          id="directive-overview-content"
          style="height: 260px; overflow-y: auto; border: 1px solid #dee2e6; padding: 1rem"
        >
          <h5 id="scrollspy-introduction">Introduction</h5>
          <p>
            The scrollspy directive watches a content container and automatically applies the
            <code>active</code> class to matching navigation links.
          </p>
          <p>
            Scroll this panel to see the active link on the left update as different sections enter
            view.
          </p>

          <h5 id="scrollspy-usage">Usage</h5>
          <p>
            Apply <code>v-b-scrollspy</code> to a navigation wrapper and point it at a scrollable
            content element that contains headings or sections with IDs.
          </p>
          <p>
            Links inside the navigation must use matching fragment identifiers such as
            <code>#scrollspy-usage</code>.
          </p>

          <h5 id="scrollspy-options">Options</h5>
          <p>
            Use an object value when you need to customize the tracked selector, observer root, or
            mutation watching behavior.
          </p>
          <p>
            For full programmatic control, use the <code>useScrollspy</code> composable instead of
            the directive.
          </p>
        </div>
      </BCol>
    </BRow>
  </BContainer>
  <!-- #endregion template -->
</template>
