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
        
        <section class="sm:mt-9 mt-8 ml-2 grid gap-y-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center">
            <article class="flex flex-col h-60 w-11/12 hover-img relative overflow-hidden" v-for="item in portItem" :key="item.id">
                <div class="h-48 w-full rounded-lg overflow-hidden flex justify-center items-center">
                    <a href="#" @click="funcModal" class="text-2xl opacity-70">
                        <font-awesome-icon icon="fa-solid fa-eye" class="bg-gray-900 py-3 px-5 rounded-lg z-50"></font-awesome-icon>
                    </a>
                    <img height="100%" width="100%" class="object-cover w-full h-full hover:cursor-pointer" :src="item.src" alt="">
                </div>
                <div class="leading-3 z-50 bg-fix pt-4 pb-4">
                    <h1 class="text-lg font-medium">{{ item.title }}</h1>
                    <p class="textColor opacity-60 font-normal">{{ item.type }}</p>
                </div>
            </article>
        </section>
    </div>

    <transition enter-active-class="ease-out duration-300"
        enter-class="opacity-0" enter-to-class="opacity-100"
        leave-active-class="ease-in duration-200"
        leave-class="opacity-100" leave-to-class="opacity-0">

        <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-show="modal">
        <div class="fixed inset-0 color-modal transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <transition enter-active-class="ease-out duration-300"
            enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="ease-in duration-200"
            leave-class="opacity-100 translate-y-0 sm:scale-100" leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
            <div v-show="modal" class="relative transform overflow-hidden rounded-lg bg-fix text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl mb-10 pb-10">
                <div class="bg-fix px-2 pb-2 pt-3 sm:p-3 sm:pb-3">
                    <div>
                        <img height="100%" width="100%" class=" rounded-lg object-cover w-full h-full hover:cursor-pointer" src='/img/thumbs/paqpaq.webp' alt="">
                    </div>
                    <div class="leading-3 py-4 sm:px-6 px-2">
                        <h1 class="text-lg font-medium">PAQPAQ</h1>
                        <div class="flex gap-4 items-center  textColor opacity-50 sm:mt-1 mt-3">
                            <p class="sm:text-sm text-xs flex flex-col sm:gap-0 gap-2 sm:flex-row text-center">
                                <font-awesome-icon icon="fa-solid fa-calendar" class="sm:mr-1 mr-0"></font-awesome-icon>
                                Enero 2023
                            </p>
                            |
                            <p class="sm:text-sm text-xs flex flex-col sm:gap-0 gap-2 sm:flex-row text-center">
                                <font-awesome-icon icon="fa-solid fa-folder" class="sm:mr-1 mr-0"></font-awesome-icon>
                                Web Desing
                            </p>
                            |
                            <a href="#" class="sm:text-sm text-xs flex flex-col sm:gap-0 gap-2 sm:flex-row text-center">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="sm:mr-1 mr-0"></font-awesome-icon>
                                Ver Proyecto
                            </a>
                            
                        </div>
                        <p class="textColor opacity-80 font-normal leading-6 mt-6">PAQPAQ es un Sistema de envios del alta presición. Acá colaboré en el mantenimiento e integracion de una API para la geolocalización, haciendo mas preciso los datos de envio.</p>
                    </div>
                </div>
                <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" @click="funcModal" class="mt-3 inline-flex w-full justify-center rounded-md bg-fix px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-50 sm:mt-0 sm:w-auto">Cerrar</button>
                </div>
            </div>
            </transition>
            </div>
        </div>
        </div>

    </transition>

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
                {title: 'PanzerBoost', src: '/img/thumbs/panzerboost.webp', type: 'Web Design'},
                {title: 'Los Serranitos', src: '/img/thumbs/serranitos.webp', type: 'Web App'},
                {title: 'DigitalBitSolutions', src: '/img/thumbs/digital.webp', type: 'Web Design'},
                {title: 'Aló Taxi Tumbes', src: '/img/thumbs/alotaxi.webp', type: 'Web Design'},
                {title: 'CannaLitoral', src: '/img/thumbs/cannalitoral.webp', type: 'Web App'},
                {title: 'Encuadernaciones Antonio', src: '/img/thumbs/antonio.webp', type: 'Web Design'},
                {title: 'Carsas', src: '/img/thumbs/carsas.webp', type: 'Web Design'},
                {title: 'PAQPAQ', src: '/img/thumbs/paqpaq.webp', type: 'Web App'},
            ],
            modal:  false,
        }
    },
    methods: {
        funcModal(){
            this.modal = !this.modal
        }
    }
};

</script>

<style>
.bg-fix{
    background: #1e1e1f;
}
.hover-img a{
    z-index: -1;
    position: absolute;
    transform: translateY(200px);
    transition: 400ms;
}
.hover-img:hover a{
    transform: translateY(0px);
    z-index: 2;
}
.hover-img a:hover{
    z-index: 1;
}
.hover-img a:hover ~ img{
    scale: 1.3;
    transition: 400ms;
}
@media screen and (max-width: 767px){
    .bg-fix{
    background: #1e1e1f;
}
.hover-img a{
    z-index: 2;
    position: absolute;
    transform: translateY(0px);
    transition: 400ms;
}
}
.color-modal{
    background: rgb(30, 30, 31, .8);
    transform: translate(0, -0);    
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
}
</style>    