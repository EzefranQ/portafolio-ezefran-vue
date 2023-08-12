<template>
    <nav class="flex flex-wrap justify-center md:rounded-bl-2xl rounded-tr-2xl md:rounded-tl-none rounded-tl-2xl
        md:justify-start md:gap-x-8 md:gap-y-8 gap-y-2 sm:gap-x-10 gap-x-2.5 md:px-10 py-5 border-style z-50">
        <ul v-for="item in links" :key="item.id">
            <li>    
                <RouterLink :to="item.href" class="font-medium md:text-base text-sm">
                    {{ item.link }}
                </RouterLink>   
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            links: [
                {link: 'About', href: '/'},
                {link: 'Resume', href: '/resume'},
                {link: 'Portfolio', href: '/portfolio'},
                {link: 'Blog', href: '/blog'},
                {link: 'GitHub', href: '/github'},
            ]
        }
    }
};
</script>

<style>
.router-link-active{
    color: rgb(255, 174, 0);
}
.trans{
    transform: translate(5px, -5px);
}
nav{
    background: rgba(43,43,44,.9);      
}
@media screen and (max-width: 768px) {
    .trans{
        transform: translate(0, -0);    
        bottom: 0; 
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
    }
}

</style>