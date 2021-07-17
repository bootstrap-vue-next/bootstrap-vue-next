<template>
    <img :src="icon" alt="Bootstrap" width="32" height="32">
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    props: {
        icon: { type: String },
    },
    setup(props) {
        const icon = ref('');

        onMounted(async () => {
            const response = await import(`bootstrap-icons/icons/${props.icon}.svg`);

            icon.value = response.default
        })

        return {
            icon
        }
    },
})
</script>
