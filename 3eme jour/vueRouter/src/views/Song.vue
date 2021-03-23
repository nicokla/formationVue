<template>
  <h1>Song</h1>
  <p>song id: {{ $route.params.id }}</p>    
</template>

<script>
// Will be a modal later
export default {
  data() {
    return {
      projects: []
    }
  },
}
</script>
