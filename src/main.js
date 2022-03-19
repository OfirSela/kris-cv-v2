import { createApp } from 'vue';
import App from './App.vue';

import Unicon from 'vue-unicons';
import { uniSuitcase, uniGraduationCap, uniShield, uniUser, uniUniversity, uniUserSquare, uniEnglishToChinese, uniHeartMedical, uniDesktop } from 'vue-unicons/dist/icons';

Unicon.add([uniSuitcase, uniGraduationCap, uniShield, uniUser, uniUniversity, uniUserSquare, uniEnglishToChinese, uniHeartMedical, uniDesktop]);

createApp(App)
  .use(Unicon)
  .mount('#app');
