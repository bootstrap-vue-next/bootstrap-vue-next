<script lang="ts">
import { Popover } from "bootstrap";
import { defineComponent, onMounted, PropType, ref, Slot, VNode } from "vue";

export default defineComponent({
  props: {
    content: { type: String },
    id: { type: String },
    target: { type: String, required: true },
    triggers: { type: String as PropType<Popover.Options["trigger"]> },
    title: { type: String },
    placement: { type: String as PropType<Popover.Options["placement"]> },
  },
  setup(props, { slots }) {
      const instance = ref<Popover>();

      const getHtmlFromSlot = (slot?: Slot): string => {
          if (slot) {
              return slot().map(item => typeof item.type !== 'symbol' ? `<${item.type}>${item.children}</${item.type}>` : item.children).join(' ')
          }

          return '';
      }

      onMounted(() => {
            const target = document.getElementById(props.target);

            console.log(slots.default && slots.default());

            instance.value = new Popover(target!, {    
                container: 'body',
                trigger: props.triggers,
                placement: props.placement,
                title: getHtmlFromSlot(slots.title),
                content: getHtmlFromSlot(slots.default),
                html: true
            });
      });
  },
  render: () => null,
});
</script>
