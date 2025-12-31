<template>
  <div>
    <h6>User Selection</h6>
    <BFormRadioGroup
      v-model="selectedUser"
      :options="users"
      value-field="userId"
      text-field="displayName"
      disabled-field="isInactive"
      name="user-radios"
      class="mb-3"
    />
    <div class="mt-2">
      Selected User ID: <strong>{{ selectedUser }}</strong>
    </div>
    <div v-if="selectedUserDetails">
      Selected User: <strong>{{ selectedUserDetails.displayName }}</strong> ({{
        selectedUserDetails.email
      }})
    </div>

    <hr class="my-4" />

    <h6>Product Selection with Complex Values</h6>
    <BFormRadioGroup
      v-model="selectedProduct"
      :options="products"
      value-field="metadata"
      text-field="productName"
      disabled-field="outOfStock"
      name="product-radios"
      class="mb-3"
    />
    <div class="mt-2">
      Selected Product Metadata:
      <pre><code>{{ JSON.stringify(selectedProduct, null, 2) }}</code></pre>
    </div>

    <hr class="my-4" />

    <h6>Status Selection with Numeric IDs</h6>
    <BFormRadioGroup
      v-model="selectedStatus"
      :options="statuses"
      value-field="statusCode"
      text-field="statusLabel"
      disabled-field="disabled"
      name="status-radios"
    />
    <div class="mt-2">
      Selected Status Code: <strong>{{ selectedStatus }}</strong>
      <span v-if="selectedStatusDetails"> - {{ selectedStatusDetails.statusLabel }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'

// Define a strongly-typed User interface
interface User {
  userId: number
  displayName: string
  email: string
  isInactive: boolean
}

// Strongly-typed user options with custom field names
const users: User[] = [
  {userId: 101, displayName: 'Alice Johnson', email: 'alice@example.com', isInactive: false},
  {userId: 102, displayName: 'Bob Smith', email: 'bob@example.com', isInactive: false},
  {userId: 103, displayName: 'Charlie Brown', email: 'charlie@example.com', isInactive: true},
  {userId: 104, displayName: 'Diana Prince', email: 'diana@example.com', isInactive: false},
]

const selectedUser = ref<number>(101)

// Computed property to get full user details
const selectedUserDetails = computed(() => users.find((u) => u.userId === selectedUser.value))

// Define a Product interface with complex nested metadata
interface Product {
  productName: string
  metadata: {
    sku: string
    category: string
    price: number
  }
  outOfStock: boolean
}

const products: Product[] = [
  {
    productName: 'Wireless Mouse',
    metadata: {sku: 'WM-001', category: 'Electronics', price: 29.99},
    outOfStock: false,
  },
  {
    productName: 'USB Cable',
    metadata: {sku: 'UC-002', category: 'Accessories', price: 9.99},
    outOfStock: false,
  },
  {
    productName: 'Laptop Stand',
    metadata: {sku: 'LS-003', category: 'Furniture', price: 49.99},
    outOfStock: true,
  },
]

const selectedProduct = ref<Product['metadata']>(products[0].metadata)

// Define a Status interface with numeric status codes
interface Status {
  statusCode: number
  statusLabel: string
  disabled: boolean
}

const statuses: Status[] = [
  {statusCode: 100, statusLabel: 'Pending', disabled: false},
  {statusCode: 200, statusLabel: 'In Progress', disabled: false},
  {statusCode: 300, statusLabel: 'Completed', disabled: false},
  {statusCode: 400, statusLabel: 'Archived', disabled: true},
]

const selectedStatus = ref<number>(100)

const selectedStatusDetails = computed(() =>
  statuses.find((s) => s.statusCode === selectedStatus.value)
)
</script>
