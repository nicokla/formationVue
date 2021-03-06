

1) vue-router
Install
npm install vue-router@next -S

basic : create route with a name and a url, navigate to another view

pass arguments when navigating, get those when arriving.

------------------

2) Vue 3 : Breaking changes from Vue 2, Composition API, <script setup>

Nouveau (Vue 3 ==> released 18 Septembre 2020)
Methode alternative pour creer un component, different d'un composant vue classique, la fonction setup remplace les champs habituels (data, methods, etc.).

Breaking changes of Vue 3 :
https://youtu.be/ZjBiBVNWfJ8
Composition API :
https://youtu.be/bwItFdPt-6M
Github of the videos :
https://github.com/academind/vue-3-update

cf projets
"./compositionAPI_scriptSetup"
"../autres ressources/compositionAPI_example"
"../autres ressources/compositionAPI_todoApp"

Documentation
https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api
https://v3.vuejs.org/guide/composition-api-setup.html#arguments

import { defineProps, onMounted, reactive, ref, useContext, watch } from "vue";



---------------------------
3) Infos en plus pour finir
---------------------------

3.1) CSS / components dans vue 

On peut mettre des media-queries (pour avoir une app responsive mobile) et des keyframes (animations) dans la balise <style> des fichiers au format ".vue".

Vuetify est la librairie de composants la plus utilisé en Vue.js.
Probleme : vuetify est sous vue 2, pas encore porté sous vue 3 (en fait il est en alpha mais pas pret pour la production).
Le meme probleme existe pour bcp d'autres libraries qui n'ont pas encore ete updatées vers Vue 3.
Un exemple de library qui a ete updatée est Ant Design Vue.

CSS pur plutot que vuetify : par exemple, templates tailwind
Installation : https://tailwindcss.com/docs/guides/vue-3-vite
Exemple : 
- vueRouter project uses tailwind.css
- google "login template tailwind" : https://codepen.io/PortSpasy/pen/GRJyJyZ
Tailwind cheatsheet : https://nerdcave.com/tailwind-cheat-sheet
Flexbox help: https://flexbox.help/

On peut trouver des composants sur le web:
Navigation sidebar, vue 2 : https://yaminncco.github.io/vue-sidebar-menu/#/
Navigation sidebar, vue 3 : https://github.com/yaminncco/vue-sidebar-menu/tree/next
Youtube player : https://www.npmjs.com/package/vue-youtube

Icons: 2 techniques
https://github.com/antfu/vite-plugin-icons
https://vuetifyjs.com/en/features/icon-fonts/#install-material-icons
see list of icons here
https://pictogrammers.github.io/@mdi/font/5.4.55/

Et des libraries de composants (en plus de vuetify):
https://blog.logrocket.com/top-10-vue-component-libraries-for-2020/

--------------------

3.2) Debugging vue components with vue dev-tools plugins

https://v3.vuejs.org/guide/installation.html#vue-devtools

Chrome :
https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg

Firefox :
https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/


---------------------------------------
4) Trucs en plus que vous pouvez regarder :
---------------------------------------

4.1) Trucs avec des exemples dans "autres ressources"

++++++++++++(1)
* directives personalisées, v-truc="" (cf dossier "../autres ressources/tuto grafikart/5")

* watched properties (cf grafikart/4)
https://vuejs.org/v2/guide/computed.html#Watchers

* slot (cf grafikart/7)
https://v3.vuejs.org/guide/component-slots.html

* MEVN (mongo express vue node) : cf dossier "../autres ressources/tuto mevn vue 2"

* vuetify
https://vuetifyjs.com/en/components/navigation-drawers/

* SCSS
npm install -D sass

++++++++++++++(2)
* brother components communication:
https://stackoverflow.com/questions/38616167/communication-between-sibling-components-in-vue-js-2-0
Solution 1 : 
  use mixins
Solution 2:
  Component 1:
  this.$root.$emit('eventing', data);
  Component 2:
  mounted() {
      this.$root.$on('eventing', data => {
          console.log(data);
      });
  }

-----------------

4.2) Trucs sans exemples dans "autres ressources"

++++++++++++++++++++(3)
* mixins (to share data between brother components ?)
https://v3.vuejs.org/guide/mixins.html

++++++++++++++++++++++(4)
* render functions
https://v3.vuejs.org/guide/migration/render-function-api.html
----> Use jsx in vue :
https://fr.vuejs.org/v2/guide/render-function.html


provide / inject
https://v3.vuejs.org/guide/component-provide-inject.html

+++++++++++++++++++++(5)
* outils pour faire des animations inclus dans vue
https://fr.vuejs.org/v2/guide/transitions.html
https://v3.vuejs.org/guide/transitions-list.html#list-entering-leaving-transitions

* vuex (to have a store of data shared between all components)
https://vuex.vuejs.org/guide/

* Nuxt 
Utilise vue cote backend, pour faire une app de type SSR = server side rendering
Avantage: les pages loadent plus vite qu'une app de type SPA = single page app cad qu'une app faite en pur Vue.js. En Vue.js toute les pages sont loadees d'un coup au debut, alors qu'elles sont loadées a chaque changement de pages en Nuxt.
Inconvenient: fait travailler le serveur plus intensément car la generation du rendu se fait cote serveur et non plus cote client.
https://fr.nuxtjs.org/
