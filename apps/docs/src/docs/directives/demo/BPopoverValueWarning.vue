<!-- #region warning -->
<!-- Correct -->
<BButton v-b-popover="'My title'">Button</BButton>

<!-- Incorrect - tries to reference variable myTitle -->
<BButton v-b-popover="myTitle">Button</BButton>
<!-- #endregion warning -->
