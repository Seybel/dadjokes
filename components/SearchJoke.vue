<template>
<div class="search">
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Search Jokes..." v-model="text">
      <input type="submit" value="search">
  </form>
</div>
</template>

<script>
export default {
data () {
    return {
        text: ""
    }
},
methods: {
    onSubmit () {
        this.$emit('search-text', this.text)
    }
}
}
</script>

<style>
div.search {
  display: flex;
  justify-content: center;
  align-self: center;
}
</style>