<template>
    <div class="flex justify-between relative py-10 md:px-10 sm:px-5 px-3 overflow-hidden">

        <nav class="">
            <NavBar /> 
        </nav>

        <section class="mt-3">
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
</style>