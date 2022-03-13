<!-- eslint-disable vue/max-attributes-per-line vue/singleline-html-element-content-newline -->
<template>
  <b-container id="container" ref="container" :toast="{root: true}" class="mt-4" fluid="sm">
    <b-form-group label="Tags validation example" label-for="tags-validation" :state="state">
      <!-- <label for="tags-basic">Type a new tag and press enter</label> -->
      <b-form-tags
        v-model="value"
        tag-variant="warning"
        autofocus
        separator=" ,"
        remove-on-delete
        name="tag-names"
        no-outer-focus
        no-add-on-enter
        :input-attrs="{'aria-describedby': 'tags-validation-help'}"
        :tag-validator="tagValidator"
        @tag-state="onTagState"
      ></b-form-tags>
      <template #invalid-feedback> You must provide at least 3 tags and no more than 8 </template>

      <template #description>
        <div id="tags-validation-help">
          Tags must be 3 to 5 characters in length and all lower case. Enter tags separated by
          spaces or press enter.
        </div>
      </template>
    </b-form-group>
    <p class="mt-2">Value: {{ value }}</p>

    <b-skeleton-icon>
      <svg
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
        focusable="false"
        role="img"
        aria-label="person"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi-person b-skeleton-icon b-icon bi"
        style="font-size: 200%"
      >
        <g>
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
          ></path>
        </g>
      </svg>
    </b-skeleton-icon>
    <b-skeleton-icon>
      <svg
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
        focusable="false"
        role="img"
        aria-label="person fill"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi-person-fill b-skeleton-icon b-icon bi"
        style="font-size: 200%"
      >
        <g>
          <path
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          ></path>
        </g>
      </svg>
    </b-skeleton-icon>
    <b-skeleton-table
      :rows="4"
      :columns="3"
      :table-props="{bordered: true, striped: true}"
    ></b-skeleton-table>
    <b-button @click="loading = !loading">Toggle loading</b-button>
    <b-card>
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-skeleton width="85%"></b-skeleton>
          <b-skeleton width="55%"></b-skeleton>
          <b-skeleton width="70%"></b-skeleton>
        </template>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra nunc sapien, non
        rhoncus elit tincidunt vitae. Vestibulum maximus, ligula eu feugiat molestie, massa diam
        imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut molestie est. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus
        at consequat dui. Aenean tristique sagittis quam, sit amet sollicitudin neque sodales in.
      </b-skeleton-wrapper>
    </b-card>
    <h5>Text (default)</h5>
    <b-skeleton></b-skeleton>

    <h5 class="mt-3">Avatar</h5>
    <b-skeleton type="avatar"></b-skeleton>

    <h5 class="mt-3">Input</h5>
    <b-skeleton type="input"></b-skeleton>

    <h5 class="mt-3">Button</h5>
    <b-skeleton type="button"></b-skeleton>

    <h5>Wave (default)</h5>
    <b-card>
      <b-skeleton animation="wave" width="85%"></b-skeleton>
      <b-skeleton animation="wave" width="55%"></b-skeleton>
      <b-skeleton animation="wave" width="70%"></b-skeleton>
    </b-card>

    <h5 class="mt-3">Fade</h5>
    <b-card>
      <b-skeleton animation="fade" width="85%"></b-skeleton>
      <b-skeleton animation="fade" width="55%"></b-skeleton>
      <b-skeleton animation="fade" width="70%"></b-skeleton>
    </b-card>

    <h5 class="mt-3">Throb</h5>
    <b-card>
      <b-skeleton animation="throb" width="85%"></b-skeleton>
      <b-skeleton animation="throb" width="55%"></b-skeleton>
      <b-skeleton animation="throb" width="70%"></b-skeleton>
    </b-card>

    <h5 class="mt-3">None</h5>
    <b-card>
      <b-skeleton animation width="85%"></b-skeleton>
      <b-skeleton animation width="55%"></b-skeleton>
      <b-skeleton animation width="70%"></b-skeleton>
    </b-card>
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
    <hr />
    <!-- Table simple -->
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
    <hr />
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
    <!-- Popover-->
    <div class="my-2">
      <h2>Popover</h2>
      <b-button id="popover">hover me</b-button>
      <b-popover
        target="popover"
        :delay="{show: 400, hide: 5000}"
        triggers="hover"
        placement="right"
      >
        <template #title>What?</template>
        Hello Word
      </b-popover>
    </div>
    <!-- Form -->
    <div class="my-2">
      <h2>Form</h2>
      <b-form @submit.stop.prevent>
        <label for="text-password">Password</label>
        <b-form-input
          id="text-password"
          type="password"
          aria-describedby="password-help-block"
          aria-invalid
        />
        <b-form-text id="password-help-block">
          Your password must be 8-20 characters long, contain letters and numbers, and must not
          contain spaces, special characters, or emoji.
        </b-form-text>
      </b-form>
    </div>

    <!-- Form Input -->
    <div class="my-2">
      <h2>Form Input</h2>
      <div>
        <h4>Form Input Types</h4>
        <div>type text</div>
        <b-form-input ref="input" type="text" class="mb-1" />
        <div>type number</div>
        <b-form-input type="number" />
        <div>type email</div>
        <b-form-input type="email" />
        <div>type password</div>
        <b-form-input v-model="password" :type="showPassword ? 'text' : 'password'" class="mb-1" />
        <b-form-input :type="showPassword ? 'text' : 'password'" class="mb-1" />
        <b-form-checkbox v-model="showPassword">Show password</b-form-checkbox>
        {{ password }}
        <div>type search</div>
        <b-form-input type="search" />
        <div>type url</div>
        <b-form-input type="url" />
        <div>type tel</div>
        <b-form-input type="tel" />
        <div>type date</div>
        <b-form-input type="date" />
        <div>type time</div>
        <b-form-input type="time" />
        <div>type range</div>
        <b-form-input v-model="formInputRangeValue" type="range" min="0" max="5" step="0.5" />
        <div>value : {{ formInputRangeValue }}</div>
        <div>type color</div>
        <b-form-input type="color" />
        <div>plaintext</div>
        <b-form-input type="text" plaintext value="a" />
        <div>Disabled</div>
        <b-form-input disabled value="disabled input" />
      </div>

      <div class="mt-2">
        <h4>Form Input Sizes</h4>
        <div class="row mb-1">
          <div class="col-1 mb-1">small</div>
          <b-form-input type="text" size="sm" class="col" />
        </div>
        <div class="row mb-1">
          <div class="col-1">large</div>
          <b-form-input type="text" size="lg" class="col" />
        </div>
      </div>

      <div class="mt-2">
        <h4>Form Input Contextual states</h4>
        <div class="row mb-1">
          <div class="col-1">null</div>
          <b-form-input type="text" :state="null" class="col" />
        </div>
        <div class="row mb-1">
          <div class="col-1">true</div>
          <b-form-input type="text" :state="true" class="col" />
        </div>
        <div class="row mb-1">
          <div class="col-1">false</div>
          <b-form-input type="text" :state="false" class="col" />
        </div>
      </div>
    </div>

    <!-- Form Floating Label -->
    <div class="my-2">
      <h2>Form Floating Label</h2>
      <div class="input-group mb-3">
        <span id="basic-addon1" class="input-group-text">@</span>
        <b-form-floating-label label="Email address">
          <b-form-input placeholder=" " />
        </b-form-floating-label>
        <span class="input-group-text">.00</span>
      </div>
      <div>
        <b-form-floating-label label="Email address">
          <b-form-input placeholder=" " />
        </b-form-floating-label>
      </div>
    </div>

    <!-- Form Checkbox -->
    <div class="my-2">
      <div class="mb-2">
        <h2>Form Checkbox</h2>
        <h4 class="m-2">Simple</h4>
        <div class="m-4">
          <b-form-checkbox
            id="checkbox-1"
            v-model="checkboxes.status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
            >I accept the terms and use</b-form-checkbox
          >
          <div>
            State:
            <strong>{{ checkboxes.status }}</strong>
          </div>
        </div>
        <h4 class="m-2">Individual</h4>
        <div class="row mx-4">
          <b-form-checkbox v-model="checkedDefault" class="col-4">Default</b-form-checkbox>
          <div class="col-6">Checked: {{ checkedDefault }}</div>
        </div>
        <div class="row mx-4 my-1">
          <b-form-checkbox v-model="checkedButton" button class="col-4"
            >Button format</b-form-checkbox
          >
          <div class="col-6">Checked: {{ checkedButton }}</div>
        </div>
        <div class="row mx-4 my-1">
          <b-form-checkbox v-model="checkedRequired" required class="col-4"
            >Required</b-form-checkbox
          >
          <div class="col-6">Checked: {{ checkedRequired }}</div>
        </div>
        <div class="row mx-4 my-1">
          <b-form-checkbox disabled>Disabled</b-form-checkbox>
        </div>
        <div class="row mx-4 my-1">
          <b-form-checkbox v-model="checkedIndeterminate" indeterminate class="col-4"
            >Indeterminate</b-form-checkbox
          >
          <div class="col-6">Checked: {{ checkedIndeterminate }}</div>
        </div>
        <div class="row mx-4 my-1">
          <b-form-checkbox
            v-model="checkedString"
            value="correct"
            unchecked-value="incorrect"
            class="col-4"
            >Bound to string</b-form-checkbox
          >
          <div class="col-6">Value: {{ checkedString }}</div>
        </div>
        <div class="mx-4 my-1">
          <b-button class="mx-1" variant="primary" @click="checkedString = 'correct'"
            >Set correct</b-button
          >
          <button class="btn btn-primary mx-1" @click="checkedString = 'incorrect'">
            Set incorrect
          </button>
        </div>
        <div class="row mx-4 my-1">
          <b-form-checkbox v-model="checkedPlain" class="col-4" plain>Plain</b-form-checkbox>
          <div class="col-6 ml-2">Checked: {{ checkedPlain }}</div>
        </div>
        <h4>Checkbox bound to array</h4>
        <div class="row mx-4 my-1">
          <div class="col-4">
            <strong>Select some cars</strong>
          </div>
          <div class="col-4">
            <strong>Selected cars</strong>
          </div>
        </div>
        <div class="row mx-4 my-1">
          <div class="col-4">
            <b-form-checkbox
              v-for="(car, index) in checkedAvailableCars"
              :key="index"
              v-model="checkedSelectedCars"
              :value="car"
              >{{ car }}</b-form-checkbox
            >
          </div>
          <div class="col-8">
            <ul>
              <li v-for="(car, index) in checkedSelectedCars" :key="index">{{ car }}</li>
            </ul>
          </div>
        </div>
        <div class="row mx-4">
          <button class="btn btn-primary col-4" @click="setCheckedSelectedCars">
            Set selected cars to Mercedes and Toyota
          </button>
        </div>
      </div>
    </div>

    <!-- Form Checkbox Group -->
    <div class="my-2">
      <h2 class="m-2">Form Checkbox Group</h2>
      <div class="m-4">
        <span>
          <b>With options</b>
        </span>
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="checkboxes.selected"
          :options="checkboxes.options"
        />
        <br />
        <span>
          <b>With slots</b>
        </span>
        <b-form-checkbox-group id="checkbox-group-2" v-model="checkboxes.selected">
          <b-form-checkbox value="orange">Orange</b-form-checkbox>
          <b-form-checkbox value="apple">Apple</b-form-checkbox>
          <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
          <b-form-checkbox value="grape">Grape</b-form-checkbox>
        </b-form-checkbox-group>
        <br />
        <div>
          Selected:
          <strong>{{ checkboxes.selected }}</strong>
        </div>
        <b-button class="me-2" @click="checkboxes.selected = ['orange']">Orange only</b-button>
        <b-button class="me-2" @click="checkboxes.selected = ['grape']">Grape only</b-button>
      </div>
    </div>

    <!-- Form Radio -->
    <div class="my-2">
      <h2>Form Radio</h2>
      <h4 class="m-2">Individual</h4>
      <div class="row mx-4 my-1">
        <b-form-radio v-model="radioDefault" class="col-4">Default</b-form-radio>
        <div class="col-6">Checked: {{ radioDefault }}</div>
      </div>
      <div class="row mx-4 my-1">
        <b-form-radio v-model="radioButton" button class="col-4">Button format</b-form-radio>
        <div class="col-6">Checked: {{ radioButton }}</div>
      </div>
      <div class="row mx-4 my-1">
        <b-form-radio v-model="radioRequired" required class="col-4">Required</b-form-radio>
        <div class="col-6">Checked: {{ radioRequired }}</div>
      </div>
      <div class="row mx-4 my-1">
        <b-form-radio disabled>Disabled</b-form-radio>
      </div>
      <div class="row mx-4 my-1">
        <b-form-radio v-model="radioIndeterminate" indeterminate class="col-4"
          >Indeterminate</b-form-radio
        >
        <div class="col-6">Checked: {{ radioIndeterminate }}</div>
      </div>
      <div class="row mx-4 my-1">
        <b-form-radio
          v-model="radioString"
          value="correct"
          unchecked-value="incorrect"
          class="col-4"
          >Bound to string</b-form-radio
        >
        <div class="col-6">Value: {{ radioString }}</div>
      </div>
      <div class="row mx-4 my-1">
        <b-form-radio v-model="radioPlain" plain class="col-4">Plain</b-form-radio>
        <div class="col-6">Checked: {{ radioPlain }}</div>
      </div>
      <h4>Individual radios grouped</h4>
      <div class="form-group mx-4 my-1">
        <b-form-radio v-model="radioSelected" name="some-radios" value="A">Option A</b-form-radio>
        <b-form-radio v-model="radioSelected" name="some-radios" value="B">Option B</b-form-radio>
      </div>
      <div class="mt-3 mx-4">
        Selected:
        <strong>{{ radioSelected }}</strong>
      </div>
      <div class="mx-4 my-1">
        <button class="btn btn-primary mx-1" @click="radioSelected = 'A'">Set value A</button>
        <button class="btn btn-primary mx-1" @click="radioSelected = 'B'">Set value B</button>
      </div>
      <p />
      <h4>Radio bound to array</h4>
      <div class="row mx-4 my-1">
        <div class="col-4">
          <strong>Select some cars</strong>
        </div>
        <div class="col-4">
          <strong>Selected cars</strong>
        </div>
      </div>
      <div class="row mx-4">
        <div class="col-4">
          <b-form-radio
            v-for="(car, index) in radioAvailableCars"
            :key="index"
            v-model="radioSelectedCars"
            :value="car"
            >{{ car }}</b-form-radio
          >
        </div>
        <div class="col-8">
          <ul>
            <li v-for="(car, index) in radioSelectedCars" :key="index">{{ car }}</li>
          </ul>
        </div>
      </div>
      <h4 class="m-2">Grouped (with options or slots)</h4>
      <div class="m-4">
        <b-form-radio-group
          id="radio-group-1"
          v-model="radios.ex1.selected"
          :options="radios.ex1.options"
          name="radio-options"
        ></b-form-radio-group>

        <b-form-radio-group
          id="radio-group-2"
          v-model="radios.ex1.selected"
          name="radio-sub-component"
        >
          <b-form-radio value="first">Toggle this custom radio</b-form-radio>
          <b-form-radio value="second">Or toggle this other custom radio</b-form-radio>
          <b-form-radio value="third" disabled>This one is Disabled</b-form-radio>
          <b-form-radio :value="{fourth: 4}">This is the 4th radio</b-form-radio>
        </b-form-radio-group>

        <div class="mt-3">
          Selected:
          <strong>{{ radios.ex1.selected }}</strong>
        </div>
      </div>
      <h4 class="m-2">Changing the option field names</h4>
      <div class="m-4">
        <b-form-radio-group
          v-model="radios.ex2.selected"
          :options="radios.ex2.options"
          class="mb-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        ></b-form-radio-group>
        <div class="mt-3">
          Selected:
          <strong>{{ radios.ex2.selected }}</strong>
        </div>
      </div>
      <h4 class="m-2">Button styles radios</h4>
      <div class="m-4">
        <b-form-radio-group
          id="btn-radios-1"
          v-model="radios.ex3.selected"
          :options="radios.ex3.options"
          name="radios-btn-default"
          buttons
        ></b-form-radio-group>

        <b-form-radio-group
          id="btn-radios-2"
          v-model="radios.ex3.selected"
          :options="radios.ex3.options"
          button-variant="outline-primary"
          size="lg"
          name="radio-btn-outline"
          buttons
        ></b-form-radio-group>

        <b-form-radio-group
          id="btn-radios-3"
          v-model="radios.ex3.selected"
          :options="radios.ex3.options"
          name="radio-btn-stacked"
          buttons
          stacked
        ></b-form-radio-group>
      </div>
    </div>

    <!-- Form Select -->
    <div class="my-2">
      <h2>Form Select</h2>
      <b-form-select v-model="formSelectSelected" :options="formSelectOptions" />
      <h4 class="mt-2">plain</h4>
      <b-form-select v-model="formSelectSelected" :options="formSelectOptions" size="sm" plain />
      <div class="mt-2">
        Selected:
        <strong>{{ formSelectSelected }}</strong>
      </div>
      <h4 class="mt-2">multiple</h4>
      <b-form-select
        v-model="formSelectMultipleSelected"
        :options="formSelectOptions"
        class="mb-3"
        multiple
      >
        <template #first>
          <b-form-select-option :value="null" disabled
            >-- Please select an option --</b-form-select-option
          >
        </template>
        <b-form-select-option value="C">Option C</b-form-select-option>
        <b-form-select-option value="D">Option D</b-form-select-option>
      </b-form-select>
      <div class="mt-2">
        Selected:
        <strong>{{ formSelectMultipleSelected }}</strong>
      </div>
    </div>

    <!-- Form Textarea -->
    <div class="my-2">
      <h2>Form Textarea</h2>
      <b-form-textarea v-model="description" class="my-3" />
    </div>

    <!-- Input Group -->
    <div class="my-2">
      <h2>Input Group</h2>
      <div>
        <b-input-group prepend="@" class="mb-3">
          <b-form-input placeholder="Username" />
        </b-input-group>

        <b-input-group append="@example.com" class="mb-3">
          <b-form-input placeholder="Recipient's username" />
        </b-input-group>

        <label>Your vanity URL</label>
        <b-input-group prepend="https://example.com/users/" class="mb-3">
          <b-form-input />
        </b-input-group>

        <b-input-group prepend="$" append=".00" class="mb-3">
          <b-form-input />
        </b-input-group>

        <b-input-group class="mb-3">
          <b-form-input placeholder="Username" />
          <b-input-group-text>@</b-input-group-text>
          <b-form-input placeholder="Server" />
        </b-input-group>

        <b-input-group class="mb-3" prepend="With textarea">
          <textarea class="form-control" />
        </b-input-group>
      </div>

      <div class="mt-2">
        <h4>Input Group Sizes</h4>
        <b-input-group prepend="Small" size="sm" class="mb-3">
          <b-form-input />
        </b-input-group>

        <b-input-group prepend="Default" class="mb-3">
          <b-form-input />
        </b-input-group>

        <b-input-group prepend="Large" size="lg" class="mb-3">
          <b-form-input />
        </b-input-group>
      </div>
    </div>

    <!-- Navigation -->
    <div class="my-2">
      <h2 class="my-3">Navigation (Links)</h2>
      <div id="nav">
        <b-link :to="{name: 'Home', path: '/' /* path is used when vue-router is not present */}"
          >Home</b-link
        >
        <br />
        <b-link
          :to="{
            name: 'About',
            params: {id: '456'},
            query: {param: 'someVal'},
            path: '/about' /* path is used when vue-router is not present */,
          }"
          >About</b-link
        >
      </div>
      <p>NB: navigation behavior depends of the usage of "vue-router"</p>
      <!-- activate "vue-router" in "main.ts" to test the "router-view" component
      <router-view></router-view>
      -->
    </div>

    <!-- Badge -->
    <div class="my-2">
      <h2>Badge</h2>
      <div>
        <h4>Simple</h4>
        <div class="ms-4">
          <h2>
            Example heading
            <b-badge>New</b-badge>
          </h2>
          <h3>
            Example heading
            <b-badge>New</b-badge>
          </h3>
          <h4>
            Example heading
            <b-badge>New</b-badge>
          </h4>
          <h5>
            Example heading
            <b-badge>New</b-badge>
          </h5>
          <h6>
            Example heading
            <b-badge>New</b-badge>
          </h6>
        </div>
      </div>
      <div class="mt-2">
        <h4>Pill badges with color variant</h4>
        <div class="ms-4">
          <b-badge pill variant="primary">Primary</b-badge>
          <b-badge pill variant="secondary">Secondary</b-badge>
          <b-badge pill variant="success">Success</b-badge>
          <b-badge pill variant="danger">Danger</b-badge>
          <b-badge pill variant="warning">Warning</b-badge>
          <b-badge pill variant="info">Info</b-badge>
          <b-badge pill variant="light">Light</b-badge>
          <b-badge pill variant="dark">Dark</b-badge>
        </div>
      </div>
      <div class="mt-2">
        <h4>Actionable badges</h4>
        <div class="ms-4">
          <b-badge href="#" variant="primary">Primary</b-badge>
          <b-badge href="#" variant="secondary">Secondary</b-badge>
          <b-badge href="#" variant="success">Success</b-badge>
          <b-badge href="#" variant="danger">Danger</b-badge>
          <b-badge href="#" variant="warning">Warning</b-badge>
          <b-badge href="#" variant="info">Info</b-badge>
          <b-badge href="#" variant="light">Light</b-badge>
          <b-badge href="#" variant="dark">Dark</b-badge>
        </div>
      </div>
    </div>

    <!-- Dropdown -->
    <div class="my-2">
      <h2 class="my-3">Dropdown</h2>
      <div>
        <h4 class="m-2">Sizes</h4>
        <div class="d-flex">
          <b-dropdown text="Small" class="m-2" size="sm">
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>

          <b-dropdown text="Medium" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>

          <b-dropdown text="Large" class="m-2" size="lg">
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div>
        <h4 class="m-2">Split & variant</h4>
        <div class="d-flex">
          <b-dropdown
            split
            text="Split variant"
            class="m-2"
            variant="outline-primary"
            split-variant="primary"
          >
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div>
        <h4 class="m-2">Direction & variant</h4>
        <div class="d-flex">
          <b-dropdown dropup right text="Up Left" variant="dark" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>

          <b-dropdown dropup text="Up Right" variant="success" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>

          <b-dropdown dropright text="Right" variant="info" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>

          <b-dropdown text="Bottom Right" variant="warning" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>

          <b-dropdown right text="Bottom Left" variant="light" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>

          <b-dropdown dropleft text="Left" variant="outline-primary" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div>
        <h4 class="m-2">Flip</h4>
        <div class="d-flex">
          <b-dropdown dropup text="Flip enabled" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>

          <b-dropdown dropup text="Flip disabled" class="m-2" no-flip>
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div>
        <h4 class="m-2">Misc</h4>
        <div class="d-flex">
          <b-dropdown offset="50" text="Offset" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>

          <b-dropdown text="Dark" class="m-2" dark>
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>

          <b-dropdown text="Auto close inside" class="m-2" auto-close="inside">
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>

          <b-dropdown text="Auto close outside" class="m-2" auto-close="outside">
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <div>
        <h4 class="m-2">Block</h4>
        <b-dropdown text="Block" class="m-2" block variant="primary">
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>
      </div>
      <div>
        <h4 class="m-2">Custom popper config</h4>
        <b-dropdown
          text="Open up, offset & no flip"
          class="m-2"
          variant="success"
          :popper-opts="{
            placement: 'top-end',
            modifiers: [
              {
                name: 'flip',
                options: {
                  fallbackPlacements: [],
                },
              },
              {
                name: 'offset',
                options: {
                  offset: [20, 30],
                },
              },
            ],
          }"
        >
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>
      </div>
      <div>
        <h4 class="m-2">Custom Button Icon</h4>
        <b-dropdown text="Custom Button Icon" no-caret class="m-2" variant="link">
          <template #button-content>
            <img src="./assets/logo.png" style="height: 1em" />
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <!-- Cards -->
    <div class="my-2">
      <h2 class="my-3">Cards</h2>
      <b-row>
        <b-col>
          <b-card
            no-body
            style="max-width: 20rem"
            img-src="https://placekitten.com/380/200"
            img-alt="Image"
            img-top
          >
            <template #header>
              <h4 class="mb-0">Hello World</h4>
            </template>

            <b-card-body>
              <b-card-title>Card Title</b-card-title>
              <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </b-card-text>
            </b-card-body>

            <b-list-group flush>
              <b-list-group-item>Cras justo odio</b-list-group-item>
              <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>

            <b-card-body>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </b-card-body>

            <b-card-footer>This is a footer</b-card-footer>

            <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom />
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col cols="6">
          <b-card no-body class="overflow-hidden" style="max-width: 540px">
            <b-row class="g-0">
              <b-col md="6">
                <b-card-img
                  src="https://picsum.photos/400/400/?image=20"
                  alt="Image"
                  class="rounded-0"
                />
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional
                    content. This content is a little bit longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>

    <!-- Tabs -->
    <div class="my-2">
      <h2 class="my-3">Tabs</h2>
      <div>
        <b-tabs v-model="tabIndex" small>
          <b-tab title="First">
            <p>I'm the first tab</p>
          </b-tab>
          <b-tab title="Second">
            <p>I'm the second tab</p>
          </b-tab>
          <b-tab title="Third" disabled>
            <p>I'm a disabled tab!</p>
          </b-tab>
          <b-tab title="Fourth" disabled>
            <p>I'm a disabled tab!</p>
          </b-tab>
          <b-tab title="Fifth">
            <p>I'm the fifth tab</p>
          </b-tab>
          <b-tab title="Sixth" :disabled="true">
            <p>I'm a disabled tab!</p>
          </b-tab>
        </b-tabs>

        <div class="text-center">
          <b-button-group class="mt-2">
            <b-button @click="tabIndex--">Previous</b-button>
            <b-button @click="tabIndex++">Next</b-button>
          </b-button-group>

          <div class="text-muted">Current Tab: {{ tabIndex }}</div>
        </div>
      </div>
      <div>
        <h4 class="my-3">Tabs with custom title</h4>
        <b-tabs>
          <b-tab active>
            <template #title>
              <b-spinner type="grow" small></b-spinner>I'm
              <i>custom</i>
              <strong>title</strong>
            </template>
            <p class="p-3">Tab contents 1</p>
          </b-tab>

          <b-tab>
            <template #title> <b-spinner type="border" small></b-spinner>Tab 2 </template>
            <p class="p-3">Tab contents 2</p>
          </b-tab>
        </b-tabs>
      </div>
    </div>

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
          <b-row align-h="md-center">
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

    <!-- Alerts -->
    <div class="my-2">
      <h2>Alerts</h2>
      <b-alert variant="primary" show>A simple primary alert—check it out!</b-alert>
      <b-alert variant="warning" show dismissible>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      </b-alert>
    </div>

    <!-- Avatars -->
    <div class="my-2">
      <div>
        <h2>Avatars</h2>
        <b-avatar button class="me-1" icon="person-fill" variant="secondary" />
        <b-avatar button class="me-1" text="BV" />
        <b-avatar button class="me-5" src="https://placekitten.com/300/300" />

        <b-avatar class="me-2" icon="person-fill" size="sm" square />
        <b-avatar class="me-2" icon="person-fill" variant="success" rounded />
        <b-avatar class="me-5" icon="person-fill" variant="warning" size="lg" />

        <b-avatar class="me-2" text="ED" size="sm" square text-variant="dark" />
        <b-avatar class="me-2" text="ED" variant="success" rounded />
        <b-avatar class="me-5" text="ED" variant="warning" text-variant="danger" size="lg" />

        <b-avatar class="me-2" src="https://placekitten.com/300/300" button size="sm" square />
        <b-avatar class="me-2" src="https://placekitten.com/300/300" button rounded />
        <b-avatar class="me-5" src="https://placekitten.com/300/300" button size="lg" />

        <b-avatar class="me-2" size="lg">
          <span class="fw-bold">custom</span>
        </b-avatar>
      </div>
    </div>

    <!-- Image -->
    <div class="my-2">
      <h2>Image</h2>

      <div>
        <h4>
          Small image with
          <code>fluid</code>:
        </h4>
        <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image" />
      </div>
      <div>
        <h4 class="my-3">
          Small image with
          <code>fluid-grow</code>:
        </h4>
        <b-img src="https://picsum.photos/300/150/?image=41" fluid-grow alt="Fluid-grow image" />
      </div>
      <div>
        <h4>Rounded</h4>
        <div class="row">
          <div class="col-1">true</div>
          <div class="col-1">top</div>
          <div class="col-1">right</div>
          <div class="col-1">bottom</div>
          <div class="col-1">start</div>
          <div class="col-1">circle</div>
          <div class="col-1">0</div>
        </div>
        <div class="row">
          <div class="col-1">
            <b-img
              v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
              rounded
              alt="Rounded image"
            />
          </div>
          <div class="col-1">
            <b-img
              v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
              rounded="top"
              alt="Top-rounded image"
            />
          </div>
          <div class="col-1">
            <b-img
              v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
              rounded="end"
              alt="Right-rounded image"
            />
          </div>
          <div class="col-1">
            <b-img
              v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
              rounded="bottom"
              alt="Bottom-rounded image"
            />
          </div>
          <div class="col-1">
            <b-img
              v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
              rounded="start"
              alt="Left-rounded image"
            />
          </div>
          <div class="col-1">
            <b-img
              v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
              rounded="circle"
              alt="Circle image"
            />
          </div>
          <div class="col-1">
            <b-img
              v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
              rounded="0"
              alt="Not rounded image"
            />
          </div>
        </div>
      </div>
      <div>
        <h4>Thumbnail</h4>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
      </div>
      <div>
        <h4>Position</h4>
        <b-img center src="https://picsum.photos/125/125/?image=58" alt="Center image" />
        <div class="clearfix">
          <b-img left src="https://picsum.photos/125/125/?image=58" alt="Left image" />
          <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" />
        </div>
      </div>

      <div>
        <h4>Blank Color</h4>
        <b-img v-bind="{blank: true, width: 75, height: 75, class: 'm1'}" alt="Transparent image" />
        <b-img
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="#777"
          alt="HEX shorthand color image (#777)"
        />
        <b-img
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="red"
          alt="Named color image (red)"
        />
        <b-img
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="black"
          alt="Named color image (black)"
        />
        <b-img
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="#338833"
          alt="HEX color image"
        />
        <b-img
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="rgba(128, 255, 255, 0.5)"
          alt="RGBa color image"
        />
        <b-img
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="#88f"
          alt="HEX shorthand color (#88f)"
        />
      </div>
    </div>

    <!-- Breadcrumb -->
    <div class="my-2">
      <h2>Breadcrumb</h2>
      <b-breadcrumb />
    </div>

    <!-- Table -->
    <div class="my-2">
      <h2>Table</h2>
      <div>
        <h4 class="my-3">Table without field definitions</h4>
        <b-table responsive="xs" caption="List of users" :items="items" striped hover foot-clone>
          <template #cell(first_name)="data">
            <a href="#">{{ data.value }}</a>
          </template>
        </b-table>
      </div>
      <div>
        <h4 class="my-3">Table with string field definitions</h4>
        <b-table
          responsive="xs"
          caption="List of users"
          :items="items"
          :fields="stringTableDefinitions"
          striped
          hover
          foot-clone
        >
          <template #cell(first_name)="data">
            <a href="#">{{ data.value }}</a>
          </template>
        </b-table>
      </div>
      <div>
        <h4 class="my-3">Table with object field definitions</h4>

        <b-table
          responsive="xs"
          caption="List of users"
          :items="items"
          :fields="objectTableDefinitions"
          striped
          hover
          foot-clone
        >
          <template #cell(first_name)="data">
            <a href="#">{{ data.value }}</a>
          </template>
        </b-table>
      </div>
      <div>
        <h4 class="my-3">Table: Adding additional rows to the header</h4>

        <b-table
          responsive="xs"
          caption="List of users"
          :items="items"
          :fields="objectTableDefinitions"
          striped
          hover
          foot-clone
          dark
        >
          <template #thead-top>
            <tr class="my">
              <th colspan="2">
                <span class="sr-only">List of users</span>
              </th>
            </tr>
          </template>
          <template #thead-sub="{key, label}">
            <tr class="my">
              <th variant="danger" />
              <th variant="danger">
                <b-form-select :placeholder="label" :options="[label, key]" label-field="label" />
              </th>
            </tr>
          </template>
          <template #cell(first_name)="data">
            <a href="#">{{ data.value }}</a>
          </template>
        </b-table>
      </div>
    </div>

    <!-- Accordion -->
    <div class="my-2">
      <h2 id="content" class="bd-title">Accordion</h2>
      <p class="bd-lead">
        Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
      </p>

      <b-card no-body title="holaprop" sub-title="sdf" header="hola" footer="chau">
        <template #footer>
          <em>Footer Slot</em>
        </template>

        <b-card-body>
          <b-card-title>Card title</b-card-title>
          <b-card-sub-title>Card subtitle</b-card-sub-title>
        </b-card-body>
        <b-accordion flush>
          <b-accordion-item id="iddddd" title="Accordion Item #1" visible>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </b-accordion-item>

          <b-accordion-item title="Accordion Item #2">
            <strong>This is the second item's accordion body.</strong> It is hidden by default,
            until the collapse plugin adds the appropriate classes that we use to style each
            element. These classes control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or overriding our
            default variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </b-accordion-item>

          <b-accordion-item title="Accordion Item #3">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the
            <code>.accordion-body</code>, though the transition does limit overflow.
          </b-accordion-item>
        </b-accordion>
      </b-card>
    </div>

    <!-- Carousel -->
    <div class="my-2">
      <h2>Carousel</h2>

      <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          active
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        />

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58" />

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template #img>
            <img
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis,
            tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>

      <details class="accordion-item">
        <summary class="accordion-header">
          <div class="details-button">Accordion Item #1</div>
        </summary>
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until
          the collapse plugin adds the appropriate classes that we use to style each element. These
          classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </details>
    </div>

    <!-- Modal -->
    <div class="my-2">
      <h2>Modal</h2>
      <b-button @click="showModal = !showModal">Toggle modal v-model</b-button>
      {{ showModal }}
      <!-- <b-button v-b-modal:exampleModal>Launch demo modal</b-button> -->
      <b-modal id="exampleModal" v-model="showModal" size="xl" title="Modal title" fade
        >...</b-modal
      >
    </div>

    <!-- <b-nav pills>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item-dropdown
      id="my-nav-dropdown"
      text="Dropdown"
      toggle-class="nav-link-custom"
      right
    >
      <b-dropdown-item>One</b-dropdown-item>
      <b-dropdown-item>Two</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item>Three</b-dropdown-item>
    </b-nav-item-dropdown>
    </b-nav>-->

    <!-- Tooltip -->
    <div class="my-2">
      <h2>Tooltip</h2>
      <div class="d-flex gap-2">
        <b-button v-b-tooltip.top :title="tooltip">Tooltip on top</b-button>
        <b-button @click="setTooltip">Change tooltip</b-button>
        <b-button v-b-tooltip.left title="Tooltip on left">Tooltip on left</b-button>
        <b-button v-b-tooltip.right.click title="Tooltip on right">Tooltip on right</b-button>
        <b-button v-b-tooltip.bottom title="Tooltip on bottom">Tooltip on bottom</b-button>
      </div>
    </div>

    <!-- Popover -->
    <div class="my-2">
      <h2>Popover</h2>
      <div class="d-flex gap-2">
        <b-button id="popover-target-1">Hover Me</b-button>
        <b-popover target="popover-target-1" triggers="hover" placement="top">
          <template #title>
            Popover
            <em>Title</em>
            - {{ popoverInput }}
          </template>
          <b-button @click="consoleLog">456</b-button>I am popover <b>component</b> content!
          <b-form-input v-model="popoverInput" type="text" />Name:
          <strong>{{ popoverInput }}</strong>
        </b-popover>
        <button
          v-b-popover.top="'And here\'s some amazing content. It\'s very engaging. Right?'"
          type="button"
          class="btn btn-lg btn-danger"
          title="Popover title"
        >
          Click to toggle popover
        </button>
        <button
          v-b-popover.left="'I\'m another popover!'"
          type="button"
          class="btn btn-lg btn-success"
          title="Popover title 2"
        >
          Click to toggle popover
        </button>
        <b-button ref="popoverRef">Click to toggle popover by ref with ref container</b-button>
        <div ref="popoverContainerRef"></div>
        <b-popover :container="popoverContainerRef" :target="popoverRef" placement="bottom">
          <template #title>
            Popover
            <em>Title</em>
            - {{ popoverInput }}
          </template>
          <b-button @click="consoleLog">456</b-button>I am popover <b>component</b> content!
          <b-form-input v-model="popoverInput" type="text" />Name:
          <strong>{{ popoverInput }}</strong>
        </b-popover>
      </div>
    </div>

    <!-- Pagination -->
    <div class="my-2">
      <h2>Pagination</h2>
      <div class="d-flex">
        <b-pagination
          v-model="paginationPageNumber"
          :limit="paginationLimit"
          :total-rows="paginationRows"
          :per-page="paginationPerPage"
          first-number
          last-number
          @page-click="handlePaginationPageClick"
        ></b-pagination>
        <span class="mx-3">Select page 7 is prevented</span>
      </div>
      <b-pagination
        v-model="paginationPageNumber"
        :limit="paginationLimit"
        :total-rows="paginationRows"
        :per-page="paginationPerPage"
      ></b-pagination>
      <b-pagination
        v-model="paginationPageNumber"
        :limit="paginationLimit"
        :total-rows="paginationRows"
        :per-page="paginationPerPage"
        prev-text="Prev"
        next-text="Next"
        first-text="First"
        last-text="Last"
      ></b-pagination>
      <b-pagination
        v-model="paginationPageNumber"
        :total-rows="paginationRows"
        :per-page="paginationPerPage"
        class="mt-4"
      >
        <template #first-text>
          <span class="text-success">First</span>
        </template>
        <template #prev-text>
          <span class="text-danger">Prev</span>
        </template>
        <template #next-text>
          <span class="text-warning">Next</span>
        </template>
        <template #last-text>
          <span class="text-info">Last</span>
        </template>
        <template #ellipsis-text>
          <b-spinner small type="grow"></b-spinner>
          <b-spinner small type="grow"></b-spinner>
          <b-spinner small type="grow"></b-spinner>
        </template>
        <template #page="{page, active}">
          <b v-if="active">{{ page }}</b>
          <i v-else>{{ page }}</i>
        </template>
      </b-pagination>
      <b-pagination
        v-model="paginationPageNumber"
        :limit="paginationLimit"
        :total-rows="paginationRows"
        :per-page="paginationPerPage"
        prev-text="Prev"
        next-text="Next"
        :first-class="paginationDangerClasses"
        first-text="First"
        last-text="Last"
        last-class="border border-4 border-info"
        ellipsis-class="border border-3 border-success"
      ></b-pagination>
      <div class="overflow-auto">
        <b-pagination
          v-model="paginationPageNumber"
          :limit="paginationLimit"
          :total-rows="paginationRows"
          :per-page="paginationPerPage"
          prev-text="Prev"
          next-text="Next"
          first-text="First"
          last-text="Last"
          align="end"
        ></b-pagination>
      </div>
      Current page : {{ paginationPageNumber }}
      <div>
        <button class="btn btn-primary" @click="paginationPageNumber = 4">Set to page 4</button>
      </div>
    </div>

    <!-- Overlay -->
    <div class="my-2">
      <h2>Overlay</h2>
      <div>
        <b-overlay :show="showOverlay" rounded="sm">
          <b-card title="Card with overlay" :aria-hidden="showOverlay ? 'true' : null">
            <b-card-text>Laborum consequat non elit enim exercitation cillum.</b-card-text>
            <b-card-text>Click the button to toggle the overlay:</b-card-text>
            <b-button :disabled="showOverlay" variant="primary" @click="showOverlay = true"
              >Show overlay</b-button
            >
          </b-card>
        </b-overlay>
        <b-button class="mt-3" @click="showOverlay = !showOverlay">Toggle overlay</b-button>
      </div>
    </div>

    <!-- List Group -->
    <div class="my-2">
      <h2>List Group</h2>
      <div>
        <b-list-group>
          <b-list-group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Morbi leo risus</b-list-group-item>
          <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
          <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
      </div>
    </div>

    <p></p>
    <b-button v-model:pressed="buttonIsPressed" variant="primary" class="mt-3">Toggle Me</b-button>
    <p>
      Pressed State:
      <strong>{{ buttonIsPressed }}</strong>
    </p>

    <p />
    <div>
      <div v-b-visible.once="handleVisible">Handle Visible Test</div>
      <div v-if="handledVisible">This should only show if handleVisible was triggered</div>
    </div>

    <b-toast v-model="showToast" title="Hello" body="cow"></b-toast>
    <b-button class="mt-3" @click="createToast()">Show Toast</b-button>
    <b-button class="mt-3" @click="createToast2()">Show Toast 2</b-button>

    <b-button class="mt-3" @click="consoleLog">Hide Toast</b-button>
    <div id="demo"></div>
  </b-container>
</template>

<script lang="ts">
import {
  ComponentPublicInstance,
  computed,
  defineComponent,
  h,
  inject,
  onMounted,
  reactive,
  ref,
} from 'vue'
import {useBreadcrumb} from './composables/useBreadcrumb'
import TableField from './types/TableField'
import {BvEvent} from './utils/bvEvent'
import {ToastInstance, useToast} from './components/BToast/plugin'

export default defineComponent({
  name: 'App',
  setup() {
    inject('toast')
    const value = ref(['apple', 'orange'])
    const state = computed(() => value.value.length > 2 && value.value.length < 9)
    const loading = ref(false)
    const password = ref('123')
    const showPassword = ref(false)
    const description = ref('This is a description')
    const input = ref()
    const tooltip = ref('Tooltip on <em>top</em>')
    const setTooltip = () => (tooltip.value = `${new Date()} <strong>fechaaa</strong>`)
    const showModal = ref(false)
    const city = ref('')
    const breadcrumb = useBreadcrumb()
    const collapse = ref(false)
    const offcanvas = ref(false)
    const container = ref(null)
    const showToast = ref(true)
    const tableItems = [
      {age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
      {age: 21, first_name: 'Larsen', last_name: 'Shaw'},
      {age: 89, first_name: 'Geneva', last_name: 'Wilson'},
      {
        age: 89,
        first_name: 'Michael',
        last_name: 'Jordan',
        _rowVariant: 'primary',
        _cellVariants: {last_name: 'danger'},
      },
      {age: 38, first_name: 'Jami', last_name: 'Carney'},
    ]
    const stringTableDefinitions = ref(['last_name', 'first_name', 'age'])
    const objectTableDefinitions = ref<TableField[]>([
      {key: 'last_name', label: 'Family name'},
      {key: 'first_name', label: 'Given name'},
    ])

    const name = ref('')
    const popoverInput = ref('foo')
    const popoverRef = ref<ComponentPublicInstance<HTMLButtonElement>>()
    const popoverContainerRef = ref<HTMLButtonElement>()

    const consoleLog = () => console.log('Button Click!')
    const checkedDefault = ref(false)
    const checkedButton = ref(false)
    const checkedRequired = ref(false)
    const checkedIndeterminate = ref(false)
    const checkedString = ref('incorrect')
    const checkedPlain = ref(false)
    const checkedAvailableCars = ['BMW', 'Mercedes', 'Toyota']
    const checkedSelectedCars = ref<string[]>([])
    const setCheckedSelectedCars = () => {
      checkedSelectedCars.value = ['Mercedes', 'Toyota']
    }
    const checkboxes = reactive({
      status: 'accepted',
      selected: ['pineapple'],
      options: [
        {text: 'Orange', value: 'orange'},
        {text: 'Apple', value: 'apple'},
        {text: 'Pineapple', value: 'pineapple'},
        {html: '<b>Grape</b> (html content)', value: 'grape'},
      ],
    })

    const radioDefault = ref(false)
    const radioButton = ref(false)
    const radioRequired = ref(false)
    const radioIndeterminate = ref(false)
    const radioString = ref('incorrect')
    const radioPlain = ref(false)
    const radioAvailableCars = ['BMW', 'Mercedes', 'Toyota']
    const radioSelectedCars = ref([])
    const radioSelected = ref()
    const radios = reactive({
      ex1: {
        selected: 'first',
        options: [
          {text: 'Toggle this custom radio', value: 'first'},
          {text: 'Or toggle this other custom radio', value: 'second'},
          {text: 'This one is Disabled', value: 'third', disabled: true},
          {text: 'This is the 4th radio', value: {fourth: 4}},
        ],
      },
      ex2: {
        selected: 'A',
        options: [
          {item: 'A', name: 'Option A'},
          {item: 'B', name: 'Option B'},
          {item: 'D', name: 'Option C', notEnabled: true},
          {item: {d: 1}, name: 'Option D'},
        ],
      },
      ex3: {
        selected: 'radio1',
        options: [
          {text: 'Radio 1', value: 'radio1'},
          {text: 'Radio 3', value: 'radio2'},
          {text: 'Radio 3 (disabled)', value: 'radio3', disabled: true},
          {text: 'Radio 4', value: 'radio4'},
        ],
      },
    })

    const paginationPageNumber = ref(19)
    const paginationLimit = ref(8)
    const paginationPerPage = ref(2)
    const paginationRows = ref(40)
    const paginationDangerClasses = ref(['border-danger', 'border-5', 'border'])

    const showOverlay = ref(false)

    const tabIndex = ref(1)

    const formInputRangeValue = ref(3)

    const formSelectSelected = ref()
    let formSelectMultipleSelected = ref([])
    formSelectMultipleSelected = ['first', 'second']
    const formSelectOptions = [
      {value: null, text: 'Please select an option'},
      {text: 'Item 1', value: 'first'},
      {text: 'Item 2', value: 'second'},
      {html: '<b>Item</b> 3', value: 'third', disabled: true},
      {text: 'Item 4'},
      {text: 'Item 5', value: {foo: 'bar', baz: true}},
      {
        label: 'Grouped options',
        options: [
          {value: {C: '3PO'}, text: 'Option with object value'},
          {value: {R: '2D2'}, text: 'Another option with object value'},
        ],
      },
    ]

    const handledVisible = ref(false)
    const buttonIsPressed = ref(false)

    const c: ToastInstance | undefined = useToast()
    onMounted(() => {
      breadcrumb.items.push({
        text: 'Home',
        href: '/home',
      })

      breadcrumb.items.push({
        text: 'Hello',
      })
    })
    const handlePaginationPageClick = (event: BvEvent, page: number) => {
      if (page === 7) {
        event.preventDefault()
      }
    }

    const handleVisible = () => {
      handledVisible.value = true
    }

    const createToast = () => {
      c?.show({title: 'example title', body: h('div', 'cool Dynamic')}, {pos: 'bottom-right'})
    }

    const createToast2 = () => {
      c?.show({title: 'example title', body: h('div', 'cool Dynamic')})
    }

    function tagValidator(tag: string) {
      // Individual tag validator function
      return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6
    }

    function onTagState(valid: string[], invalid: string[], duplicate: string[]) {
      // console.log({
      //   valid,
      //   invalid,
      //   duplicate,
      // })
    }

    return {
      onTagState,
      tagValidator,
      value,
      state,
      loading,
      createToast,
      createToast2,
      password,
      showPassword,
      description,
      container,
      input,
      name,
      popoverInput,
      consoleLog,
      tooltip,
      setTooltip,
      showModal,
      city,
      collapse,
      offcanvas,
      items: tableItems,
      stringTableDefinitions,
      objectTableDefinitions,
      checkedDefault,
      checkedButton,
      checkedRequired,
      checkedIndeterminate,
      checkedString,
      checkedPlain,
      checkedAvailableCars,
      checkedSelectedCars,
      checkboxes,
      handlePaginationPageClick,
      paginationPageNumber,
      paginationLimit,
      paginationPerPage,
      paginationRows,
      paginationDangerClasses,
      popoverRef,
      popoverContainerRef,
      setCheckedSelectedCars,
      showToast,
      radioDefault,
      radioButton,
      radioRequired,
      radioIndeterminate,
      radioString,
      radioPlain,
      radioSelected,
      radioAvailableCars,
      radioSelectedCars,
      radios,
      showOverlay,
      tabIndex,
      formInputRangeValue,
      formSelectSelected,
      formSelectMultipleSelected,
      formSelectOptions,
      handleVisible,
      handledVisible,
      buttonIsPressed,
    }
  },
})
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
