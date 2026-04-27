<template>
  <BContainer>
    <BRow>
      <BCol>
        <BAccordion free>
          <BAccordionItem title="Accordion Item 1" visible>
            First item
            <BAccordionItem title="Accordion Item 2"> Second item. </BAccordionItem>
          </BAccordionItem>

          <BAccordionItem title="Accordion Item 3"> Third item. </BAccordionItem>
        </BAccordion>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {BCol, BContainer, BRow} from './components'
</script>
