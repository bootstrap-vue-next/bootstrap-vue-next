<template>
  <b-container fluid>
    <b-row>
      <b-col>
        Small image with
        <code>fluid</code>:
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image" />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h4 class="my-3">
          Small image with
          <code>fluid-grow</code>:
        </h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-img src="https://picsum.photos/300/150/?image=41" fluid-grow alt="Fluid-grow image" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Rounded</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>true</b-col>
      <b-col>top</b-col>
      <b-col>right</b-col>
      <b-col>bottom</b-col>
      <b-col>start</b-col>
      <b-col>circle</b-col>
      <b-col>0</b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-img
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded
          alt="Rounded image"
        />
      </b-col>
      <b-col>
        <b-img
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded="top"
          alt="Top-rounded image"
        />
      </b-col>
      <b-col>
        <b-img
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded="end"
          alt="Right-rounded image"
        />
      </b-col>

      <b-col>
        <b-img
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded="bottom"
          alt="Bottom-rounded image"
        />
      </b-col>
      <b-col>
        <b-img
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded="start"
          alt="Left-rounded image"
        />
      </b-col>
      <b-col>
        <b-img
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded="circle"
          alt="Circle image"
        />
      </b-col>
      <b-col>
        <b-img
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded="0"
          alt="Not rounded image"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Thumbnail</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h4>Position</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-img center src="https://picsum.photos/125/125/?image=58" alt="Center image" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="clearfix">
          <b-img left src="https://picsum.photos/125/125/?image=58" alt="Left image" />
          <b-img right src="https://picsum.photos/125/125/?image=58" alt="Right image" />
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <h4>Blank Color</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-img v-bind="{blank: true, width: 75, height: 75, class: 'm1'}" alt="Transparent image" />
      </b-col>
      <b-col>
        <b-img
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="#777"
          alt="HEX shorthand color image (#777)"
        />
      </b-col>
      <b-col>
        <b-img
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="red"
          alt="Named color image (red)"
        />
      </b-col>
      <b-col>
        <b-img
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="black"
          alt="Named color image (black)"
        />
      </b-col>
      <b-col>
        <b-img
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="#338833"
          alt="HEX color image"
        />
      </b-col>
      <b-col>
        <b-img
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="rgba(128, 255, 255, 0.5)"
          alt="RGBa color image"
        />
      </b-col>
      <b-col>
        <b-img
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="#88f"
          alt="HEX shorthand color (#88f)"
        />
      </b-col>
    </b-row>
  </b-container>
</template>
