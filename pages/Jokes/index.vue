<template>
<div>
  <SearchJoke v-on:search-text="searchText" />
  <Joke v-for="joke in jokes" :key="joke.id"
  :id="joke.id" :joke="joke.joke"
  />
</div>
</template>

<script>
import axios from 'axios'
import Joke from '../../components/Joke'
import SearchJoke from '../../components/SearchJoke'

export default {
components: {
    SearchJoke,
    Joke
},
data() {
    return {
        jokes: []
    }
},
created () {
    this.getDadJokes()
},
methods: {
    async getDadJokes() {
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        }

        try {
           const res  = await axios.get('https://icanhazdadjoke.com/search', config)
           console.log(res.data)
            this.jokes = res.data.results
        } catch (error) {
            console.log(`API: ${error}`)
        }
    },
    async searchText(text) {
        const config = {
            headers: {
                'Accept': 'application/json'
            }
        }

        try {
           const res  = await axios.get(`https://icanhazdadjoke.com/search?term=${text}`, config)
            this.jokes = res.data.results
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