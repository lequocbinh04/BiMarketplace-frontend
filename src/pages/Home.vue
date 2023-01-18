<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button type="button"
                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex flex-shrink-0 items-center px-4">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company" />
              </div>
              <div class="mt-5 h-0 flex-1 overflow-y-auto">
                <nav class="space-y-1 px-2">
                  <a v-for="item in navigation" :key="item.name" :href="item.href"
                    :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                    <component :is="item.icon"
                      :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 flex-shrink-0 h-6 w-6']"
                      aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-grow flex-col justify-between overflow-y-auto bg-white pt-5 dark:bg-gray-800 duration-200">
        <div>
          <div class="flex items-center px-4">
            <img class="h-14 w-auto" src="https://avatars.githubusercontent.com/u/113456527?s=200&v=4"
              alt="cant load data" />
            <div class="font-semibold text-xl ml-1 dark:text-white duration-200">BiMarketplace.</div>
          </div>
          <div class="w-full px-8">
            <div class="h-[2px] my-6 w-full bg-black bg-opacity-5 dark:bg-white duration-200"></div>
          </div>
          <div class="flex mt-10 flex-grow flex-col">
            <nav class="flex-1 pb-4">
              <ui-tabs class="space-y-2">
                <ui-tab as="div" v-for="item in navigation" :key="item.name" class="px-5"
                  v-tooltip:right.group="item.description">
                  <a :href="item.href" :class="[item.current ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-100'
                  , 'group flex items-center px-4 py-4 text-sm font-medium rounded-xl duration-200']">
                    <component :is="item.icon"
                      :class="[item.current ? 'text-white dark:text-black' : 'text-black dark:text-white', 'mr-3 flex-shrink-0 h-6 w-6 duration-200']"
                      aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </ui-tab>
              </ui-tabs>
            </nav>
          </div>
        </div>
        <div class="px-4 mb-4">
          <button
            class="duration-200 px-4 py-3 rounded-xl bg-white text-black w-full relative flex justify-between items-center shadow ring-1 ring-slate-900/10 font-medium dark:bg-black dark:text-white dark:ring-white/10">
            <div>
              Get 1,000 BiToken
            </div>
            <div>
              <ArrowSmallRightIcon class="h-5 w-auto" />
            </div>
            <div class="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3">
              <span class="flex h-3 w-3">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/50 opacity-75 dark:bg-white/50"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-black dark:bg-white"></span>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col md:pl-72">
      <div class="sticky top-0 z-10 flex h-16 flex-shrink-0">
        <button type="button"
          class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex w-full justify-between items-center max-w-8xl px-6 sm:px-8 md:px-10 py-10">
          <div class="flex w-full" action="#" method="GET">
            <div class="relative w-full flex items-center">
              <ui-input placeholder="Search" class="w-full mr-3" rounded="rounded-[0.8rem]"
                inputClass="w-full py-4 px-6">
                <template #prepend>
                  <MagnifyingGlassIcon class="w-6" />
                </template>
              </ui-input>
              <div class="h-full">
                <ui-button buttonClass="py-4 px-4" rounded="rounded-[0.8rem]" variant="accent">
                  <FunnelIcon class="h-5 w-auto" />
                </ui-button>
              </div>
            </div>
          </div>
          <div class=" ml-4 flex items-center md:ml-6">
            <ui-button buttonClass="py-4 px-4 w-32" rounded="rounded-[0.8rem]">
              <img src="/eth.png" class="h-5 w-auto mr-3" v-if="!isDark" />
              <img src="/eth-white.png" class="h-5 w-auto mr-3" v-else />
              <div class="font-medium">
                3.2 BT
              </div>
            </ui-button>
            <div class="rounded-[0.8rem]"></div>
            <ui-button buttonClass="py-2 px-2 ml-3" rounded="rounded-[0.8rem]" variant="" @click="isDark = !isDark">
              <svg v-if="isDark" viewBox=" 0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="w-7 h-7">
                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-transparent stroke-white"></path>
                <path
                  d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                  class="stroke-white"></path>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" class="w-7 h-7">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                  class="fill-transparent"></path>
                <path
                  d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                  class="fill-black"></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                  class="fill-black"></path>
              </svg>
            </ui-button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="flex w-8 max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                  <a :href="item.href"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{
  item.name
                    }}</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="flex-1">
        <div class="py-6">
          <div class="mx-auto max-w-8xl px-6 sm:px-8 md:px-10">
            <h1 class="text-2xl font-semibold text-gray-900 dark:text-white duration-200">Dashboard</h1>
          </div>
          <div class="mx-auto max-w-8xl px-6 sm:px-8 md:px-10">
            <!-- Replace with your content -->
            <div class="py-4">
              <div class="h-96 rounded-lg border-4 border-dashed border-gray-200 dark:border-gray-500 duration-200" />
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3BottomLeftIcon,
  BellIcon,
  WalletIcon,
  HomeIcon,
  BanknotesIcon,
  XMarkIcon,
  LifebuoyIcon,
  AcademicCapIcon,
  ArrowSmallRightIcon,
  FunnelIcon
} from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { useGroupTooltip } from '@/composable/groupTooltip';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

useGroupTooltip()

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true, description: "Dashboard" },
  { name: 'Market', href: '#', icon: BanknotesIcon, current: false, description: "Buy/Sell NFT" },
  { name: 'Wallet', href: '#', icon: WalletIcon, current: false, description: "Manage your cryptocurrency & NFT" },
  { name: 'Help', href: '#', icon: LifebuoyIcon, current: false, description: "Comming soon..." },
  { name: 'FAQ', href: '#', icon: AcademicCapIcon, current: false, description: "Comming soon..." },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const sidebarOpen = ref(false)

</script>