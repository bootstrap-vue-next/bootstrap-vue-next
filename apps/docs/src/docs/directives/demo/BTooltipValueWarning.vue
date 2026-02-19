<!-- #region warning -->
<!-- ❌ Wrong: missing inner quotes -->
<BButton v-b-tooltip="My tooltip">Button</BButton>

<!-- ✅ Correct: string literal with quotes -->
<BButton v-b-tooltip="'My tooltip'">Button</BButton>
<!-- #endregion warning -->
