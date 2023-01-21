<template>
  <b-container>
    <b-row>
      <b-col>
        <b-carousel v-model="val" controls indicators>
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10" />
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
        </b-carousel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {ref} from 'vue'
const val = ref(0)
</script>
