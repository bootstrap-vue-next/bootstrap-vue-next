<template>
    <teleport to="body">
        <div ref="element" class="modal" :id="id" :class="classes" tabindex="-1">
            <div class="modal-dialog" :class="modalDialogClasses">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <slot name="title">{{ title }}</slot>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('cancel')">Cancel</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="$emit('ok')">OK</button>
                </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { Modal } from 'bootstrap';
import useEventListener from '../composables/useEventListener';

export default defineComponent({
    emits: [
        'update:modelValue',
        'show',
        'shown',
        'hide',
        'hidden',
        'hide-prevented',
        'ok',
        'cancel',
    ],
    props: {
        modelValue: { type: Boolean, default: false },
        noBackdrop: { type: Boolean, default: false },
        centered: { type: Boolean, default: false },
        fade: { type: Boolean, default: false },
        fullscreen: { type: [Boolean, String], default: false },
        id: { type: String },
        title: { type: String },
        scrollable: { type: Boolean, default: false },
        show: { type: Boolean, default: false },
        size: { type: String },
        staticBackdrop: { type: Boolean },
    },
    setup(props, { emit }) {
        const element = ref<HTMLElement>();
        const instance = ref<Modal>();
        const classes = computed(() => ({
            fade: props.fade,
            show: props.show,
        }))
        const modalDialogClasses = computed(() => ({
            'modal-fullscreen': typeof props.fullscreen === 'boolean' ? props.fullscreen : false,
            [`modal-fullscreen-${props.fullscreen}-down`]: typeof props.fullscreen === 'string' ? props.fullscreen : false,
            [`modal-${props.size}`]: props.size,
            'modal-dialog-centered': props.centered,
            'modal-dialog-scrollable': props.scrollable
        }))

        useEventListener(element, 'shown.bs.modal', () => emit('shown'))
        useEventListener(element, 'hidden.bs.modal', () => emit('hidden'))
        useEventListener(element, 'hidePrevented.bs.modal', () => emit('hide-prevented'))

        useEventListener(element, 'show.bs.modal', () => {
            emit('show');
            emit('update:modelValue', true);
        })
        
        useEventListener(element, 'hide.bs.modal', () => {
            emit('hide')
            emit('update:modelValue', false);
        })

        onMounted(() => {
            instance.value = new Modal(element.value!, {
                backdrop: props.staticBackdrop ? 'static' : !props.noBackdrop,
                keyboard: !props.staticBackdrop
            });

            if (props.modelValue) {
                instance.value?.show();
            }
        });

        watch(() => props.modelValue, (value) => {
            if (value) {
                instance.value?.show();
            } else {
                instance.value?.hide();
            }
        })

        return {
            element,
            classes,
            modalDialogClasses
        }
    },
})
</script>
