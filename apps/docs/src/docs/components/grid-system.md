# Grid System

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Bootstrap Vue offers several utility components to assist in building your grid layout.
Using `<BContainer>` and a combination of `<BRow>` and `<BCol>`, a responsive layout can be built with ease.
For more detailed documentation and understanding, please visit Bootstrap's official Grid System.

</div>

<HighlightCard>
  <BContainer>
    <BRow class="bd-example-row">
      <BCol>
        Column
      </BCol>
        <BCol>
        Column
      </BCol>
        <BCol>
        Column
      </BCol>
    </BRow>
  </BContainer>
  <template #html>

```vue-html
<BContainer>
  <BRow>
    <BCol>
      Column
    </BCol>
      <BCol>
      Column
    </BCol>
      <BCol>
      Column
    </BCol>
  </BRow>
</BContainer>
```

  </template>
</HighlightCard>

## Variable width content

<HighlightCard>
  <BContainer>
    <BRow class="bd-example-row">
      <BCol lg="6">
        Column
      </BCol>
      <BCol lg="6">
        Column
      </BCol>
      <BCol md="6" lg="3">
        Column
      </BCol>
      <BCol md="6" lg="9">
        Column
      </BCol>
      <BCol offset="3" md="6" lg="9">
        Offset Column
      </BCol>
    </BRow>
  </BContainer>
  <template #html>

```vue-html
<BContainer>
  <BRow>
    <BCol lg="6">
      Column
    </BCol>
    <BCol lg="6">
      Column
    </BCol>
    <BCol md="6" lg="3">
      Column
    </BCol>
    <BCol offset="3" md="6" lg="9">
      Offset Column
    </BCol>
  </BRow>
</BContainer>
```

  </template>
</HighlightCard>

## Ordering

<HighlightCard>
  <BContainer>
    <BRow class="bd-example-row">
      <BCol order="2" order-lg="3">
        Column 1
      </BCol>
        <BCol order="3" order-lg="2">
        Column 2
      </BCol >
        <BCol order="1" order-lg="1">
        Column 3
      </BCol>
    </BRow>
  </BContainer>
  <template #html>

```vue-html
<BContainer>
  <BRow>
    <BCol order="2" order-lg="3">
      Column 1
    </BCol>
      <BCol order="3" order-lg="2">
      Column 2
    </BCol >
      <BCol order="1" order-lg="1">
      Column 3
    </BCol>
  </BRow>
</BContainer>
```

  </template>
</HighlightCard>

## Alignment

<HighlightCard>
  <BContainer>
    <BRow class="bd-example-row" style="min-height: 10rem">
      <BCol alignSelf="center">
        Column 1
      </BCol>
        <BCol alignSelf="start">
        Column 2
      </BCol >
        <BCol alignSelf="end">
        Column 3
      </BCol>
    </BRow>
  </BContainer>
  <template #html>

```vue-html
<BContainer>
  <BRow>
    <BCol alignSelf="center">
      Column 1
    </BCol>
      <BCol alignSelf="start">
      Column 2
    </BCol >
      <BCol alignSelf="end">
      Column 3
    </BCol>
  </BRow>
</BContainer>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/gridSystem.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BCard, BCardBody, BContainer, BRow, BCol, BImg} from 'bootstrap-vue-next'
</script>
