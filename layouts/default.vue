<template>
    <div class="h-screen w-screen bg-black">
        <AppHeader />
        <Nuxt />
        <Sidebar :isOpen="isOpen" :closeSidebar="closeSidebar">
            <div class="w-full h-full items-center justify-center flex flex-col space-y-8">
                <a @click.prevent="setActiveTag(link.tag)" v-scroll-to="link.tag" v-for="(link, index) in links" :key="index" class="text-white transition cursor-pointer duration-200 transform hover:scale-110 hover:font-bold text-2xl font-light" :class="{'font-bold': activeTag === link.tag}">
                    {{ link.text }}
                </a>
            </div>
        </Sidebar>
    </div>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
import { useStore } from '@nuxtjs/composition-api'
export default {
    setup() {
        const store = useStore()

        const links = store.getters['getLinks']
        const isOpen = computed(() => store.getters['getSidebar'])
        const activeTag = computed(() => store.getters['getActiveTag'])

        const closeSidebar = () => store.commit('closeSidebar')
        const setActiveTag = (tag) => {
            store.commit('setActiveTag', {tag: tag})
            closeSidebar()
        }

        return {
            links, isOpen, activeTag, closeSidebar, setActiveTag
        }
    },
}
</script>