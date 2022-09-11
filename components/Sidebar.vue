<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isSidebarOpen ? 'block' : 'hidden'"
      @click="closeSidebar"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <!-- End Backdrop -->

    <div
      :class="[isSidebarOpen ? 'translate-x-0 ease-out' : position != 'left' ? 'translate-x-full ease-in' : '-translate-x-full ease-in', position != 'left' ? 'right-0' : 'left-0', width]"
      class="fixed inset-y-0 z-30 overflow-y-auto transition duration-300 transform shadow-2xl bg-black "
    >
      <slot name="header">
       <div class="fixed top-5 right-5 text-white">
           <span class="text-5xl font-light cursor-pointer" @click.prevent="closeSidebar">&times;</span>
       </div>
      </slot>

      <slot />
    </div>
  </div>
</template>

<script>
import { computed, useStore } from '@nuxtjs/composition-api'

export default {
  props: {
    position: {
      type: String,
      default: 'right'
    },
    isOpen: {
      type: Boolean,
      required: true
    },
    width: {
      type: String,
      default: 'w-80'
    }
  },
  setup(props, { emit }) {
    const store = useStore()
    const isSidebarOpen = computed(() => props.isOpen )

    const closeSidebar = () => {
        store.commit('closeSidebar')
    }

    return {
      isSidebarOpen,
      closeSidebar
    }
  }
}
</script>
