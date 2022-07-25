<template>
  <!-- Layout -->
  <div class="my-2">
    <h2>Layout</h2>
    <div>
      <h4 class="my-3">Basic layout</h4>
      <div class="bd-example-row">
        <b-row>
          <b-col>1 of 2</b-col>
          <b-col>2 of 2</b-col>
        </b-row>
        <b-row>
          <b-col>1 of 3</b-col>
          <b-col>2 of 3</b-col>
          <b-col>3 of 3</b-col>
        </b-row>
      </div>
    </div>
    <div>
      <h4 class="my-3">Row columns</h4>
      <div class="bd-example-row">
        <b-row cols="1" cols-sm="2" cols-md="4">
          <b-col>Column</b-col>
          <b-col>Column</b-col>
          <b-col>Column</b-col>
          <b-col>Column</b-col>
        </b-row>
      </div>
    </div>
    <div>
      <h4 class="my-3">Variable width content</h4>
      <div class="bd-example-row">
        <b-row align-h="center">
          <b-col lg="2">1 of 3</b-col>
          <b-col md="auto">Variable width content</b-col>
          <b-col lg="2">3 of 3</b-col>
        </b-row>
        <b-row>
          <b-col>1 of 3</b-col>
          <b-col md="auto">Variable width content</b-col>
          <b-col lg="2">3 of 3</b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
