<template>
    <div>
        <nuxt-link :to="`/jokes/${id}`">
            <div class="joke">
                {{ joke }}
            </div>
            <!-- <small>{{id}}</small> -->
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'Joke',
    props: ['joke', 'id']
}
</script>

<style>
.joke {
    padding: 1rem;
    border: 1px dotted #ccc;
    margin: 1rem 0;
}
</style>