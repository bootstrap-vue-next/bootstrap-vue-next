<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <p>
          <b-button @click="open = open < 2 ? open + 1 : 0"> click for next, now open: {{ open + 1 }}</b-button>
        </p>
        <p>
          <b-form-select :options="[{text:'id1', value: 'id1'}, {text:'id2', value: 'id2'} , {text:'id3', value: 'id3'}]" v-model="openId"/>
        </p>


      </b-col>
      <b-col>
        <b-accordion flush v-model="openId">
          <b-accordion-item id="id1" title="Accordion Item #1" :visible="open === 0" @show="open = 0">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </b-accordion-item>

          <b-accordion-item  id="id2" title="Accordion Item #2" :visible="open === 1" @show="open = 1">
            <strong>This is the second item's accordion body.</strong> It is hidden by default,
            until the collapse plugin adds the appropriate classes that we use to style each
            element. These classes control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or overriding our
            default variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </b-accordion-item>

          <b-accordion-item  id="id3" title="Accordion Item #3" :visible="open === 2" @show="open = 2">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </b-accordion-item>
        </b-accordion>
      </b-col>
      <b-col>
        <b-form-checkbox v-model="isFree">is accordion free</b-form-checkbox>
        <b-accordion :free="isFree">
          <b-accordion-item id="free1" title="Free accordion Item #1">
            Don't close other items when this one is opened.
          </b-accordion-item>
          <b-accordion-item title="Free accordion Item #2">
            Don't close other items when this one is opened.
          </b-accordion-item>
          <b-accordion-item title="Free accordion Item #3" toggle>
            Don't close other items when this one is opened.
          </b-accordion-item>
        </b-accordion>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const open = ref(0)
const openX = ref(true)
const openId = ref('id1')
const isFree = ref(true)

</script>