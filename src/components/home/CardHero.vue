<template>
    <div class="p-4 bg-gray-200 bg-opacity-5 shadow-md hover:shadow-xl rounded-xl duration-200 hover:-translate-y-2">
        <div style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, .4) 66.15%);"
            class="rounded-lg flex justify-center relative">
            <img :src="image" class="absolute w-full bottom-0" />
            <img :src="image" class="h-48 opacity-0" />
        </div>
        <h2 class="font-semibold text-lg mt-3">{{ name }}</h2>
        <div class="flex items-center justify-between mt-1">
            <div>
                <span class="text-xs text-gray-400">Current Price</span>
                <div class="font-medium text-sm flex items-center">
                    <ui-token />
                    <div class="mr-1">{{ price }}</div>
                    <div class="">BT</div>
                </div>
            </div>
            <div>
                <ui-button class="text-sm" variant="accent">
                    Buy
                </ui-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

</script>