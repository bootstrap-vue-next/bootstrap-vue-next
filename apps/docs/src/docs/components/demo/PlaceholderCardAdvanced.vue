<template>
  <BPlaceholderCard
    img-src="https://picsum.photos/1024/480/?image=1"
    img-bottom
    no-header
  >
    <template #footer> Footer </template>

    <template #default>
      <BPlaceholder />
      <BPlaceholder
        width="65"
        variant="danger"
      />
      <BPlaceholder
        cols="6"
        variant="info"
      />
    </template>
  </BPlaceholderCard>
</template>
