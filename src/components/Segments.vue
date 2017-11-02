<template>
  <div class="segments" v-if="segments">
    <button class="segment-item" @click="setSelected('all')" v-bind:class="{ 'is-active': selectedSegment === 'all' }">All</button>
    <button class="segment-item" v-for="(segment, key) in segments" @click="setSelected(key)" v-bind:class="{ 'is-active': selectedSegment === key }">
      {{segment.name}}
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Segments',
  props: ['segments'],
  computed: mapGetters([
    'selectedSegment'
  ]),
  methods: {
    setSelected (segment) {
      this.$store.commit('setSelectedSegment', segment)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .segments {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 3rem;
  }
  .segment-item {
    cursor: pointer;
    color: #777;
    font-weight: bold;
    border: none;
    background: none;
    padding: 0.5rem;
    transition: all 250ms ease-in-out;
    border-bottom: 2px solid transparent;
  }

  .segment-item.is-active,
  .segment-item:hover {
    color: #333;
  }
  .segment-item.is-active {
    border-bottom-color: #333;
  }
</style>
