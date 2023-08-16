import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tailwindcss from './style.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCircleHalfStroke, faEnvelope, faLanguage, faPhone, faLocationDot, faEye, faCalendar, faFolder, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faPhone, faLinkedin, faGithub, faCircleHalfStroke, faLanguage, faEnvelope, faLocationDot, faEnvelope, faEye, faCalendar, faFolder, faMagnifyingGlass)

createApp(App, tailwindcss).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
