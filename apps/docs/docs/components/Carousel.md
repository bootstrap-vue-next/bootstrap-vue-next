# Carousel

## Basic usage

Note that one of the `b-carousel-slide` must be `active`. Otherwise the carousel will not work.

<ClientOnly>
  <b-carousel>
    <b-carousel-slide active img-src="https://picsum.photos/1024/480/?image=10" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
  </b-carousel>
</ClientOnly>

```html
  <b-carousel>
    <b-carousel-slide active img-src="https://picsum.photos/1024/480/?image=10" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11" />
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12" />
  </b-carousel>
```

## Carousel options

<ClientOnly>
  <b-carousel
    :interval="2000"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333"
    class="carousel-dark carousel-fade"
    >
      <b-carousel-slide active img-src="https://picsum.photos/1024/480/?image=20" />
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
  </b-carousel>
</ClientOnly>

```html
  <b-carousel
    :interval="2000"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333"
    class="carousel-dark carousel-fade"
    >
      <b-carousel-slide active img-src="https://picsum.photos/1024/480/?image=20" />
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=21" />
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22" />
  </b-carousel>
```

## Slide options

<ClientOnly>
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
</ClientOnly>

```html
  <b-carousel  
    controls
    indicators>

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
```

## Reference

<ClientOnly>
  <ComponentReference></ComponentReference>
</ClientOnly>
