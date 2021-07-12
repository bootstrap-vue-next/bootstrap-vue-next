import { onBeforeUnmount, onMounted, Ref } from "vue";

function useAddEventsListeners(element: Ref<HTMLElement | undefined>, event: string, callback: EventListener) {
    onMounted(() => {
        element.value!.addEventListener(event, callback);
    })

    onBeforeUnmount(() => {
        element.value!.removeEventListener(event, callback);
    })
}

export default useAddEventsListeners;