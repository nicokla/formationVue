
Intro : Pourquoi Vue.js ?

Probleme de jquery / querySelector
il faut synchroniser l'ui et les data manuellement

Solutions, frameworks js : vue, react, angular, svelte

Objectif :
- la reactivité
cad, garder synchronisées les données et l'interface du site automatiquement
- organisation du code en composants : plus propre (fichiers moins gros, logique separée en composants reutilisables)
- le routing (navigation dans l'appli)

Exemple de composant (balise personnalisée et avec des fonctions js associées):
<mon-composant argument1="simple texte" :argument2="...dujs..." > ... </mon-composant>

A chaque composant est associé du code html/css pour son apparence, et du js pour son fonctionnement (variables et fonctions). un composant peu prendre en entrée des arguments, appelés des props en vue.




-----------------------------------------------

Le cours d'aujourd'hui

Decouverte de Vue et de la structure d'un component.

JS stuff:
  data = les variables du component
  methods = les fonction du component
  computed = si on veut avoir une variable donnée calculée a partir d'autres données

HTML stuff:
- hors des balises:
{{}}

- dans les balises (--> directives):
* v-if, v-else-if, v-else
https://fr.vuejs.org/v2/guide/conditional.html

* v-for
https://fr.vuejs.org/v2/guide/list.html

* v-model (ui input) <--> (data) (double binding)
https://v3.vuejs.org/guide/forms.html#radio

* v-on = @
https://fr.vuejs.org/v2/guide/events.html
@click, @input, @change 
@update @touchstart @touchend 
@mousedown @mouseup @keyup @keydown
+ event personnalisés (demain)

* v-bind = :
https://fr.vuejs.org/v2/guide/syntax.html#Attributs
<mon-composant argument1="simple texte" :argument2="...dujs..." > ... </mon-composant>





-----------------

Divers trucs en plus


- attention 1 
<MyComponent :machin="...blabla..."> ---> ne peut pas utiliser {{ }} dans le blabla

- attention 2
this est necessaire quand on appelle une fonction / data depuis l'interieur de <script>, alors que ce n'est pas necessaire quand on l'appelle depuis <template>

- attention 3
les virgules

- astuce 1
https://fr.vuejs.org/v2/guide/class-and-style.html
:style="getStyleOfMachin(...)"
:class="getClassOfBidule(...)"

- astuce 2
dev tools (au cas où)

- astuce 3
<style scoped>

- anecdote : difference vue/react
vue mets du javascript dans le html
alors que
react mets du html dans le javascript (jsx)

- anecdote 2:
Reactivité sans framework (vanilla js) : web components
Liens si vous etes interessés:
  grafikart:
  https://www.youtube.com/watch?v=lKm22TA5pzw
  
  autre lien bien:
  https://www.youtube.com/watch?v=mnbrxARvCTQ

- interessant 1: event stop propagation, .stop (cf grafikart)
https://javascript.info/bubbling-and-capturing

-----------------

- interessant 2:

Il existe plusieurs syntaxes possibles façon de declarer un composant vue :
- deja, on peut le declarer 
  * soit dans un fichier js directement (cf tutos grafikart 1 à 8 par exemple, ou encore compositionAPI_example).
  * soit dans un fichier au format .vue, qu'on appelle aussi single file component (ceci est possible si on utilise vue-cli ou vite, pas si on utilise un lien cdn. il y a une etape de compilation en js qui est realisee par vue-cli ou vite.)
- de plus il existe 3 types de syntaxes en gros:
  * vue 2
  * vue 3
  * vue 3 + "composition api"
On utilise dans ce cours les fichiers au format .vue (compilation avec vite) et la syntaxe vue 3 (classique, sans la "composition api"). La syntaxe vue 3 classique est quasi identique a la syntaxe vue 2 classique, donc on enverra des liens vers les deux docs qui expliquent la meme chose la plupart du temps.

----------------

- attention 4
il y a quand meme des petites difference entre vue 2 et vue 3
https://v3.vuejs.org/guide/migration/introduction.html
par exemple data vs data()
https://v3.vuejs.org/guide/migration/data-option.html#overview
