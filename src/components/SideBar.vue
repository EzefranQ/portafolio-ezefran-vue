<template>
    <section class="py-10 px-8 flex flex-col gap-10 w-72">
        <header class="mt-5 flex flex-col justify-center items-center gap-4">
            <div class="w-40 h-4w-40 border bg-red-50">
                <img class="w-full h-full" src="../assets/2.png" alt="">
            </div>
            <div class="text-center mt-4">
                <h1 class="text-2xl font-semibold w-full">Francisco Quijada</h1>
                <div class="mt-4">
                    <h1 class="font-light text-sm">Web Developer</h1>
                    <h1 class="font-light text-sm">Front End</h1>
                </div>
            </div>
        </header>
        <hr class="w-52 m-auto">
        <section class="flex flex-col gap-9">
            <article v-for="contact in contacts" :key="contact.id" class="flex items-center gap-5">
                <div class="w-12 h-12 borderStyle text-xl flex justify-center items-center">
                    <i :class="contact.icon"></i>
                </div>
                <p class="text-slate-400">{{ contact.brand }}
                    <span class="block text-white">
                        {{ contact.nick }}
                    </span>
                </p>
            </article>
        </section>
        <hr class="w-52 m-auto">
        <section class="flex gap-7 text-2xl justify-center">
            <a href="#" class="bg-white h-10 w-10 rounded-full flex justify-center items-center text-slate-900 hover:text-white hover:bg-slate-900 border-2 border-transparent hover:border-white hover:text-xl duration-300">
                <i class="fa-regular fa-envelope"></i>
            </a>
            <button class="bg-white h-10 w-10 rounded-full flex justify-center items-center text-slate-900 hover:text-white hover:bg-slate-900 border-2 border-transparent hover:border-white hover:text-xl duration-300">
                <i class="fa-solid fa-language"></i>
            </button>
            <button class="bg-white h-10 w-10 rounded-full flex justify-center items-center text-slate-900 hover:text-white hover:bg-slate-900 border-2 border-transparent hover:border-white hover:text-xl duration-300">
                <i class="fa-solid fa-circle-half-stroke"></i>
            </button>
        </section>
    </section>
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            contacts: [
                {brand: 'Linkedin', nick: 'Ezefran', icon: 'fa-brands fa-linkedin'},
                {brand: 'Github', nick: 'EzefranQ', icon: 'fa-brands fa-github'},
                {brand: 'Phone', nick: '+58 4267849573', icon: 'fa-solid fa-phone'},
                {brand: 'Location', nick: 'Venezuela', icon: 'fa-solid fa-location-dot'},
            ]
        }
    },
};
</script>

<style scoped>
.borderStyle{
    background: linear-gradient(to bottom right,#404040,rgba(64,64,64,0) 50%);
    border-radius: 8px;
    box-shadow: -4px 8px 24px rgba(0,0,0,.25);
    position: relative;
    z-index: 1
}
.borderStyle::before{
    background: #202022;
    border-radius: inherit;
    content: "";
    inset: 1px;
    position: absolute;
    z-index: -1
}
hr{
    border-color: #383838;
}
</style>