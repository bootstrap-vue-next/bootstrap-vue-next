<template>
  <BPopover
    v-for="[key, {title, body, ...val}] in tools.popovers?.value.entries() || []"
    :key="key"
    v-bind="val"
  >
    <template v-if="title" #title="scope">
      <template v-if="typeof title === 'string'">
        {{ title }}
      </template>
      <component :is="title" v-bind="scope" v-else />
    </template>
    <template v-if="body" #default="scope">
      <template v-if="typeof body === 'string'">
        {{ body }}
      </template>
      <component :is="body" v-else v-bind="scope" />
    </template>
  </BPopover>
  <BTooltip
    v-for="[key, {title, body, ...val}] in tools.tooltips?.value.entries() || []"
    :key="key"
    v-bind="val"
  >
    <template v-if="title" #title="scope">
      <template v-if="typeof title === 'string'">
        {{ title }}
      </template>
      <component :is="title" v-else v-bind="scope" />
    </template>
    <template v-if="body" #default="scope">
      <template v-if="typeof body === 'string'">
        {{ body }}
      </template>
      <component :is="body" v-else v-bind="scope" />
    </template>
  </BTooltip>
</template>

<script setup lang="ts">
import {usePopoverController} from '../../composables/usePopoverController'
import BPopover from './BPopover.vue'
import BTooltip from '../BTooltip/BTooltip.vue'

const tools = usePopoverController()

defineExpose({
  ...tools,
})
</script>
