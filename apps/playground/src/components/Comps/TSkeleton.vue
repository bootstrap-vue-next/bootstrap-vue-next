<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h5>Text (default)</h5>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-skeleton />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h5 class="mt-3">Avatar</h5>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-skeleton type="avatar" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h5 class="mt-3">Input</h5>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-skeleton type="input" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h5 class="mt-3">Button</h5>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-skeleton type="button" />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h5>Wave (default)</h5>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <b-skeleton animation="wave" width="85%" />
          <b-skeleton animation="wave" width="55%" />
          <b-skeleton animation="wave" width="70%" />
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h5 class="mt-3">Fade</h5>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <b-skeleton animation="fade" width="85%" />
          <b-skeleton animation="fade" width="55%" />
          <b-skeleton animation="fade" width="70%" />
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h5 class="mt-3">Throb</h5>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <b-skeleton animation="throb" width="85%" />
          <b-skeleton animation="throb" width="55%" />
          <b-skeleton animation="throb" width="70%" />
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h5 class="mt-3">None</h5>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <b-skeleton animation width="85%" />
          <b-skeleton animation width="55%" />
          <b-skeleton animation width="70%" />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
