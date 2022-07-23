<template>
  <div class="my-2">
    <h2>Image</h2>

    <div>
      <h4>
        Small image with
        <code>fluid</code>:
      </h4>
      <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image" />
    </div>
    <div>
      <h4 class="my-3">
        Small image with
        <code>fluid-grow</code>:
      </h4>
      <b-img src="https://picsum.photos/300/150/?image=41" fluid-grow alt="Fluid-grow image" />
    </div>
    <div>
      <h4>Rounded</h4>
      <div class="row">
        <div class="col-1">true</div>
        <div class="col-1">top</div>
        <div class="col-1">right</div>
        <div class="col-1">bottom</div>
        <div class="col-1">start</div>
        <div class="col-1">circle</div>
        <div class="col-1">0</div>
      </div>
      <div class="row">
        <div class="col-1">
          <b-img
            v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
            rounded
            alt="Rounded image"
          />
        </div>
        <div class="col-1">
          <b-img
            v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
            rounded="top"
            alt="Top-rounded image"
          />
        </div>
        <div class="col-1">
          <b-img
            v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
            rounded="end"
            alt="Right-rounded image"
          />
        </div>
        <div class="col-1">
          <b-img
            v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
            rounded="bottom"
            alt="Bottom-rounded image"
          />
        </div>
        <div class="col-1">
          <b-img
            v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
            rounded="start"
            alt="Left-rounded image"
          />
        </div>
        <div class="col-1">
          <b-img
            v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
            rounded="circle"
            alt="Circle image"
          />
        </div>
        <div class="col-1">
          <b-img
            v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
            rounded="0"
            alt="Not rounded image"
          />
        </div>
      </div>
    </div>
    <div>
      <h4>Thumbnail</h4>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
    </div>
    <div>
      <h4>Position</h4>
      <b-img center src="https://picsum.photos/125/125/?image=58" alt="Center image" />
      <div class="clearfix">
        <b-img left src="https://picsum.photos/125/125/?image=58" alt="Left image" />
        <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" />
      </div>
    </div>

    <div>
      <h4>Blank Color</h4>
      <b-img v-bind="{blank: true, width: 75, height: 75, class: 'm1'}" alt="Transparent image" />
      <b-img
        v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
        blank-color="#777"
        alt="HEX shorthand color image (#777)"
      />
      <b-img
        v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
        blank-color="red"
        alt="Named color image (red)"
      />
      <b-img
        v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
        blank-color="black"
        alt="Named color image (black)"
      />
      <b-img
        v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
        blank-color="#338833"
        alt="HEX color image"
      />
      <b-img
        v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
        blank-color="rgba(128, 255, 255, 0.5)"
        alt="RGBa color image"
      />
      <b-img
        v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
        blank-color="#88f"
        alt="HEX shorthand color (#88f)"
      />
    </div>
  </div>
</template>
