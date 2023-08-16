<template>
    <div class="relative md:py-6 py-5 md:px-10 sm:px-5 px-5">

        <nav class="lg:absolute hidden lg:block right-0 md:top-0 md:w-auto">
            <NavBar class="" /> 
        </nav>

        <section class="mt-3 mb-2.5">
            <router-view class="" v-slot="{Component}">
                <transition >
                    <component :is="Component">
                    </component>
                </transition>
            </router-view>  
        </section>

    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
    name: 'AsideViews',
    components: {
        NavBar,
    }
};
</script>

<style>
.v-enter-active{
  transition: opacity 0.5s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.sub-header hr{
    width: 40px;
    height: 4.5px;
    background: rgb(255, 174, 0);
    border-color: rgb(255, 174, 0);
}
</style>