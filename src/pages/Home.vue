<template>
  <div class="bg-gray-200"></div>
  <div class="grid lg:grid-cols-6 gap-x-3">
    <div
      class="relative col-span-4 bg-black px-8 py-8 flex items-center justify-between rounded-[1.75rem] text-white dark:bg-gray-200 dark:text-black duration-200">
      <div>
        <div class="font-bold text-3xl">The official marketplace for BiGame</div>
        <div class="mt-2">You can buy your own hero bellow</div>
        <ui-button variant="white" class="mt-6 font-semibold" padding="py-3.5 px-6">
          Explore More
        </ui-button>
      </div>
      <img src="https://assets.thetanarena.com/skin/avatar/21001.png" class="h-36 z-20 opacity-0" />
      <div class="px-6 absolute right-0 bottom-0 z-50">
        <img src="https://assets.thetanarena.com/skin/avatar/21001.png" class="h-[17rem] z-20" />
        <!-- <div class="rounded-[calc(1.35rem)] w-full h-[70%] absolute bottom-0 left-0 z-10"
          style="background: linear-gradient(180deg,rgba(194,94,1,0.15) 0%,#c25e01 66.15%);">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>