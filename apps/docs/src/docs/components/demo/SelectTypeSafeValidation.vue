<template>
  <!-- ✅ VALID: All fields exist on Product -->
  <BFormSelect
    id="select-type-safe-validation"
    v-model="selectedProduct"
    :options="products"
    value-field="productId"
    text-field="productName"
  />

  <!-- ❌ This would cause TypeScript errors (uncomment to test):
  <BFormSelect
    v-model="selectedProduct"
    :options="products"
    value-field="id"
    text-field="productName"
  />
  Error: Type '"id"' is not assignable to type 'keyof Product'
  -->

  <p class="mt-2">Selected Product ID: {{ selectedProduct }}</p>
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface Product {
  productId: number
  productName: string
  price: number
}

const products: Product[] = [
  {productId: 1, productName: 'Widget', price: 19.99},
  {productId: 2, productName: 'Gadget', price: 29.99},
]

const selectedProduct = ref<number>()
</script>
