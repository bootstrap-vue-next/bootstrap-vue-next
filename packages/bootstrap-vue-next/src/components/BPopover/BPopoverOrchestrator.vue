<template>
  <BPopover
    v-for="[key, {title, content, ...val}] in tools.popovers?.value.entries() || []"
    :key="key"
    v-bind="val"
  >
    <template v-if="title" #title="scope">
      <template v-if="typeof title === 'string'">
        {{ title }}
      </template>
      <component :is="title" v-bind="scope" v-else />
    </template>
    <template v-if="content" #default="scope">
      <template v-if="typeof content === 'string'">
        {{ content }}
      </template>
      <component :is="content" v-else v-bind="scope" />
    </template>
  </BPopover>
  <BTooltip
    v-for="[key, {title, content, ...val}] in tools.tooltips?.value.entries() || []"
    :key="key"
    v-bind="val"
  >
    <template v-if="title" #title>
      <template v-if="typeof title === 'string'">
        {{ title }}
      </template>
      <component :is="title" v-else />
    </template>
    <template v-if="content" #default>
      <template v-if="typeof content === 'string'">
        {{ content }}
      </template>
      <component :is="content" v-else />
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
