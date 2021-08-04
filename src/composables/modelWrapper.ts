import { computed } from "vue";

export const useModelWrapper = (modelValue: string | boolean | undefined,
                                emit: (event: string, ...args: any[]) => void) => computed({
  get: () => modelValue,
  set: (value) => emit("update:modelValue", value)
});