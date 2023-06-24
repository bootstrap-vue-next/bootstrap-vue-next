<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        <BTableSimple>
          <BTbody>
            <BTr>
              <BTd>{{ count }}</BTd>
              <BTd stacked-heading="sm">{{ count }}</BTd>
              <BTd><button @click="count++">Increment</button></BTd>
            </BTr>
          </BTbody>
        </BTableSimple>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <button @click="count++">Increment</button>
        {{ count }}
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <BTableSimple responsive>
          <BThead>
            <BTr>
              <BTh sticky-column>Sticky Column Header</BTh>
              <BTh>Heading 1</BTh>
              <BTh>Heading 2</BTh>
              <BTh>Heading 3</BTh>
              <BTh>Heading 4</BTh>
            </BTr>
          </BThead>
          <BTbody>
            <BTr>
              <BTd sticky-column variant="primary">Sticky Column Row Header</BTd>
              <BTd>Cell</BTd>
              <BTd>Cell</BTd>
              <BTd>Cell</BTd>
              <BTd>Cell</BTd>
            </BTr>
            <BTr>
              <BTh sticky-column>Sticky Column Row Header</BTh>
              <BTd>Cell</BTd>
              <BTd>Cell</BTd>
              <BTd>Cell</BTd>
              <BTd>Cell</BTd>
            </BTr>
          </BTbody>
          <BTfoot>
            <BTr>
              <BTh sticky-column>Sticky Column Footer</BTh>
              <BTh>Heading 1</BTh>
              <BTh>Heading 2</BTh>
              <BTh>Heading 3</BTh>
              <BTh>Heading 4</BTh>
            </BTr>
          </BTfoot>
        </BTableSimple>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BTableSimple hover small caption-top responsive>
          <caption>
            Items sold in August, grouped by Country and City:
          </caption>
          <colgroup>
            <col />
            <col />
          </colgroup>
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <colgroup>
            <col />
            <col />
          </colgroup>
          <BThead head-variant="dark">
            <BTr>
              <BTh colspan="2">Region</BTh>
              <BTh colspan="3">Clothes</BTh>
              <BTh colspan="2">Accessories</BTh>
            </BTr>
            <BTr>
              <BTh>Country</BTh>
              <BTh>City</BTh>
              <BTh>Trousers</BTh>
              <BTh>Skirts</BTh>
              <BTh>Dresses</BTh>
              <BTh>Bracelets</BTh>
              <BTh>Rings</BTh>
            </BTr>
          </BThead>
          <BTbody>
            <BTr>
              <BTh rowspan="3">Belgium</BTh>
              <BTh class="text-end">Antwerp</BTh>
              <BTd>56</BTd>
              <BTd>22</BTd>
              <BTd>43</BTd>
              <BTd variant="success">72</BTd>
              <BTd>23</BTd>
            </BTr>
            <BTr>
              <BTh class="text-end">Gent</BTh>
              <BTd>46</BTd>
              <BTd variant="warning">18</BTd>
              <BTd>50</BTd>
              <BTd>61</BTd>
              <BTd variant="danger">15</BTd>
            </BTr>
            <BTr>
              <BTh class="text-end">Brussels</BTh>
              <BTd>51</BTd>
              <BTd>27</BTd>
              <BTd>38</BTd>
              <BTd>69</BTd>
              <BTd>28</BTd>
            </BTr>
            <BTr>
              <BTh rowspan="2">The Netherlands</BTh>
              <BTh class="text-end">Amsterdam</BTh>
              <BTd variant="success">89</BTd>
              <BTd>34</BTd>
              <BTd>69</BTd>
              <BTd>85</BTd>
              <BTd>38</BTd>
            </BTr>
            <BTr>
              <BTh class="text-end">Utrecht</BTh>
              <BTd>80</BTd>
              <BTd variant="danger">12</BTd>
              <BTd>43</BTd>
              <BTd>36</BTd>
              <BTd variant="warning">19</BTd>
            </BTr>
          </BTbody>
          <BTfoot>
            <BTr>
              <BTd colspan="7" variant="secondary" class="text-end">
                Total Rows:
                <b>5</b>
              </BTd>
            </BTr>
          </BTfoot>
        </BTableSimple>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BTableSimple hover small caption-top stacked>
          <caption>
            Items sold in August, grouped by Country and City:
          </caption>
          <colgroup>
            <col />
            <col />
          </colgroup>
          <colgroup>
            <col />
            <col />
            <col />
          </colgroup>
          <colgroup>
            <col />
            <col />
          </colgroup>
          <BThead head-variant="dark">
            <BTr>
              <BTh colspan="2">Region</BTh>
              <BTh colspan="3">Clothes</BTh>
              <BTh colspan="2">Accessories</BTh>
            </BTr>
            <BTr>
              <BTh>Country</BTh>
              <BTh>City</BTh>
              <BTh>Trousers</BTh>
              <BTh>Skirts</BTh>
              <BTh>Dresses</BTh>
              <BTh>Bracelets</BTh>
              <BTh>Rings</BTh>
            </BTr>
          </BThead>
          <BTbody>
            <BTr>
              <BTh rowspan="3" class="text-center">Belgium (3 Cities)</BTh>
              <BTh stacked-heading="City" class="text-start">Antwerp</BTh>
              <BTd stacked-heading="Clothes: Trousers">56</BTd>
              <BTd stacked-heading="Clothes: Skirts">22</BTd>
              <BTd stacked-heading="Clothes: Dresses">43</BTd>
              <BTd stacked-heading="Accessories: Bracelets" variant="success">72</BTd>
              <BTd stacked-heading="Accessories: Rings">23</BTd>
            </BTr>
            <BTr>
              <BTh stacked-heading="City">Gent</BTh>
              <BTd stacked-heading="Clothes: Trousers">46</BTd>
              <BTd stacked-heading="Clothes: Skirts" variant="warning">18</BTd>
              <BTd stacked-heading="Clothes: Dresses">50</BTd>
              <BTd stacked-heading="Accessories: Bracelets">61</BTd>
              <BTd stacked-heading="Accessories: Rings" variant="danger">15</BTd>
            </BTr>
            <BTr>
              <BTh stacked-heading="City">Brussels</BTh>
              <BTd stacked-heading="Clothes: Trousers">51</BTd>
              <BTd stacked-heading="Clothes: Skirts">27</BTd>
              <BTd stacked-heading="Clothes: Dresses">38</BTd>
              <BTd stacked-heading="Accessories: Bracelets">69</BTd>
              <BTd stacked-heading="Accessories: Rings">28</BTd>
            </BTr>
            <BTr>
              <BTh rowspan="2" class="text-center">The Netherlands (2 Cities)</BTh>
              <BTh stacked-heading="City">Amsterdam</BTh>
              <BTd stacked-heading="Clothes: Trousers" variant="success">89</BTd>
              <BTd stacked-heading="Clothes: Skirts">34</BTd>
              <BTd stacked-heading="Clothes: Dresses">69</BTd>
              <BTd stacked-heading="Accessories: Bracelets">85</BTd>
              <BTd stacked-heading="Accessories: Rings">38</BTd>
            </BTr>
            <BTr>
              <BTh stacked-heading="City">Utrecht</BTh>
              <BTd stacked-heading="Clothes: Trousers">80</BTd>
              <BTd stacked-heading="Clothes: Skirts" variant="danger">12</BTd>
              <BTd stacked-heading="Clothes: Dresses">43</BTd>
              <BTd stacked-heading="Accessories: Bracelets">36</BTd>
              <BTd stacked-heading="Accessories: Rings" variant="warning">19</BTd>
            </BTr>
          </BTbody>
          <BTfoot>
            <BTr>
              <BTd colspan="7" variant="secondary" class="text-end">
                Total Rows:
                <b>5</b>
              </BTd>
            </BTr>
          </BTfoot>
        </BTableSimple>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const count = ref(0)
</script>
