<template>
  <div class="bg-gray-200"></div>
  <div class="grid lg:grid-cols-6 gap-x-3">
    <div class="col-span-4">
      <div
        class="relative  bg-black px-8 py-8 flex items-center justify-between rounded-[1.75rem] text-white dark:bg-gray-200 dark:text-black duration-200">
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
        </div>
      </div>
      <div class="mt-10 text-black dark:text-white duration-200">
        <div class="flex items-center justify-between">
          <h1 class="font-semibold text-2xl">Heroes</h1>
          <button class="flex items-center text-sm">
            <div class="mr-1">View all</div>
            <ArrowLongRightIcon class="w-4 h-auto" />
          </button>
        </div>
        <div class="mt-6 grid grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-14 pt-8">
          <CardHero name="Taekwon" image="https://assets.thetanarena.com/skin/avatar/21001.png" :price="0.1" />
          <CardHero name="Phoenix" image="https://assets.thetanarena.com/skin/avatar/13001.png" :price="129.1" />
          <CardHero name="Kong Key" image="https://assets.thetanarena.com/skin/avatar/22000.png" :price="12" />
          <CardHero name="Chef Octopus" image="https://assets.thetanarena.com/skin/avatar/26000.png" :price="92.3" />
          <CardHero name="Mortal" image="https://assets.thetanarena.com/skin/avatar/10001.png" :price="11.1" />
          <CardHero name="Velvet" image="https://assets.thetanarena.com/skin/avatar/19002.png" :price="32.1" />
          <CardHero name="Taekwon" image="https://assets.thetanarena.com/skin/avatar/21001.png" :price="0.1" />
          <CardHero name="Kong Key" image="https://assets.thetanarena.com/skin/avatar/22000.png" :price="12" />
          <CardHero name="Taekwon" image="https://assets.thetanarena.com/skin/avatar/21001.png" :price="0.1" />
          <CardHero name="Phoenix" image="https://assets.thetanarena.com/skin/avatar/13001.png" :price="129.1" />
          <CardHero name="Kong Key" image="https://assets.thetanarena.com/skin/avatar/22000.png" :price="12" />
          <CardHero name="Chef Octopus" image="https://assets.thetanarena.com/skin/avatar/26000.png" :price="92.3" />
          <CardHero name="Mortal" image="https://assets.thetanarena.com/skin/avatar/10001.png" :price="11.1" />
          <CardHero name="Velvet" image="https://assets.thetanarena.com/skin/avatar/19002.png" :price="32.1" />
          <CardHero name="Taekwon" image="https://assets.thetanarena.com/skin/avatar/21001.png" :price="0.1" />
          <CardHero name="Kong Key" image="https://assets.thetanarena.com/skin/avatar/22000.png" :price="12" />
          <CardHero name="Taekwon" image="https://assets.thetanarena.com/skin/avatar/21001.png" :price="0.1" />
          <CardHero name="Phoenix" image="https://assets.thetanarena.com/skin/avatar/13001.png" :price="129.1" />
          <CardHero name="Kong Key" image="https://assets.thetanarena.com/skin/avatar/22000.png" :price="12" />
          <CardHero name="Chef Octopus" image="https://assets.thetanarena.com/skin/avatar/26000.png" :price="92.3" />
          <CardHero name="Mortal" image="https://assets.thetanarena.com/skin/avatar/10001.png" :price="11.1" />
          <CardHero name="Velvet" image="https://assets.thetanarena.com/skin/avatar/19002.png" :price="32.1" />
          <CardHero name="Taekwon" image="https://assets.thetanarena.com/skin/avatar/21001.png" :price="0.1" />
          <CardHero name="Kong Key" image="https://assets.thetanarena.com/skin/avatar/22000.png" :price="12" />
          <CardHero name="Taekwon" image="https://assets.thetanarena.com/skin/avatar/21001.png" :price="0.1" />
          <CardHero name="Phoenix" image="https://assets.thetanarena.com/skin/avatar/13001.png" :price="129.1" />
          <CardHero name="Kong Key" image="https://assets.thetanarena.com/skin/avatar/22000.png" :price="12" />
          <CardHero name="Chef Octopus" image="https://assets.thetanarena.com/skin/avatar/26000.png" :price="92.3" />
          <CardHero name="Mortal" image="https://assets.thetanarena.com/skin/avatar/10001.png" :price="11.1" />
          <CardHero name="Velvet" image="https://assets.thetanarena.com/skin/avatar/19002.png" :price="32.1" />
          <CardHero name="Taekwon" image="https://assets.thetanarena.com/skin/avatar/21001.png" :price="0.1" />
          <CardHero name="Kong Key" image="https://assets.thetanarena.com/skin/avatar/22000.png" :price="12" />
          <CardHero name="Taekwon" image="https://assets.thetanarena.com/skin/avatar/21001.png" :price="0.1" />
          <CardHero name="Phoenix" image="https://assets.thetanarena.com/skin/avatar/13001.png" :price="129.1" />
          <CardHero name="Kong Key" image="https://assets.thetanarena.com/skin/avatar/22000.png" :price="12" />
          <CardHero name="Chef Octopus" image="https://assets.thetanarena.com/skin/avatar/26000.png" :price="92.3" />
          <CardHero name="Mortal" image="https://assets.thetanarena.com/skin/avatar/10001.png" :price="11.1" />
          <CardHero name="Velvet" image="https://assets.thetanarena.com/skin/avatar/19002.png" :price="32.1" />
          <CardHero name="Taekwon" image="https://assets.thetanarena.com/skin/avatar/21001.png" :price="0.1" />
          <CardHero name="Kong Key" image="https://assets.thetanarena.com/skin/avatar/22000.png" :price="12" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import CardHero from "@/components/home/CardHero.vue";
import {
  ArrowLongRightIcon
} from "@heroicons/vue/24/outline"

</script>