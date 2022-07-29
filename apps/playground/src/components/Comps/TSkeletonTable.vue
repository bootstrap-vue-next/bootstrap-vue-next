<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-skeleton-table :rows="4" :columns="3" :table-props="{bordered: true, striped: true}" />
      </b-col>
    </b-row>
  </b-container>
</template>
