<template>
  <BContainer :toast="{ root: true }">
    <Comp />
  </BContainer>
</template>

<script>
import Comp from './components/Comp.vue';
export default {
  name: 'testapp',
  components: { Comp },
  data() {
    return {
      value: 1,
    };
  },
};
</script>
