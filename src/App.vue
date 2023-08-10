<template>  
  <main class="h-full w-full py-16 px-20 flex justify-center items-start gap-10 text-white">

    <section class="h-full">
      <SideBar class="border-style rounded-3xl" />
    </section>

    <section class="border-style rounded-3xl w-full h-full">
      <AsideViews />
    </section>

  </main>
</template>

<script>
  import SideBar from "./components/SideBar.vue";
  import AsideViews from "./components/AsideViews.vue";
  export default {
    components: {
      SideBar,
      AsideViews
    },
  };

</script>

<style>
.border-style{
  border: 2px solid #383838;
}
.sub-header hr{
  width: 40px;
  margin-top: 18px;
  height: 4.5px;
  background: rgb(255, 174, 0);
  border-color: rgb(255, 174, 0);
}
h1, h2, h3, p, div, section{
  font-family: 'Poppins', sans-serif;
}
main{
  background-color: #121212;
}
section{
  background: #1e1e1f;
}
</style>
