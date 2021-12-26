<template>
  <teleport to="#container">
    <div class="toast-container position-fixed p-3" :class="[pos]">
      <b-toast ref="toast" title="wow" body="cool stuff" variant="primary"></b-toast>
    </div>
  </teleport>
</template>

<script lang="ts">
import BToast from './BToast.vue'

import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onMounted,
  PropType,
  reactive,
  ref,
  watch,
} from 'vue'

const toastPositions = {
  topLeft: 'top-0 start-0',
  topMiddle: 'top-0 start-50',
  topRight: 'top-0 end-0',
  middLeft: 'top-50 start-0 translate-middle-y',
  middleCenter: 'top-50 start-50 translate-middle',
  middleRgiht: 'top-50 end-0 translate-middle-y',
  bottomLeft: 'bottom-0 start-0',
  bottomMiddle: 'bottom-0 start-50',
  bottomRight: 'bottom-0 end-0',
}

export default defineComponent({
  name: 'BToastContainer',
  components: {BToast},
  props: {
    teleportTarget: {type: String, default: '#container'},
  },

  setup(props, {emit}) {
    return {}
  },
  computed: {
    pos() {
      return toastPositions.topRight
    },
  },
})
</script>
