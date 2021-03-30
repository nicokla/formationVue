<template>
  <li>
    {{ myElement.title }} : {{ myElement.priority }}
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
      options: [
        { text: "High", value: "high" },
        { text: "Middle", value: "middle" },
        { text: "Low", value: "low" },
      ],
    };
  },
  mounted() {
    this.showProps();
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