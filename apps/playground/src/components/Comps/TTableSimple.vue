<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-table-simple>
          <b-tbody>
            <b-tr>
              <b-td>{{ count }}</b-td>
              <b-td stacked-heading="sm">{{ count }}</b-td>
              <b-td><button @click="count++">Increment</button></b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <button @click="count++">Increment</button>
        {{ count }}
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-table-simple responsive>
          <b-thead>
            <b-tr>
              <b-th sticky-column>Sticky Column Header</b-th>
              <b-th>Heading 1</b-th>
              <b-th>Heading 2</b-th>
              <b-th>Heading 3</b-th>
              <b-th>Heading 4</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td sticky-column variant="primary">Sticky Column Row Header</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
          </b-tbody>
          <b-tfoot>
            <b-tr>
              <b-th sticky-column>Sticky Column Footer</b-th>
              <b-th>Heading 1</b-th>
              <b-th>Heading 2</b-th>
              <b-th>Heading 3</b-th>
              <b-th>Heading 4</b-th>
            </b-tr>
          </b-tfoot>
        </b-table-simple>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table-simple hover small caption-top responsive>
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
          <b-thead head-variant="dark">
            <b-tr>
              <b-th colspan="2">Region</b-th>
              <b-th colspan="3">Clothes</b-th>
              <b-th colspan="2">Accessories</b-th>
            </b-tr>
            <b-tr>
              <b-th>Country</b-th>
              <b-th>City</b-th>
              <b-th>Trousers</b-th>
              <b-th>Skirts</b-th>
              <b-th>Dresses</b-th>
              <b-th>Bracelets</b-th>
              <b-th>Rings</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-th rowspan="3">Belgium</b-th>
              <b-th class="text-right">Antwerp</b-th>
              <b-td>56</b-td>
              <b-td>22</b-td>
              <b-td>43</b-td>
              <b-td variant="success">72</b-td>
              <b-td>23</b-td>
            </b-tr>
            <b-tr>
              <b-th class="text-right">Gent</b-th>
              <b-td>46</b-td>
              <b-td variant="warning">18</b-td>
              <b-td>50</b-td>
              <b-td>61</b-td>
              <b-td variant="danger">15</b-td>
            </b-tr>
            <b-tr>
              <b-th class="text-right">Brussels</b-th>
              <b-td>51</b-td>
              <b-td>27</b-td>
              <b-td>38</b-td>
              <b-td>69</b-td>
              <b-td>28</b-td>
            </b-tr>
            <b-tr>
              <b-th rowspan="2">The Netherlands</b-th>
              <b-th class="text-right">Amsterdam</b-th>
              <b-td variant="success">89</b-td>
              <b-td>34</b-td>
              <b-td>69</b-td>
              <b-td>85</b-td>
              <b-td>38</b-td>
            </b-tr>
            <b-tr>
              <b-th class="text-right">Utrecht</b-th>
              <b-td>80</b-td>
              <b-td variant="danger">12</b-td>
              <b-td>43</b-td>
              <b-td>36</b-td>
              <b-td variant="warning">19</b-td>
            </b-tr>
          </b-tbody>
          <b-tfoot>
            <b-tr>
              <b-td colspan="7" variant="secondary" class="text-end">
                Total Rows:
                <b>5</b>
              </b-td>
            </b-tr>
          </b-tfoot>
        </b-table-simple>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table-simple hover small caption-top stacked>
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
          <b-thead head-variant="dark">
            <b-tr>
              <b-th colspan="2">Region</b-th>
              <b-th colspan="3">Clothes</b-th>
              <b-th colspan="2">Accessories</b-th>
            </b-tr>
            <b-tr>
              <b-th>Country</b-th>
              <b-th>City</b-th>
              <b-th>Trousers</b-th>
              <b-th>Skirts</b-th>
              <b-th>Dresses</b-th>
              <b-th>Bracelets</b-th>
              <b-th>Rings</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-th rowspan="3" class="text-center">Belgium (3 Cities)</b-th>
              <b-th stacked-heading="City" class="text-left">Antwerp</b-th>
              <b-td stacked-heading="Clothes: Trousers">56</b-td>
              <b-td stacked-heading="Clothes: Skirts">22</b-td>
              <b-td stacked-heading="Clothes: Dresses">43</b-td>
              <b-td stacked-heading="Accessories: Bracelets" variant="success">72</b-td>
              <b-td stacked-heading="Accessories: Rings">23</b-td>
            </b-tr>
            <b-tr>
              <b-th stacked-heading="City">Gent</b-th>
              <b-td stacked-heading="Clothes: Trousers">46</b-td>
              <b-td stacked-heading="Clothes: Skirts" variant="warning">18</b-td>
              <b-td stacked-heading="Clothes: Dresses">50</b-td>
              <b-td stacked-heading="Accessories: Bracelets">61</b-td>
              <b-td stacked-heading="Accessories: Rings" variant="danger">15</b-td>
            </b-tr>
            <b-tr>
              <b-th stacked-heading="City">Brussels</b-th>
              <b-td stacked-heading="Clothes: Trousers">51</b-td>
              <b-td stacked-heading="Clothes: Skirts">27</b-td>
              <b-td stacked-heading="Clothes: Dresses">38</b-td>
              <b-td stacked-heading="Accessories: Bracelets">69</b-td>
              <b-td stacked-heading="Accessories: Rings">28</b-td>
            </b-tr>
            <b-tr>
              <b-th rowspan="2" class="text-center">The Netherlands (2 Cities)</b-th>
              <b-th stacked-heading="City">Amsterdam</b-th>
              <b-td stacked-heading="Clothes: Trousers" variant="success">89</b-td>
              <b-td stacked-heading="Clothes: Skirts">34</b-td>
              <b-td stacked-heading="Clothes: Dresses">69</b-td>
              <b-td stacked-heading="Accessories: Bracelets">85</b-td>
              <b-td stacked-heading="Accessories: Rings">38</b-td>
            </b-tr>
            <b-tr>
              <b-th stacked-heading="City">Utrecht</b-th>
              <b-td stacked-heading="Clothes: Trousers">80</b-td>
              <b-td stacked-heading="Clothes: Skirts" variant="danger">12</b-td>
              <b-td stacked-heading="Clothes: Dresses">43</b-td>
              <b-td stacked-heading="Accessories: Bracelets">36</b-td>
              <b-td stacked-heading="Accessories: Rings" variant="warning">19</b-td>
            </b-tr>
          </b-tbody>
          <b-tfoot>
            <b-tr>
              <b-td colspan="7" variant="secondary" class="text-right">
                Total Rows:
                <b>5</b>
              </b-td>
            </b-tr>
          </b-tfoot>
        </b-table-simple>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const count = ref(0)
</script>
