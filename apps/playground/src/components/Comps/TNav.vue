<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h4 class="my-3">Nav with a dropdown</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-nav pills>
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
            <b-dropdown-divider />
            <b-dropdown-item>Three</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="m-2">Nav with a dropdown and a custom Button Icon</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-nav pills>
          <b-nav-item active>Active</b-nav-item>
          <b-nav-item>Link</b-nav-item>
          <b-nav-item-dropdown text="Custom Button Icon" no-caret variant="link">
            <template #button-content>
              <img src="../../assets/logo.png" style="height: 1em" />
            </template>
            <b-dropdown-item href="#">Action</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </b-col>
    </b-row>
  </b-container>
</template>
