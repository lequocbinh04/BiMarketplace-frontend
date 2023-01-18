<template>
    <div class="relative">
        <div class="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500">
            <slot name="prepend"></slot>
        </div>
        <input v-bind="{
            placeholder,
        }" type="text"
            class="bg-input bg-transparent py-2 px-4 transition border-0 focus:ring-black dark:focus:ring-white focus:ring-2 duration-200"
            :class="[inputClass, rounded, {
                'pl-12': $slots.prepend,
            }]" />

    </div>
</template>

<script setup lang="ts">

defineProps({
    inputClass: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    rounded: {
        type: String,
        default: "rounded-lg"
    }
})

</script>