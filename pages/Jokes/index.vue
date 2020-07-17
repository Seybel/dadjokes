<template>
  <div>jokes</div>
</template>

<script>
import axios from 'axios'

export default {
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
           const { res } = await axios.get('https://icanhazdadjoke.com/search', config)
           console.log(res)
            // this.jokes = res
        } catch (error) {
            console.error(error)
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