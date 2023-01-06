<template>
    <div class="h-full my-20 py-32 responsive-container" id="works">
        <div class="flex flex-col space-y-6">
            <h3 class="text-6xl font-black">My works</h3>
            <span>Here are some of the cool projects I've worked on</span>

            <div>
                <div :class="`grid grid-cols-3`">
                    <span
                        v-for="(tab, index) in tabs"
                        :key="index"
                        class="
                            py-4
                            hover:text-white
                            text-center text-xs
                            sm:text-base
                            border-b-2
                            cursor-pointer
                            transition
                            duration-200
                            hover:border-white
                        "
                        @click.prevent="selectTab(tab)"
                        :class="
                            selectedTab && selectedTab.index === tab.index
                                ? 'text-white border-white'
                                : 'text-gray-600 border-gray-600'
                        "
                    >
                        {{ tab.title }}
                    </span>
                </div>
            </div>
            <div>
                <Flyers v-if="selectedTab.title == 'Flyer Designs'" />
                <Logos v-if="selectedTab.title == 'Logo Designs'" />
                <Videos v-if="selectedTab.title == 'Videos'" />
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
export default {
    setup() {
        const tabs = reactive([
            {
                index: 1,
                title: "Flyer Designs",
            },
            {
                index: 2,
                title: "Logo Designs",
            },
            {
                index: 3,
                title: "Videos",
            },
        ]);
        const selectedTab = ref(tabs[0]);

        const selectTab = (tab) => (selectedTab.value = tab);

        return {
            selectedTab,
            tabs,
            selectTab,
        };
    },
};
</script>