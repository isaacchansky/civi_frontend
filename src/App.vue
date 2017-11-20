<template>
  <div id="app">
    <router-view />
    <civiFooter />
  </div>
</template>

<script>
import civiFooter from '@/components/civi-Footer'

export default {
  name: 'app',
  components: {
    civiFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
main {
  flex: 1;
}
body {
  margin: 0;
}

a {
  color: #2198C0;
  font-weight: 500;
}
</style>
