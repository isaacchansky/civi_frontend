<template>
  <footer>
    <nav>
      <ul>
        <li>
          <router-link to="/">civi</router-link>
        </li>
        <li>
          <router-link to="/about">About the civi project</router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'CiviFooter',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer {
    max-width: 60rem;
    margin: 0 auto;
    width: 90%;
  }
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

</style>
