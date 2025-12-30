<template>
  <!-- #region template -->
  <div>
    <BFormInput
      v-model="selectedProductCode"
      type="text"
      list="product-list"
      placeholder="Enter product code..."
    />
    <BFormDatalist
      id="product-list"
      :options="apiProducts"
      value-field="productCode"
      text-field="productName"
      disabled-field="discontinued"
    />
    <div class="mt-3">
      Selected: <strong>{{ selectedProductCode }}</strong>
    </div>
  </div>
  <!-- #endregion template -->
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface ApiProduct {
  productCode: string
  productName: string
  category: string
  discontinued?: boolean
}

// Simulated API response
const apiProducts: ApiProduct[] = [
  {productCode: 'PROD-001', productName: 'Widget A', category: 'Hardware'},
  {productCode: 'PROD-002', productName: 'Gadget B', category: 'Electronics'},
  {productCode: 'PROD-003', productName: 'Tool C', category: 'Hardware', discontinued: true},
]

// TypeScript knows selectedProductCode is a string (matching productCode field type)
const selectedProductCode = ref<string>()
</script>
