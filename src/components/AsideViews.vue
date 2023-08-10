<template>
    <div class="flex justify-between relative p-10 overflow-hidden">

        <nav>
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
    <div>

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