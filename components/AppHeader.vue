<template>
    <nav class="flex items-center responsive-container w-full py-6 justify-between">
        <h1 class="text-white font-cookie text-5xl">Deevie</h1>

        <div class="flex space-x-6 items-center">
            <a :href="link.tag" v-for="(link, index) in links" :key="index" class="text-white transition duration-200 transform hover:scale-110 hover:font-bold text-lg font-light">
                {{ link.text }}
            </a>
        </div>
    </nav>
</template>

<script>
import { reactive } from '@nuxtjs/composition-api'
export default {
    setup() {
        const links = reactive([
            {
                text: 'Home',
                tag: '#home',
            },
            {
                text: 'About me',
                tag: '#about',
            },
            {
                text: 'Services',
                tag: '#services',
            },
            {
                text: 'My works',
                tag: '#works',
            },
            {
                text: 'Contact me',
                tag: '#contact',
            },
        ])

        return {
            links
        }
    }
}
</script>