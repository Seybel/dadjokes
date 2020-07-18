<template>
<div>
    <nuxt-link to="/jokes">Back to Jokes</nuxt-link>
    <h2>
        {{ joke.joke }}
    </h2>
    <hr />
    <small>Joke ID: {{ joke.id }}</small>
</div>
</template>

<script>
import axios from 'axios'

export default {
data() {
    return {
        joke: {}
    }
},
created () {
    this.getDadJokesById()
},
methods: {
    async getDadJokesById() {
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        }

        try {
           const res  = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config)
           console.log(res.data)
            this.joke = res.data
        } catch (error) {
            console.log(`API: ${error}`)
        }
    }
},
head() {
    return {
        title: 'Dad Jokes',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Best place for corny dad jokes'
            }
        ]
    }
}
}
</script>

<style>

</style>