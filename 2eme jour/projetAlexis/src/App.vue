<template>
  <input type="text" v-model="myTodo.title" />
  <select v-model="myTodo.priority">
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <button @click="addElement()">add</button>
  <p>Priority low :</p>
  <ul>
    <Machin
      v-for="element in lowListe"
      v-bind:myElement="element"
      v-on:deleteEvent="deleteElement($event)"
    ></Machin>
  </ul>

  <p>Priority middle :</p>
  <ul>
    <Machin
      v-for="element in middleListe"
      v-bind:myElement="element"
      v-on:deleteEvent="deleteElement($event)"
    ></Machin>
  </ul>

  <p>Priority high :</p>
  <ul>
    <Machin
      v-for="element in highListe"
      v-bind:myElement="element"
      v-on:deleteEvent="deleteElement($event)"
    ></Machin>
  </ul>
  <br />
  <br />

  <MyComponent v-bind:variable="myTodo.title"></MyComponent>
</template>

<script>
import Machin from "./components/Machin.vue";
// import MyComponent from "./components/MyComponent.vue";
import { options } from "../src/priorities";

export default {
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
      options: options,
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
};
</script>

<style scoped></style>
