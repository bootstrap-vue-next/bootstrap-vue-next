<template>
  <BAlert variant="warning" :model-value="true">
    <strong>Vue Provide/Inject Limitation</strong>
    <p>
      Due to how Vue's provide/inject system works, composables like
      <code>useToast()</code>, <code>useModal()</code>, and <code>usePopover()</code>
      <strong>cannot</strong> be called in the same component that declares
      <code>&lt;BApp&gt;</code>. They rely on values provided by BApp, and Vue's inject only
      works in child components — not in the component that calls provide itself.
    </p>
    <p class="mb-0">
      Place <code>&lt;BApp&gt;</code> at least one component level above where these composables
      are called.
    </p>
  </BAlert>
</template>
