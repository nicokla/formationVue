<template>
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
</template>

<script>
import { options } from "../priorities";
export default {
  name: "Machin",
  props: {
    myElement: {
      type: Object,
      default: { title: "titi", priority: "high" },
    },
  },
  data() {
    return {
      options: options
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
  
};
</script>

<style></style>