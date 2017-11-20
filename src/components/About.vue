<template>
  <main class="about">
    <h1>{{fields.title}}</h1>
    <h2>{{fields.lead}}</h2>
    <div class="body" v-html="fields.body"></div>
  </main>
</template>

<script>
import client from '@/services/contentful'
import marked from 'marked'

let fields = {}

export default {
  name: 'About',
  data () {
    return {
      fields
    }
  },
  created () {
    // get about entry. entry ID found in contentful admin UI
    client.getEntry('66ayHnMlA42kwwCO66Sy0E')
    .then((response) => {
      this.fields = response.fields
      this.fields.body = marked(this.fields.body)
    })
    .catch(console.error)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
