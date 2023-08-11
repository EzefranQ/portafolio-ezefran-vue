<template>
    <section class="py-4 px-2 flex flex-col gap-5 xl:w-72 w-full relative overflow-hidden">

        <!-- <button class="absolute right-0 top-0 p-3 px-8 rounded-bl-2xl rounded-tr-2xl" @click="showMenu">
            <span v-show="!showNav">Mostrar</span>
            <span v-show="showNav">Ocultar</span>
        </button> -->

        <header class="flex xl:flex-col flex-row justify-start xl:justify-center items-center gap-4 p-2">
            <div class="xl:w-40 xl:h-40 md:w-28 w-20 border bg-red-50 ">
                <img class="w-full h-full" src="/icon.png" alt="">
            </div>
            <div class="text-center xl:mt-4 mt-0">
                <h1 class="sm:text-2xl lg:text-lg text-sm font-semibold w-full">Francisco Quijada</h1>
                <div class=" xl:mt-4 mt-2 flex flex-row xl:flex-col">
                    <h1 class="font-light sm:text-sm text-xs">Web Developer</h1>
                    <span class="mr-2 -mt-1 xl:-mt-0 xl:hidden ">,</span>
                    <h1 class="font-light sm:text-sm text-xs">Front End</h1>
                </div>
            </div>
        </header>
        <section class="w-full" v-show="showNav">
            <FooterSideBar />
        </section>
    </section>
</template>

<script>
import FooterSideBar from './FooterSideBar.vue';
export default {
    name: 'SideBar',
    components:{
        FooterSideBar,
    },
    data() {
        return {
            contacts: [
                {brand: 'Linkedin', nick: 'Ezefran', icon: 'fa-brands fa-linkedin'},
                {brand: 'Github', nick: 'EzefranQ', icon: 'fa-brands fa-github'},
                {brand: 'Phone', nick: '+58 4267849573', icon: 'fa-solid fa-phone'},
                {brand: 'Location', nick: 'Venezuela', icon: 'fa-solid fa-location-dot'},
            ],
            showNav: true,
        }
    },
    methods:{
        showMenu(){
            this.showNav = !this.showNav
        }
    }
};
</script>

<style scoped>
button{
    background: rgba(43,43,44,.75);
    border: 2px solid #383838;  
    transform: translate(5px, -5px);
}
</style>