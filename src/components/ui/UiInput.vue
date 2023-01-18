<template>
    <div class="relative">
        <div class="absolute top-1/2 -translate-y-1/2 left-4 text-gray-500">
            <slot name="prepend"></slot>
        </div>
        <input v-bind="{
            placeholder,
        }" type="text"
            class="bg-input rounded-lg bg-transparent py-2 px-4 transition border-0 focus:ring-black focus:ring-2 duration-200"
            :class="[inputClass, {
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
    }
})

</script>