<template>
  <BContainer fluid>
    <BRow>
      <BCol>
        Small image with
        <code>fluid</code>:
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BImg src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image" />
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h4 class="my-3">
          Small image with
          <code>fluid-grow</code>:
        </h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BImg src="https://picsum.photos/300/150/?image=41" fluid-grow alt="Fluid-grow image" />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4>Rounded</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>true</BCol>
      <BCol>top</BCol>
      <BCol>right</BCol>
      <BCol>bottom</BCol>
      <BCol>start</BCol>
      <BCol>circle</BCol>
      <BCol>0</BCol>
    </BRow>
    <BRow>
      <BCol>
        <BImg
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded
          alt="Rounded image"
        />
      </BCol>
      <BCol>
        <BImg
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded="top"
          alt="Top-rounded image"
        />
      </BCol>
      <BCol>
        <BImg
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded="end"
          alt="Right-rounded image"
        />
      </BCol>

      <BCol>
        <BImg
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded="bottom"
          alt="Bottom-rounded image"
        />
      </BCol>
      <BCol>
        <BImg
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded="start"
          alt="Left-rounded image"
        />
      </BCol>
      <BCol>
        <BImg
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded="circle"
          alt="Circle image"
        />
      </BCol>
      <BCol>
        <BImg
          v-bind="{blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}"
          rounded="0"
          alt="Not rounded image"
        />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h4>Thumbnail</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BImg thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h4>Position</h4>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <BImg center src="https://picsum.photos/125/125/?image=58" alt="Center image" />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <div class="clearfix">
          <BImg left src="https://picsum.photos/125/125/?image=58" alt="Left image" />
          <BImg right src="https://picsum.photos/125/125/?image=58" alt="Right image" />
        </div>
      </BCol>
    </BRow>

    <BRow>
      <BCol>
        <h4>Blank Color</h4>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BImg v-bind="{blank: true, width: 75, height: 75, class: 'm1'}" alt="Transparent image" />
      </BCol>
      <BCol>
        <BImg
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="#777"
          alt="HEX shorthand color image (#777)"
        />
      </BCol>
      <BCol>
        <BImg
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="red"
          alt="Named color image (red)"
        />
      </BCol>
      <BCol>
        <BImg
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="black"
          alt="Named color image (black)"
        />
      </BCol>
      <BCol>
        <BImg
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="#338833"
          alt="HEX color image"
        />
      </BCol>
      <BCol>
        <BImg
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="rgba(128, 255, 255, 0.5)"
          alt="RGBa color image"
        />
      </BCol>
      <BCol>
        <BImg
          v-bind="{blank: true, width: 75, height: 75, class: 'm1'}"
          blank-color="#88f"
          alt="HEX shorthand color (#88f)"
        />
      </BCol>
    </BRow>
  </BContainer>
</template>
