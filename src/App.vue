<!-- eslint-disable vue/max-attributes-per-line vue/singleline-html-element-content-newline -->
<template>
  <div class="h3 mt-5">
    <b-row cols="2" cols-sm="4" class="text-center" style="font-size: 4rem">
      <b-col class="mb-2">
        <b-icon icon="exclamation-circle" scale="0.5" class="bg-info"></b-icon>
      </b-col>
      <b-col class="mb-2">
        <b-icon icon="exclamation-circle" class="bg-info"></b-icon>
      </b-col>
      <b-col class="mb-2">
        <b-icon icon="exclamation-circle" scale="1.5" class="bg-info"></b-icon>
      </b-col>
      <b-col class="mb-2">
        <b-icon icon="exclamation-circle" scale="2" class="bg-info"></b-icon>
      </b-col>
    </b-row>
  </div>
  <div style="font-size: 4rem">
    <b-icon icon="bar-chart-fill"></b-icon>
    <b-icon icon="bar-chart-fill" flip-h></b-icon>
    <b-icon icon="bar-chart-fill" flip-v></b-icon>
    <b-icon icon="bar-chart-fill" flip-h flip-v></b-icon>
  </div>
  <div style="font-size: 4rem">
    <b-icon icon="camera"></b-icon>
    <b-icon icon="camera" rotate="45"></b-icon>
    <b-icon icon="camera" rotate="90"></b-icon>
    <b-icon icon="camera" rotate="180"></b-icon>
    <b-icon icon="camera" rotate="270"></b-icon>
    <b-icon icon="camera" rotate="-45"></b-icon>
  </div>
  <div style="font-size: 4rem">
    <b-icon icon="bell-fill" class="border rounded p-2"></b-icon>
    <b-icon icon="bell-fill" class="border border-info rounded p-2" variant="info"></b-icon>
    <b-icon icon="bell-fill" class="rounded-circle bg-danger p-2" variant="light"></b-icon>
    <b-icon icon="unlock-fill" class="rounded bg-primary p-1" variant="light"></b-icon>
  </div>
  <div class="d-flex" style="column-gap: 1rem">
    <b-icon icon="camera" font-scale="0.5"></b-icon>
    <b-icon icon="camera" font-scale="1"></b-icon>
    <b-icon icon="camera" font-scale="2"></b-icon>
    <b-icon icon="camera" font-scale="3"></b-icon>
    <b-icon icon="camera" font-scale="4"></b-icon>
    <b-icon icon="camera" font-scale="5"></b-icon>
    <b-icon icon="camera" font-scale="7.5"></b-icon>
  </div>
  <div>
    <b-icon icon="exclamation-circle" style="width: 120px; height: 120px"></b-icon>
  </div>
  <b-row cols="2" cols-sm="4" class="text-center" style="font-size: 4rem">
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-v="8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-v="-8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-h="8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-h="-8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-v="16" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-h="-8" shift-v="-8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon
        icon="exclamation-circle"
        scale="0.5"
        rotate="45"
        shift-h="-4"
        shift-v="4"
        class="bg-info"
      ></b-icon>
    </b-col>
  </b-row>
</template>

<script lang="ts" setup>
import {defineComponent, onMounted, ref} from 'vue'
</script>

<style>
details.accordion-item summary {
  list-style-type: none;
}
details.accordion-item[open] .details-button {
  color: #0c63e4;
  background-color: #e7f1ff;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}

details.accordion-item .details-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: #fff;
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
}

details.accordion-item .details-button::after {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: auto;
  content: '';
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}

details.accordion-item[open] .details-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(-180deg);
}

.bd-example-row .row > .col,
.bd-example-row .row > [class^='col-'] {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color: rgba(39, 41, 43, 0.03);
  border: 1px solid rgba(39, 41, 43, 0.1);
}
</style>
