<template>
    <div >
        <SubHeader title="Blog"/>
        <section class="sm:mt-10 mt-6 ml-2 md:text-base text-sm textColor grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-12">
            <article class="bg-blog-item rounded-lg overflow-hidden" v-for="item in blogItem" :key="item.id">
                <div class="w-full h-56">
                    <img width="100%" height="100%" class="h-full w-full" :src="item.src" alt="">
                </div>
                <div class="flex flex-col gap-1 h-48 p-5">
                    <p class="font-medium textColor opacity-60">{{ item.date }}</p>
                    <h2 class="text-2xl text-gray-50">Instalar Vue JS en Android</h2>
                    <p>{{ item.content }}</p>
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
                {date: 'Tutorial × Marzo, 2022', src: '/img/icon.webp', title: 'Web App', content: 'Podrás ver como instalar Vue Js y compilarlo desde tu celular.'},
                {date: 'Tutorial × Marzo, 2022', src: '/img/icon.webp', title: 'Web App', content: 'Podrás ver como instalar Vue Js y compilarlo desde tu celular.'},
                {date: 'Tutorial × Marzo, 2022', src: '/img/icon.webp', title: 'Web App', content: 'Podrás ver como instalar Vue Js y compilarlo desde tu celular.'},
                {date: 'Tutorial × Marzo, 2022', src: '/img/icon.webp', title: 'Web App', content: 'Podrás ver como instalar Vue Js y compilarlo desde tu celular.'},
            ]
        }
    },
};

</script>

<style>

</style>