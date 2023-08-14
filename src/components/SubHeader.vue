<template>
    <div>
        <header class="sub-header w-full">
            <h1 class="font-semibold text-2xl">{{ title }}</h1>
            <hr class="rounded-2xl mt-2">
        </header>
    </div>
</template>

<script>
    export default {
        name: 'SubTitle',
        props:{
            title: String
        }
    };
</script>

<style>

</style>