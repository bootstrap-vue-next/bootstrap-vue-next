<template>
  <b-container>
    <b-carousel controls indicators>
      <b-carousel-slide active img-src="https://picsum.photos/1024/480/?image=30">
        <h1>First slide</h1>
        <p>Some more detailed description or whatever content.</p>
      </b-carousel-slide>

      <b-carousel-slide
        caption="Second slide"
        text="Does the same, just a bit differently."
        img-src="https://picsum.photos/1024/480/?image=31"
      />

      <b-carousel-slide>
        <template #img>
          <img
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=32"
            alt="image slot"
          />
        </template>
        <h1>Third slide</h1>
        <p>Constains a customized background image</p>
      </b-carousel-slide>

      <b-carousel-slide img-height="480px" img-blank img-blank-color="pink" img-alt="Blank image">
        <h1>Fourth slide</h1>
        <p>No background image</p>
      </b-carousel-slide>
    </b-carousel>

    <hr />

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://picsum.photos/1024/480/?image=1" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/1024/480/?image=2" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/1024/480/?image=3" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </b-container>
</template>

<script setup lang="ts">
// Implement things here
// TODO perhaps this should be more expanded like ./apps/playground
// Or it could be barebones for one a single component development cycle is required
// Create a discussion with your thoughts if you think it should be changed
</script>
