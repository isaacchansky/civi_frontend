<template>
  <main>
    <LiveMap />
    <div class="hero">
      <h1>civi</h1>
      <h2>Learn more about who represents you.</h2>
    </div>
    <div class="cutin">
      <LocationForm />

      <Segments :segments="divisions" />
      <OfficesListing :offices="offices" :officials="officials" :segment="selectedSegment" />

    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LocationForm from '@/components/LocationForm'
import LiveMap from '@/components/LiveMap'
import Segments from '@/components/Segments'
import OfficesListing from '@/components/OfficesListing'

export default {
  name: 'Main',
  data () {
    return {
      loc: 'ny'
    }
  },
  components: {
    LocationForm,
    LiveMap,
    Segments,
    OfficesListing
  },
  computed: mapGetters([
    'location',
    'divisions',
    'offices',
    'officials',
    'selectedSegment'
  ]),
  methods: mapActions([
    'setLocation'
  ])
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

.hero {
  text-align: center;
  color: #fff;
  margin-top: -10rem;
}

.cutin {
  position: relative;
  padding: 1rem 2rem;
  background: #fff;
  width: 90%;
  max-width: 60rem;
  margin: 0 auto;
  min-height: 10rem;
}

@media screen and (min-width: 50rem) {
  .hero {
    margin-top: -15rem;
  }
}
</style>
