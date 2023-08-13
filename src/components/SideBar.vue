<template>
    <section class="py-4 px-2 flex flex-col gap-5 xl:w-72 w-full relative overflow-hidden xl:rounded-3xl rounded-xl ">
        <header class="flex xl:flex-col flex-row justify-start xl:justify-center items-center md:gap-4 gap-3 p-2">
            <div class="xl:w-40 xl:h-40 lg:w-28 w-20 border-style fix-logo">
                <img class="" src="/img/icon.webp" alt="logo">
            </div>
            <div class="text-center xl:mt-4 mt-0">
                <h1 class="sm:text-2xl lg:text-lg text-sm font-semibold w-full">Francisco Quijada</h1>
                <div class="xl:mt-4 mt-2 flex flex-row xl:flex-col items-center justify-center">
                    <h1 class="font-light sm:text-sm text-xs">Web Developer</h1>
                    <span class="sm:mr-2 mr-1 xl:hidden ">,</span>
                    <h1 class="font-light sm:text-sm text-xs">Front End</h1>
                </div>
            </div>
        </header>
        <section class="w-full">
            <FooterSideBar/>
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
};
</script>

<style scoped>
button{
    background: rgba(43,43,44,.75);
    border: 2px solid #383838;  
    transform: translate(5px, -5px);
}
@media screen and (max-width: 400px) {
    .fix-logo{
        width: 20%;
    }
}

</style>