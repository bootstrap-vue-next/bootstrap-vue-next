<template>
  <BContainer> comp </BContainer>
</template>

<script>
export default {
  name: 'Comp',
  data() {
    return {
      options: [
        { value: 1, text: 'one' },
        { value: 2, text: 'two' },
        { value: 3, text: 'three' },
      ],
      value: 1,
    };
  },
};
</script>
