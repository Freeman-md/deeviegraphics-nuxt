<template>
    <div class="min-h-96 my-20 py-32 w-full h-full responsive-container grid lg:grid-cols-3 gap-6" id="services">
        <div class="flex flex-col items-start space-y-6" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="500">
            <h3 class="text-5xl font-black">Services</h3>
            
        </div>

        <div class="col-span-2 grid sm:grid-cols-2 gap-12">
            <div data-aos="fade-up" data-aos-easing="ease" data-aos-duration="500" class="px-6 py-8 flex flex-col space-y-4 rounded-sm bg-gradient-to-br text-white shadow-md  to-black" :class="index < 2 ? 'from-primary' : 'from-secondary'" v-for="(service, index) in services" :key="index">
                <div class="flex justify-between items-center w-full">
                    <h6 class="font-semibold text-xl">{{ service.title }}</h6>
                    <span :class="index < 2 ? 'text-primary': 'text-secondary'" class="bg-white font-bold uppercase text-sm px-2 py-0.5 rounded-lg">{{ service.skillLevel }}</span>
                </div>
                <span class="text-sm font-light">{{ service.description }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/composition-api'
export default {
    setup() {
        const services = reactive([
            {
                title: 'Graphics Designing',
                description: 'Developing concepts, graphics and layouts for product illustrations, company logos and websites. determining size and arrangement of copy and illustrative material, as well as font style and size.',
                skillLevel: 'pro'
            },
            {
                title: 'Video Editing',
                description: 'Editing segments of motion video production footage, special effects and sound recordings in the post-production process',
                skillLevel: 'pro'
            },
            {
                title: 'Mini Avatar Video Making',
                skillLevel: 'pro'
            }
        ])

        return {
            services
        }
    }
}
</script>