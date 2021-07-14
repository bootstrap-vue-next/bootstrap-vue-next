import getID from "../utils/getID";
import { computed } from "vue";

function useId(id?: string, suffix?: string) {
    const computedId = computed(() => {
        return id || getID(suffix);
    });

    return computedId
}

export default useId;
