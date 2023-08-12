<template>
    <section class="flex flex-col justify-center md:gap-6 gap-4 px-2">
        <hr class="w-full xl-w-52 m-auto">
        <section class="xl:flex xl:flex-col grid lg:grid-cols-2 grid-cols-1 sm:gap-10 gap-5 justify-center xl:w-auto lg:w-4/6 w-full ">
            
            <article v-for="contact in contacts" :key="contact.id" class="flex items-center gap-5">
                <div class="w-9 h-9 sm:w-12 sm:h-12 borderStyle md:text-xl text-lg flex justify-center items-center">    
                    <font-awesome-icon :icon="contact.icon" />  
                </div>
                <p class="text-slate-400 sm:text-base text-sm">{{ contact.brand }}
                    <span class="block text-gray-50">
                        {{ contact.nick }}
                    </span>
                </p>
            </article>
            
        </section>
        <hr class="w-full xl-w-52 m-auto">
        <section class="flex sm:gap-7 gap-5 text-2xl xl:justify-center lg:justify-end xl:w-auto md:w-4/12 pb-0.5">

            <a aria-label="Contact Me!" href="mailto:ezefranquijada@gmail.com" 
            class="bg-gray-50 sm:h-10 sm:w-10 w-8 h-8
            rounded-full flex justify-center items-center text-slate-900 hover:text-white
            hover:bg-slate-900 border-2 border-transparent hover:border-white duration-300
            sm:hover:text-xl hover:text-base text-base md:text-xl">
                <font-awesome-icon icon="fa-solid fa-envelope" />    
            </a>
            
            <button aria-label="Change Languaje" 
            class="bg-gray-50 sm:h-10 sm:w-10 w-8 h-8 rounded-full 
            flex justify-center items-center text-slate-900 hover:text-white hover:bg-slate-900 border-2 
            border-transparent hover:border-white duration-300
            sm:hover:text-xl hover:text-base text-base md:text-xl">
                <font-awesome-icon icon="fa-solid fa-language" />
            </button>

            <button aria-label="Change Color" 
            class="bg-gray-50 sm:h-10 sm:w-10 w-8 h-8 rounded-full 
            flex justify-center items-center text-slate-900 hover:text-white hover:bg-slate-900 
            border-2 border-transparent hover:border-white duration-300
            sm:hover:text-xl hover:text-base text-base md:text-xl">
                <font-awesome-icon icon="fa-solid fa-circle-half-stroke" />
            </button>

        </section>
    </section>
</template>

<script>
export default {
    name: 'FooterSideBar',
    data() {
        return {
            contacts: [
                {brand: 'Linkedin', nick: 'Ezefran', icon: `fa-brands fa-linkedin`},
                {brand: 'Github', nick: 'EzefranQ', icon: 'fa-brands fa-github'},
                {brand: 'Phone', nick: '+58 4267849573', icon: 'fa-solid fa-phone'},
                {brand: 'Location', nick: 'Venezuela', icon: 'fa-solid fa-location-dot'},
            ],
        }
    },
};
</script>

<style>
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