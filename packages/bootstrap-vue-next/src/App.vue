<template>
  <div class="main">
    <b-form-radio-group
      v-model="selected"
      :options="options"
      value-field="id"
      text-field="name"
      stacked
      @change="onChange"
      @input="onInput"
      @update:modelValue="onModelValueChange"
    />

    <br />
    <br />
    {{ selected }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  components: {},
  data() {
    return {
      selected: 1,
      options: [
        {
          id: 0,
          name: 'User 0 (impossible to select)',
        },
        {
          id: 1,
          name: 'User 1',
        },
        {
          id: 2,
          name: 'User 2',
        },
        {
          id: 3,
          name: 'User 3',
        },
      ],
    }
  },
  methods: {
    onChange() {
      console.log('change')
    },
    onInput() {
      console.log('input')
    },
    onModelValueChange() {
      console.log('model')
    },
  },
}
</script>

<style>
.main {
  padding: 16px;
}
</style>
