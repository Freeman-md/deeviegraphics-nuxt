<template>
    <nav class="flex items-center fixed top-0 z-20 bg-black responsive-container w-full py-6 justify-between">
        <h1 class="text-white font-cookie text-5xl">Deevie</h1>

        <div class="hidden sm:flex space-x-6 items-center">
            <a @click.prevent="setActiveTag(link.tag)" v-scroll-to="link.tag" v-for="(link, index) in links" :key="index" class="text-white transition cursor-pointer duration-200 transform hover:scale-110 hover:font-bold text-lg font-light" :class="{'font-bold': activeTag === link.tag}">
                {{ link.text }}
            </a>
        </div>

        <button @click.prevent="openSidebar" class="text-white inline-block sm:hidden text-xl">
            <span class="fas fa-align-right"></span>
        </button>
    </nav>
</template>

<script>
import { computed, reactive, useStore } from '@nuxtjs/composition-api'
export default {
    setup() {
        const store = useStore()
        const links = store.getters['getLinks']
        const activeTag = computed(() => store.getters['getActiveTag'])

        const openSidebar = () => store.commit('openSidebar')
        const setActiveTag = (tag) => store.commit('setActiveTag', {tag: tag})

        return {
            links,
            activeTag,
            openSidebar,
            setActiveTag
        }
    }
}
</script>