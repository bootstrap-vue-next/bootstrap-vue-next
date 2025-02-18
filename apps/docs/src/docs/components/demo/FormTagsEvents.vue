<!-- eslint-disable vue/no-unused-vars -->
<template>
  <BFormTags>
    <!-- #region template -->
    <template #default="{inputAttrs, inputHandlers, removeTag, tags}">
      <custom-input
        :id="inputAttrs.id"
        :custom-value-prop="inputAttrs.value"
        @custom-input-event="inputHandlers.input($event)"
        @custom-change-event="inputHandlers.change($event)"
        @custom-keydown-event="inputHandlers.keydown($event)"
      />
      <template v-for="tag in tags">
        <!-- Your custom tag list here -->
      </template>
    </template>
    <!-- #endregion template -->
  </BFormTags>
</template>
