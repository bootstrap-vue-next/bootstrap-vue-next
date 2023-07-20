<template>
  <BContainer>
    <BRow>
      <BCol> Hello World! </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ToastInstance, useToast} from './components/BToast/plugin'

const toast = useToast()

console.log(toast)
toast?.show({title: 'wwsw', body: 'wow'}, {autoHide: false})

toast?.info({title: 'wow', body: 'wow'}, {autoHide: false})
toast?.warning({body: 'wow'}, {autoHide: false})
toast?.danger({body: 'wow'}, {autoHide: false})
toast?.success({body: 'wow'}, {autoHide: false, variant: 'success'})

// You can use this file as a development spot to test your changes
// Please do not commit this file
</script>
