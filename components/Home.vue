<template>
    <div class="min-h-screen items-center py-10 md:py-20 overflow-hidden w-full responsive-container flex lg:flex-row flex-col justify-center space-x-20" id="home">
        <div class="flex lg:order-first order-last flex-col items-center space-y-6 text-white" data-aos="fade" data-aos-easing="ease" data-aos-duration="500">
            <h2 class="text-5xl md:text-7xl tracking-tighter font-black text-center">Divine Udeh</h2>
            <div class="flex space-x-2 items-center text-base sm:text-xl">
                <span>Video Editor</span>
                <span>|</span>
                <span>Graphics Designer</span>
            </div>
            <div class="flex space-x-6 items-center">
                <a v-scroll-to="`#about`" class="bg-white cursor-pointer transition duration-200 transform hover:-translate-y-1 text-black px-4 py-2 text-center rounded-full">About me</a>
                <a v-scroll-to="`#contact`" class="transition cursor-pointer duration-200 transform hover:scale-110">Contact me</a>
            </div>
        </div>

        <div class="lg:order-last flex items-center w-full h-full sm:w-auto justify-center order-first" data-aos="zoom-in" data-aos-easing="ease" data-aos-duration="500">
            <img src="/me.gif" class="w-full h-full object-cover object-center" />
        </div>
    </div>
</template>