<template>
  <header>
    <div class="logo">civi</div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Find Reps</router-link>
        </li>
        <li>
          <router-link to="/about">What's this all about?</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'CiviHeader',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
