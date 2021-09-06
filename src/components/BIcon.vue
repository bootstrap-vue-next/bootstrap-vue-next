<template>
    <svg
        class="bi"
        v-bind:class="cssClasses" v-bind="$attrs">
        <g
            v-bind:transform="svgTransform"
            transform-origin="center">
            <use v-bind:xlink:href="`${svgSprite}#${icon}`" />
        </g>
    </svg>
</template>

<script>
// https://github.com/dvuckovic/vue3-bootstrap-icons
import { defineComponent } from 'vue';
import BootstrapIcons from 'bootstrap-icons/bootstrap-icons.svg';

export default /* #__PURE__ */defineComponent({
    name: 'BIcon',
    props: {
        icon: {
            type: String,
            required: true,
        },

        variant: {
            type: String,
            validator: (value) => [
                'success',
                'warning',
                'danger',
                'info',
                'primary',
                'secondary',
                'dark',
                'light',
            ].indexOf(value) !== -1,
        },

        size: {
            type: String,
            validator: (value) => [
                'sm',
                'md',
                'lg',
                '2x',
                '3x',
                '4x',
                '5x',
            ].indexOf(value) !== -1,
        },

        flipH: {
            type: Boolean,
        },

        flipV: {
            type: Boolean,
        },

        rotate: {
            type: [ String, Number ],
            validator: (value) => value >= -360 && value <= 360,
        },

        animation: {
            type: String,
            validator: (value) => [
                'cylon',
                'cylon-vertical',
                'fade',
                'spin',
                'spin-reverse',
                'spin-pulse',
                'spin-reverse-pulse',
                'throb',
            ].indexOf(value) !== -1,
        },
    },

    computed: {
        cssClasses () {
            const classes = [];

            if (this.variant) classes.push(`bi--variant-${this.variant}`);
            if (this.size) classes.push(`bi--size-${this.size}`);
            if (this.animation) classes.push(`bi--animation-${this.animation}`);

            return classes;
        },

        svgTransform () {
            if (!this.flipH && !this.flipV && !this.rotate) return '';

            let scale;
            let rotate;

            if (this.flipV && this.flipH) {
                scale = '-1 -1';
            }
            else if (this.flipH) {
                scale = '-1 1';
            }
            else if (this.flipV) {
                scale = '1 -1';
            }

            if (this.rotate) {
                rotate = this.rotate;
            }

            return (scale ? `scale(${scale})` : '')
                + (rotate ? `rotate(${rotate})` : '');
        },

        svgSprite () {
            return BootstrapIcons;
        },
    },

    methods: {
        upperFirst (str) {
            if (typeof str !== 'string') return str;
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
    },
});
</script>

<style lang="scss">
.bi {
    fill: currentColor;
    width: 1em;
    height: 1em;
    font-size: 1em;
    margin-bottom: 0.125em;
    vertical-align: middle;

    &--variant {
        &-success {
            color: var(--bs-success);
        }

        &-warning {
            color: var(--bs-warning);
        }

        &-danger {
            color: var(--bs-danger);
        }

        &-info {
            color: var(--bs-info);
        }

        &-primary {
            color: var(--bs-primary);
        }

        &-secondary {
            color: var(--bs-secondary);
        }

        &-dark {
            color: var(--bs-dark);
        }

        &-light {
            color: var(--bs-light);
        }
    }

    &--size {
        &-sm {
            font-size: 0.75em;
        }

        &-md {
            font-size: 1.25rem;
        }

        &-lg {
            font-size: 1.33333333rem;
        }

        &-2x {
            font-size: 2rem;
        }

        &-3x {
            font-size: 3rem;
        }

        &-4x {
            font-size: 4rem;
        }

        &-5x {
            font-size: 5rem;
        }
    }

    &--animation {
        &-cylon {
            animation: bi-animation-cylon .75s ease-in-out infinite alternate;
        }

        &-cylon-vertical {
            animation: bi-animation-cylon-vertical .75s ease-in-out infinite alternate;
        }

        &-fade {
            animation: bi-animation-fade .75s ease-in-out infinite alternate;
        }

        &-spin {
            animation: bi-animation-spin 2s linear infinite normal;
        }

        &-spin-reverse {
            animation: bi-animation-spin 2s linear infinite reverse;
        }

        &-spin-pulse {
            animation: bi-animation-spin 1s steps(8) infinite normal;
        }

        &-spin-reverse-pulse {
            animation: bi-animation-spin 1s steps(8) infinite reverse;
        }

        &-throb {
            animation: bi-animation-throb .75s ease-in-out infinite alternate;
        }
    }
}

@keyframes bi-animation-cylon {
    0% {
        transform: translateX(-25%);
    }
    100% {
        transform: translateX(25%);
    }
}

@keyframes bi-animation-cylon-vertical {
    0% {
        transform: translateY(25%);
    }
    100% {
        transform: translateY(-25%);
    }
}

@keyframes bi-animation-fade {
    0% {
        opacity: 0.1;
    }
    100% {
        opacity: 1;
    }
}

@keyframes bi-animation-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(359deg);
    }
}

@keyframes bi-animation-throb {
    0% {
        opacity: 0.5;
        transform: scale(0.5);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
