<template>
  <div class="livemap">
    <img v-bind:src="imageURL" alt="">
  </div>
</template>

<script>
/* eslint-disable no-new */
export default {
  name: 'LiveMap',
  data () {
    return {
      zoom: 2,
      lat: -73.115503,
      lng: 41.020021,
      token: 'pk.eyJ1IjoiaWNoYW5za3kiLCJhIjoiVHVfWmxJbyJ9.aEnFoqckTCgX6J3z5eutlQ',
      width: 700,
      height: 300
    }
  },
  computed: {
    imageURL () {
      return `https://api.mapbox.com/styles/v1/ichansky/cj9hswuvu3fq22rqqzt9t77hp/static/${this.lat},${this.lng},${this.zoom},0,0/${this.width}x${this.height}@2x?access_token=${this.token}&logo=false&attribution=false&fresh=true`
    }
  },
  mounted () {
    // window.mapboxgl.accessToken = 'pk.eyJ1IjoiaWNoYW5za3kiLCJhIjoiVHVfWmxJbyJ9.aEnFoqckTCgX6J3z5eutlQ'
    // new window.mapboxgl.Map({
    //   container: 'livemap',
    //   style: 'mapbox://styles/ichansky/cj9hswuvu3fq22rqqzt9t77hp',
    //   center: [-77.38, 39],
    //   zoom: 3
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .livemap {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 5rem;
    max-height: 25rem;
    background-color: #191a1a;
    text-align: center;
    overflow: hidden;
  }
  .livemap img {
    width:100%;
  }
</style>
