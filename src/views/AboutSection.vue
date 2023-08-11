<template>
    <div >
        <header class="sub-header">
            <h1 class="font-semibold text-3xl">About</h1>
            <hr class="rounded-2xl">
        </header>
        <section class="mt-10 px-5 leading-7">
            <p>
                Soy un desarrollador web con dos años de experiencia en el campo. Tengo conocimientos en HTML, CSS, Bootstrap, Tailwind, Vue, EJS y JavaScript. Tengo conocimientos de las últimas tecnologías web y siempre estoy al día de los últimos desarrollos.
                    <br><br>   
                Soy una persona proactiva, responsable y con ganas de aprender. Estoy siempre buscando nuevos retos y desafíos. Tengo una gran capacidad de trabajo en equipo y soy capaz de trabajar de forma independiente.
                    <br><br>   
                Estoy seguro de que puedo aportar un gran valor. Soy una persona creativa y con ideas nuevas. Tengo capacidad en la resolución de problemas y siempre estoy buscando formas de mejorar la experiencia de usuario.
                    <br><br>    
                Aparte de ser desarrollador, disfruto la mayor parte de mi tiempo practicando calistenia y jugando algún videojuego.
            </p>
        </section>
        <section class="mt-10 grid grid-cols-2 gap-y-8 gap-x-5">
            <article v-for="article in articles" :key="article.id" class="max-h-80 max-w-2xl flex gap-5 borderStyle p-8">
                <div class="w-20 h-20">
                    <img class="translate-y-3" :src="article.src" alt="">
                </div>
                <div class="flex flex-col gap-2">
                    <h1>{{ article.title }}</h1>
                    <p>{{ article.content }}</p>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: [
                {title: 'Vue', content: 'I build modern and advanced websites and applications with React or Expo by React Native.', src: '/../logo.png'},
                {title: 'JavaScript', content: 'I build modern and advanced websites and applications with React or Expo by React Native.', src: '../JavaScript-svg.png'},
                {title: 'Tailwind', content: 'I build modern and advanced websites and applications with React or Expo by React Native.', src: '../Tailwind.png'},
                {title: 'Angular', content: 'I build modern and advanced websites and applications with React or Expo by React Native.', src: '../Angular.png'},
            ]
        }
    },
};
</script>

<style scoped>
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

</style>