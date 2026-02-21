<template>
  <div>
    <h5>Using Modifiers</h5>
    <BButton
      v-b-toggle.collapse-a.collapse-b
      variant="primary"
      class="mb-2"
    >
      Toggle Both Collapses
    </BButton>

    <h5>Using Space-Separated String</h5>
    <BButton
      v-b-toggle="'collapse-a collapse-b'"
      variant="success"
      class="mb-2"
    >
      Toggle Both Collapses
    </BButton>

    <h5>Using Array</h5>
    <BButton
      v-b-toggle="['collapse-a', 'collapse-b']"
      variant="info"
      class="mb-3"
    >
      Toggle Both Collapses
    </BButton>

    <BCollapse
      id="collapse-a"
      class="mb-2"
    >
      <BCard
        header="Collapse A"
        border-variant="primary"
      >
        <p class="card-text">This is collapse A</p>
      </BCard>
    </BCollapse>

    <BCollapse id="collapse-b">
      <BCard
        header="Collapse B"
        border-variant="success"
      >
        <p class="card-text">This is collapse B</p>
      </BCard>
    </BCollapse>
  </div>
</template>
