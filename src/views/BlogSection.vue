<template>
    <div >
        <SubHeader title="Blog"/>
        <section class="sm:mt-10 mt-6 ml-2 md:text-base text-sm textColor grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-12">
            <article class="bg-blog-item rounded-lg overflow-hidden" v-for="item in blogItem" :key="item.id">
                <div class="w-full h-56">
                    <img width="100%" height="100%" class="object-cover h-full w-full" :src="item.src" alt="">
                </div>
                <div class="flex flex-col gap-1 h-48 p-5">
                   <a href="#">
                    <p class="font-medium textColor opacity-60">{{ item.date }}</p>
                    <h2 class="text-2xl text-gray-50">{{ item.title }}</h2>
                    <p>{{ item.content }}</p>
                   </a>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
import SubHeader from '@/components/SubHeader.vue';
export default {
    components:{
        SubHeader,
    },
    data() {
        return {
            blogItem: [
                {date: 'Tutorial × Marzo, 2022', src: '/img/thumbs/vue.webp', title: 'Instalar Vue JS en Android', content: 'Podrás aprender como instalar Vue Js y Tailwind en Android, además compilarlo desde tu celular.'},
                {date: 'Tutorial × Marzo, 2022', src: '/img/thumbs/seo.webp', title: 'Optimización Web', content: 'Verás algunos consejos y formas de optimizar tu sitio web.'},
                {date: 'Tutorial × Marzo, 2022', src: '/img/thumbs/react.webp', title: 'Instalar React en Android', content: 'Podrás aprender como instalar React y Tailwind en Android, además compilarlo desde tu celular.'},
            ]
        }
    },
};

</script>

<style>

</style>