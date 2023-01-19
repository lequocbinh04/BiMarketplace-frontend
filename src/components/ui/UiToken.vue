<template>
    <img src="/eth.png" class="h-4 w-auto mr-3" v-if="!isDark" />
    <img src="/eth-white.png" class="h-4 w-auto mr-3" v-else />
</template>

<script setup lang="ts">

import { useDark } from '@vueuse/core';

let isDark = useDark();

</script>