<template>
  <!-- #region template -->
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
        <BTd colspan="7" variant="secondary" class="text-end"> Total Rows: <b>5</b> </BTd>
      </BTr>
    </BTfoot>
  </BTableSimple>
  <!-- #endregion template -->
</template>
