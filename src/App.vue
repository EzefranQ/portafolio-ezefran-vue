<template>

  <div class=" text-white">

    <main class="h-full max-w-6xl flex-col xl:flex-row m-auto xl:px-2 sm:px-14 px-3 md:py-16 py-0 flex justify-center items-start gap-5">
    
      <section class="h-full xl:w-auto w-full">
        <SideBar class="border-style xl:rounded-3xl rounded-xl" />
      </section>
      
      <section class="border-style xl:rounded-3xl rounded-xl w-full h-full">
        <AsideViews />
      </section>

    </main>

    <nav class="">
        <NavBar class="mt-5 md:hidden absolute w-screen"/> 
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
*{
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: #121212;
  font-family: 'Poppins', sans-serif;
}
.border-style{
  border: 2px solid #383838;
}
.sub-header hr{
  width: 40px;
  height: 4.5px;
  background: rgb(255, 174, 0);
  border-color: rgb(255, 174, 0);
}
section{
  background: #1e1e1f;
}
@font-face {
  font-family: 'Poppins';
  src: url('/src/assets/font/Poppins-Regular.ttf');
  font-display: swap;
}
</style>
