<!-- #region component -->
<!-- ❌ Incorrect - title prop goes to BCard, not the popover -->
<BCard v-b-popover.hover.top title="my title" />

<!-- ✅ Correct - provide title in directive value -->
<BCard v-b-popover.hover.top="{title: 'Popover', body: 'Content'}" />
<!-- #endregion component -->

<!-- #region html -->
<!-- ✅ Works well -->
<button v-b-popover.hover.top title="my title">
  Click me
</button>

<!-- ✅ Also works with directive value -->
<div v-b-popover.hover.top="'Popover content'">Hover me</div>
<!-- #endregion html -->
