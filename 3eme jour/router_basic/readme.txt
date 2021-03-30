
1) npm install vue-router@next -S

2) rajouter dans main.js

import router from './router' // !!!!!!!!!!!!
const app = createApp(App)
app.use(router)   // !!!!!!!!!!!!!
app.mount('#app')

3) creer router/index.js

4) faire les include des components dedans

5) creer les routes dans router/index.js

6) rajouter dans le composantracine
<router-view></router-view>

7) this.$router.push({name: 'MyRouteName'})

