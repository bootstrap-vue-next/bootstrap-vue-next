<template>
  <BContainer>
    <BRow>
      <BCol>
        <b-navbar toggleable>
          <b-navbar-toggle :target="['navbar-toggle-collapse', 'foobar']">
            <template #default="{expanded}">
              {{ expanded }}
            </template>
          </b-navbar-toggle>

          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">Link 1</b-nav-item>
              <b-nav-item href="#">Link 2</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
          <b-collapse id="foobar" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">Link 1</b-nav-item>
              <b-nav-item href="#">Link 2</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// You can use this file as a development spot to test your changes
// Please do not commit this file
import {BCol, BCollapse, BContainer, BNavbarNav, BNavbarToggle, BNavItem, BRow} from './components'
</script>
