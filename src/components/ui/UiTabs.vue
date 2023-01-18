<template>
    <div ref="container" @mouseenter="showIndicator = true" @mouseleave="showIndicator = false">
        <div class="relative z-20" :class="class">
            <slot></slot>
        </div>
        <div id="ui-indicator" ref="indicator" class="bg-black/5 rounded-xl absolute z-10 duration-200"
            v-show="showIndicator">
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, provide, reactive, ref } from 'vue';

const container = ref<HTMLDivElement>()
const indicator = ref<any>()
const showIndicator = ref(false);
const instances = reactive<HTMLDivElement[]>([])

defineProps({
    class: {
        type: String,
        default: ""
    }
})

onMounted(() => {
    console.log(indicator.value);
})

console.log(indicator.value);
const hoverHandler = ({ target }: {
    target: HTMLElement
}) => {
    const { left, top, width, height } = target.getBoundingClientRect()
    console.log(target);
    if (instances.length == 0 && indicator.value) {
        indicator.value.style.width = `${width}px`
        indicator.value.style.height = `${height}px`;
        indicator.value.style.top = "0";
        indicator.value.style.left = `${left}px`;
    }
    indicator.value.style.transform = `translateY(${top}px)`;
    instances.push(target as HTMLDivElement);
}

provide("ui-tabs", {
    hoverHandler,
})

</script>