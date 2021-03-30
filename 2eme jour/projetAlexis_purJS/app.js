const optionsGlobal = [
  { text: "High", value: "high" },
  { text: "Middle", value: "middle" },
  { text: "Low", value: "low" },
];


let Machin = {
	name: "Machin",
  props: {
    myElement: {
      type: Object,
      default: { title: "titi", priority: "high" },
    },
  },
  data() {
    return {
      options: optionsGlobal
    };
  },
  mounted() {
    console.log(`hello from ${this.myElement.title}`)
    this.showProps();
  },
  beforeUnmount(){
    console.log(`bye bye from ${this.myElement.title}`)
  },
  methods: {
    deleteElement() {
      this.$emit("deleteEvent", this.myElement.id);
    },
    showProps() {
      console.log(this.myElement);
    },
  },
  
	template: /*html*/`
  <li>
    {{ myElement.title }}
    <select v-model="myElement.priority">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>

    <!-- todo: choice of priorities, v-model sur myElement.priority -->
    <button @click="deleteElement()">delete</button>
  </li>
	`
}

let vm = new Vue({
	el: '#app',
	name: "App",
  components: { Machin }, // MyComponent
  data() {
    return {
      myTodo: { title: "", priority: "high" },
      liste: [
        // middle high low
        { id: 0, title: "1er todo", priority: "high" },
        { id: 1, title: "2eme todo", priority: "middle" },
        { id: 2, title: "3eme todo", priority: "low" },
        { id: 3, title: "4eme todo", priority: "high" },
        { id: 4, title: "5eme todo", priority: "low" },
        { id: 5, title: "6eme todo", priority: "middle" },
      ],
      priority: "high",
      options: optionsGlobal,
    };
  },
	methods: {
    addElement() {
      this.liste.push({
        id: this.liste.length,
        title: this.myTodo.title,
        priority: this.myTodo.priority,
      });
    },
    deleteElement(id) {
      this.liste.splice(
        this.liste.findIndex((e) => e.id === id),
        1
      );
    },
  },
  computed: {
    lowListe() {
      return this.liste.filter((e) => e.priority == "low");
    },
    middleListe() {
      return this.liste.filter((e) => e.priority == "middle");
    },
    highListe() {
      return this.liste.filter((e) => e.priority == "high");
    },
    priorities() {
      return Machin.data;
    },
  },
})