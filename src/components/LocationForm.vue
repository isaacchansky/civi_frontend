<template>
  <div class="location-selection">
    <div class="set-location-container"  v-if="fullLocation !== null">
      <div class="set-location">
        {{fullLocation.line1}} {{fullLocation.city}} {{fullLocation.state}} {{fullLocation.zip}}
      </div>
      <button class="reset-location" @click="resetLocation">&times;</button>
    </div>
    <form @submit.preventDefault="setLocation(loc)" v-if="fullLocation === null">
      <label for="address">Where do you live?</label>
      <div class="form-group">
        <input v-model="loc" placeholder="101 main street Some City, NY" id="address">
        <button>Find my reps</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LocationForm',
  data () {
    return {
      loc: this.location
    }
  },
  computed: mapGetters([
    'location',
    'fullLocation'
  ]),
  methods: mapActions([
    'setLocation',
    'resetLocation'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-group {
    display: flex;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    font-size: 1rem;
    padding: 0.5rem;
    width: 100%;
    margin-right: 1rem;
  }
  form button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: #2198C0;
    color: #fff;
    border: none;
    font-weight: bold;
    transition: all 250ms ease-in-out;
    white-space: nowrap;
  }
  form button:hover {
    background: #2f7b94;
  }

  .location-selection {
    margin-bottom: 1rem;
  }

  .set-location-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button.reset-location {
    border: none;
    font-size: 2rem;
    color: #666;
    background: transparent;
    line-height: 1;
    padding-bottom: 0.5rem;
    cursor: pointer;
  }
</style>
