<template>
    <div >
        <header class="sub-header">
            <h1 class="font-semibold text-2xl">About</h1>
            <hr class="rounded-2xl mt-2">
        </header>
        <section class="sm:mt-10 mt-6 ml-2 leading-7 md:text-base text-sm textColor">
            <p>
                Soy un desarrollador web con dos años de experiencia en el campo. Tengo conocimientos en HTML, CSS, Bootstrap, Tailwind, Vue, EJS y JavaScript. Tengo conocimientos de las últimas tecnologías web y siempre estoy al día de los últimos desarrollos.
                    <br><br>   
                Soy una persona proactiva, responsable y con ganas de aprender. Estoy siempre buscando nuevos retos y desafíos. Tengo una gran capacidad de trabajo en equipo y soy capaz de trabajar de forma independiente.
                    <br><br>   
                Estoy seguro de que puedo aportar un gran valor. Soy una persona creativa y con ideas nuevas. Tengo capacidad en la resolución de problemas y siempre estoy buscando formas de mejorar la experiencia de usuario.
                    <br><br>    
                Aparte de ser desarrollador, disfruto la mayor parte de mi tiempo programando, practicando calistenia, jugando algún videojuego y con mi familia o amigos.
            </p>
        </section>
        <section class="mt-10 grid lg:grid-cols-2 grid-cols-1 place-items-center gap-y-8 gap-x-5 md:text-base text-sm">
            <article v-for="article in articles" :key="article.id" class="borderStyle flex gap-4 flex-col md:flex-row items-center justify-center md:justify-start min-w-full lg:h-44 md:h-40 sm:h-48 md:px-6 px-2 pt-8 xl:pt-0 md:pb-5 pb-0">
                
                <div class="">     
                    <svg viewBox="0 0 128 128" height="50" width="50" class="md:mb-5 mb-0">
                        <path :d="article.d" :fill="article.fill"></path>
                    </svg>
                </div>              
                <div class="flex flex-col gap-2 md:text-start text-center sm:pb-7 pb-0 md:h-24 ms:h-28 h-32 md:justify-start ">
                    <h1 class="md:text-xl text-lg">{{ article.title }}</h1>
                    <p class="textColor leading-6">{{ article.content }}</p>
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
                {title: 'Vue', content: 'He construido y colaborado en el desarrollo de sitios web y aplicaciones con Vue.', d: 'M0 8.934l49.854.158 14.3 24.415 14.3-24.415 49.548-.158-63.835 110.134zm126.987.637l-24.37.021-38.473 66.053L25.692 9.592l-24.75-.02 63.212 107.89z', fill: '#41b883'},
                {title: 'JavaScript', content: 'Para desarrollo general, sigo usando y profundizando JavaScript.', d: 'M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z', fill: '#F0DB4F' },
                {title: 'Tailwind', content: 'Diseño moderno y adaptativo a distintos dispositivos con Tailwind', d: 'M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0', fill: '#2298bd', tailMargin: ' md:-translate-y-2 translate-y-0'},
                {title: 'Angular', content: 'He utilizado Angular y TypeScript para el desarrollo de sitios web estáticos.', d: 'M52.864 64h23.28L63.769 38.123zM63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635L63.81 1.026zM48.044 75l-7.265 18.176-13.581.056 36.608-81.079-.07-.153h-.064l.001-.133.063.133h.141l.123-.274V12h-.124l-.069.153 38.189 81.417-13.074-.287-8.042-18.58-17.173.082', fill: '#C4473A'},
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
.textColor{
    color: #d6d6d6;
}
</style>