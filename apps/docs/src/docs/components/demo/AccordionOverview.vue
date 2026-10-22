<template>
  <!-- #region template -->
  <BAccordion>
    <BAccordionItem title="Accordion Item #1" open>
      <strong>This is the first item's accordion body.</strong> It is open by default because of the
      native <code>open</code> state. The browser handles showing and hiding the disclosure.
    </BAccordionItem>
    <BAccordionItem title="Accordion Item #2">
      <strong>This is the second item's accordion body.</strong> Opening it closes the first item
      because both native <code>details</code> elements share the accordion's generated
      <code>name</code>.
    </BAccordionItem>
    <BAccordionItem title="Accordion Item #3">
      <strong>This is the third item's accordion body.</strong> The default slot can contain any
      HTML content.
    </BAccordionItem>
  </BAccordion>
  <!-- #endregion template -->
</template>
