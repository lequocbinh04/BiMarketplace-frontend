<template>
  <button class="px-4 py-2 rounded-lg duration-200 " :class="[
    buttonClass,
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
})

const variants = {
  transparent: {
    default: 'hoverable',
  },
  fill: {
    default: 'bg-input',
    accent:
      'bg-accent hover:bg-gray-700 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-black text-white',
    primary:
      'bg-primary text-white dark:bg-secondary dark:hover:bg-primary hover:bg-secondary',
    danger:
      'bg-red-400 text-white dark:bg-red-500 dark:hover:bg-red-500 hover:bg-red-400',
  },
};


</script>