<template>
  <!-- #region template -->
  <BTableSimple
    hover
    small
    caption-top
    stacked
  >
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
    <BThead variant="dark">
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
        <BTh
          rowspan="3"
          class="text-center"
          >Belgium (3 Cities)</BTh
        >
        <BTh
          stacked-heading="City"
          class="text-start"
          >Antwerp</BTh
        >
        <BTd stacked-heading="Clothes: Trousers">56</BTd>
        <BTd stacked-heading="Clothes: Skirts">22</BTd>
        <BTd stacked-heading="Clothes: Dresses">43</BTd>
        <BTd
          stacked-heading="Accessories: Bracelets"
          variant="success"
          >72</BTd
        >
        <BTd stacked-heading="Accessories: Rings">23</BTd>
      </BTr>
      <BTr>
        <BTh stacked-heading="City">Gent</BTh>
        <BTd stacked-heading="Clothes: Trousers">46</BTd>
        <BTd
          stacked-heading="Clothes: Skirts"
          variant="warning"
          >18</BTd
        >
        <BTd stacked-heading="Clothes: Dresses">50</BTd>
        <BTd stacked-heading="Accessories: Bracelets">61</BTd>
        <BTd
          stacked-heading="Accessories: Rings"
          variant="danger"
          >15</BTd
        >
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
        <BTh
          rowspan="2"
          class="text-center"
          >The Netherlands (2 Cities)</BTh
        >
        <BTh stacked-heading="City">Amsterdam</BTh>
        <BTd
          stacked-heading="Clothes: Trousers"
          variant="success"
          >89</BTd
        >
        <BTd stacked-heading="Clothes: Skirts">34</BTd>
        <BTd stacked-heading="Clothes: Dresses">69</BTd>
        <BTd stacked-heading="Accessories: Bracelets">85</BTd>
        <BTd stacked-heading="Accessories: Rings">38</BTd>
      </BTr>
      <BTr>
        <BTh stacked-heading="City">Utrecht</BTh>
        <BTd stacked-heading="Clothes: Trousers">80</BTd>
        <BTd
          stacked-heading="Clothes: Skirts"
          variant="danger"
          >12</BTd
        >
        <BTd stacked-heading="Clothes: Dresses">43</BTd>
        <BTd stacked-heading="Accessories: Bracelets">36</BTd>
        <BTd
          stacked-heading="Accessories: Rings"
          variant="warning"
          >19</BTd
        >
      </BTr>
    </BTbody>
    <BTfoot>
      <BTr>
        <BTd
          colspan="7"
          variant="secondary"
          class="text-end"
        >
          Total Rows: <b>5</b>
        </BTd>
      </BTr>
    </BTfoot>
  </BTableSimple>
  <!-- #endregion template -->
</template>
