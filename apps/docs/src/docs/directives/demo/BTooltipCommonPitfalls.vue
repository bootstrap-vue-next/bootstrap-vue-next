<!-- #region component -->
<!-- ❌ Wrong: title prop goes to child element -->
<BCard v-b-tooltip.hover.top title="My tooltip">Card</BCard>

<!-- ✅ Correct: use directive value -->
<BCard v-b-tooltip.hover.top="'My tooltip'">Card</BCard>
<!-- #endregion component -->

<!-- #region html -->
<!-- ✅ Correct: plain HTML with title attribute -->
<div v-b-tooltip.hover.top title="My tooltip">
  Content
</div>
<!-- #endregion html -->
