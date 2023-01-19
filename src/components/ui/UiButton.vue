<template>
  <button class="duration-200 flex items-center justify-center" :class="[
    buttonClass,
    rounded,
    padding,
    // @ts-ignore
    variants[btnType][variant]
  ]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

defineProps({
  buttonClass: {
    type: String,
    default: ""
  },
  btnType: {
    type: String,
    default: "fill"
  },
  variant: {
    type: String,
    default: "default"
  },
  rounded: {
    type: String,
    default: "rounded-lg"
  },
  padding: {
    type: String,
    default: "px-4 py-2"
  }
})

const variants = {
  transparent: {
    default: 'hoverable',
  },
  fill: {
    default: 'bg-input',
    accent:
      'bg-accent hover:bg-gray-700 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-black text-white',
    white: 'bg-white dark:bg-black dark:text-white text-black',
    primary:
      'bg-primary text-white dark:bg-secondary dark:hover:bg-primary hover:bg-secondary',
    danger:
      'bg-red-400 text-white dark:bg-red-500 dark:hover:bg-red-500 hover:bg-red-400',
  },
};


</script>