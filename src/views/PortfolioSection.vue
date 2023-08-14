<template>
    <div class="-ml-0">
        <SubHeader title="Portafolio"/>
        <nav class="mt-7 bg-transparent">
            <ul class="sm:flex gap-5 items-center hidden">
                <li>
                    <a href="">
                        All
                    </a>
                </li>
                <li>
                    <a href="">
                        App
                    </a>
                </li>
                <li>
                    <a href="">
                        Web Desing
                    </a>
                </li>
                <li>
                    <a href="">
                        Personal
                    </a>
                </li>
            </ul>      
        </nav>
        <section class="sm:mt-9 mt-8 ml-2 grid gap-y-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center">
            <article class="flex flex-col gap-4 h-60 w-11/12" v-for="item in portItem" :key="item.id">
                <div class="h-48 w-full rounded-lg overflow-hidden flex justify-center items-center">
                    <a href="#" class="flex justify-center items-center absolute text-2xl z-50">
                        <font-awesome-icon icon="fa-solid fa-eye" class="bg-gray-900 py-3 px-5 rounded-lg"></font-awesome-icon>
                    </a>
                    <img height="100%" width="100%" class="object-cover w-full h-full" :src="item.src" alt="">
                </div>
                <div class="leading-3">
                    <h1 class="text-lg font-medium">{{ item.title }}</h1>
                    <p class="textColor opacity-60 font-normal">{{ item.type }}</p>
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
            portItem: [
                {title: 'PanzerBoost', src: '/img/thumbs/panzer_thumb.webp', type: 'Web Design'},
                {title: 'Los Serranitos', src: '/img/thumbs/serranitos_thumb.webp', type: 'Web App'},
                {title: 'PAQPAQ', src: '/img/thumbs/paqpaq_thumb.webp', type: 'Web App'},
                {title: 'CannaLitoral', src: '/img/thumbs/canna_thumb.webp', type: 'Web App'},
                {title: 'DigitalBitSolutions', src: '/img/thumbs/digital_thumb.webp', type: 'Web Design'},
                {title: 'Aló Taxi Tumbes', src: '/img/thumbs/taxi_thumb.webp', type: 'Web Design'},
                {title: 'Encuadernaciones Antonio', src: '/img/thumbs/antonio_thumb.webp', type: 'Web Design'},
                {title: 'Carsas', src: '/img/thumbs/carsas_thumb.webp', type: 'Web Design'},
            ]
        }
    },
};

</script>

<style>
select::-ms-expand {
    display: none;
}
select{
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
}
</style>    