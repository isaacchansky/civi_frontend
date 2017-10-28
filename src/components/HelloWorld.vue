<template>
  <div class="hello">
    <h1>civi</h1>
    <h2>Learn more about who represents you.</h2>
    <a href="http://api.civi.me">Let's go</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  display: inline-block;
  background-color: #209cee;
  border-radius: 4px;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 250ms ease-in-out;
}

a:hover {
  background-color: #333333;
}
</style>
