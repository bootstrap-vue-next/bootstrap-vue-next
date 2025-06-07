<template>
  <BContainer fluid="xxl">
    <BRow class="d-md-none"
      ><BCol>
        <BButton
          variant="link"
          underline-opacity="0"
          @click="showToc"
          >&lt; Table of Contents</BButton
        > </BCol
      ><BCol
        ><div class="text-end">
          <BButton
            variant="link"
            underline-opacity="0"
            @click="showOtp"
            >On this page &gt;</BButton
          >
        </div></BCol
      ></BRow
    >
    <BRow>
      <BCol
        md="2"
        class="scrollable-column"
      >
        <BOffcanvas
          v-model="tocVisible"
          placement="start"
          responsive="md"
        >
          <ul>
            <ul>
              <li
                v-for="item in toc"
                :key="item"
              >
                {{ item }}
              </li>
              <li>A very large entry in table of contents</li>
            </ul>
          </ul>
        </BOffcanvas>
      </BCol>
      <BCol md="8">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque imperdiet libero litora
        nisl condimentum ullamcorper. Convallis vel auctor morbi mauris lectus mi. Consequat urna
        tempus tristique id augue luctus. Quis ullamcorper faucibus laoreet dapibus elit. Habitant
        vulputate maecenas varius massa dui dolor augue. Dictum aliquam justo tempor integer
        placerat scelerisque per duis facilisis. Orci ex parturient fusce vestibulum quis euismod
        elementum habitasse. Vitae suscipit vehicula pellentesque massa facilisi erat dapibus. Urna
        torquent praesent eleifend lobortis nec ullamcorper dignissim eu? Neque scelerisque leo nisl
        duis taciti faucibus nam ut. Sit ultrices aenean magna nam cubilia lacus torquent? Eu purus
        posuere ad metus ultrices. Netus id hac lobortis vel habitant ad morbi finibus vulputate.
        Luctus pellentesque metus diam curae nostra praesent ullamcorper elit. Varius commodo
        scelerisque in libero magna senectus. Magnis dis metus penatibus finibus mattis velit. Leo
        imperdiet metus accumsan nascetur mus id. Torquent elementum natoque dictum risus non mollis
        euismod mauris mus. Lobortis aliquet class at scelerisque egestas at scelerisque condimentum
        tellus. Mollis consequat dui risus consequat ipsum, penatibus neque. Ultrices tristique sed
        parturient ex integer ac tristique fusce. Amet imperdiet condimentum enim semper proin
        lacinia. Montes in iaculis dui penatibus vulputate nulla; mauris venenatis. Malesuada metus
        luctus dictumst; ante sapien dis facilisi himenaeos. Finibus nibh ut est faucibus ut
        molestie. Magna nascetur imperdiet imperdiet; fringilla velit ac condimentum ullamcorper.
        Ornare arcu feugiat phasellus nisl morbi porta. Auctor praesent duis quam euismod maximus et
        varius. Parturient class proin tristique egestas consequat. Eleifend magna dictum aenean,
        sagittis diam gravida. Taciti nam donec fringilla commodo ullamcorper accumsan fames ante
        accumsan. Quis nulla porttitor blandit interdum vel scelerisque senectus. Odio lorem blandit
        aliquam tempor, eu egestas maecenas ligula. Commodo egestas maximus euismod eleifend natoque
        sagittis; viverra himenaeos. Vel dis justo odio conubia fringilla bibendum scelerisque dis.
        Lorem pulvinar dapibus porta viverra massa potenti laoreet fringilla. Augue odio gravida a
        nunc rhoncus aliquet parturient imperdiet natoque. Hac neque semper pretium, parturient hac
        nascetur. Elit mollis convallis sagittis scelerisque tristique. Fermentum justo efficitur
        congue nascetur mi eu amet conubia. Purus semper blandit feugiat hac vel sapien convallis
        quisque. Mi justo tempus quis enim tellus? Risus et ipsum in; aliquam nisl habitant.
        Praesent laoreet luctus nunc; pellentesque aptent porta. Vulputate risus lacinia imperdiet
        aptent habitasse facilisi venenatis ipsum. Integer varius porttitor aenean laoreet maecenas
        luctus id viverra porta. Habitasse lorem bibendum semper maecenas volutpat porta. Eros
        praesent duis odio sagittis metus montes interdum.
      </BCol>
      <BCol
        md="2"
        class="scrollable-column"
      >
        <BOffcanvas
          v-model="otpVisible"
          placement="end"
          responsive="md"
        >
          <ul>
            <li
              v-for="item in otp"
              :key="item"
            >
              {{ item }}
            </li>
            <li>A very large entry in on this page</li>
          </ul>
        </BOffcanvas>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const otpVisible = ref(false)
const tocVisible = ref(false)

// This example uses buttons to show the hidden sidebars, but you could also use a menu item or any other
//  UX element that can change the state of the model value for the BOffcanvas
const showOtp = () => {
  otpVisible.value = true
}
const showToc = () => {
  tocVisible.value = true
}

const tocGenerator = (s: string, c: number): string[] =>
  [...Array(c).keys()].map((i) => `${s} ${i}`)

const toc = tocGenerator('Chapter', 100) // Replace this with your own table of contents
const otp = tocGenerator('Section', 100) // Replace this with your own "on this page"
</script>

<style scoped lang="scss">
// The styling below makes a colum scroll independently of the rest of the page if
//  its content is too large to fit in the current viewport
.scrollable-column {
  max-height: 100vh;
  overflow-y: auto;
  position: sticky;
  top: 0;
}
</style>
