<template>

  <div class="text-gray-50">

    <main class="fix-Wid flex-col xl:flex-row flex h-full w-screen m-auto pb-5 justify-center items-start gap-5 p-10">
    <!-- xl:px-2 md:px-28 sm:px-14 px-3 xl:py-16 py-10 -->
      <section class="h-full xl:w-auto w-full">
        <SideBar class="border-style xl:rounded-3xl rounded-xl" />
      </section>
      
      <section class="border-style xl:rounded-3xl rounded-xl xl:w-2/3 w-full">
        <AsideViews class="w-full"/>
      </section>

    </main>

    <nav class="h-20 bg-transparent mt-5 lg:hidden">
        <NavBar class="fixed bottom-0 left-0 w-screen trans"/> 
    </nav> 

</div>   

</template>

<script>
  import NavBar from "./components/NavBar.vue";
  import SideBar from "./components/SideBar.vue";
  import AsideViews from "./components/AsideViews.vue";

  export default {
    components: {
      SideBar,
      AsideViews,
      NavBar
    },
  };

</script>

<style>

</style>
