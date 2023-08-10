<template>
    <nav class="absolute right-0 top-0 flex gap-8 px-10 py-5 rounded-bl-2xl rounded-tr-2xl border-style trans">
        <ul v-for="item in links" :key="item.id">
            <li>
                <RouterLink :to="item.href" class="hover:text-slate-400 duration-150 ease-in font-medium">
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
                {link: 'Blog', href: '/github'},
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
    background: rgba(43,43,44,.75);
}
</style>