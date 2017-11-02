<template>
  <div class="offices-listing">
    <div class="office" v-for="office in offices" v-if="segment === 'all' || segment === office.divisionId">
      <h2 class="office-name">{{office.name}}</h2>
      <a href="#" class="learn-more">Learn more about this office</a>
      <OfficialCard v-for="oIndex in office.officialIndices" :official="officials[oIndex]" />
    </div>
  </div>
</template>

<script>
import OfficialCard from '@/components/OfficialCard'

export default {
  name: 'OfficesListing',
  props: ['offices', 'officials', 'segment'],
  components: {
    OfficialCard
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .office {
    margin-bottom: 2rem;
  }
  .office-name {
    color: #666;
    margin-top: 0;
    margin-bottom: 0;
  }
  .learn-more {
    margin-bottom: 1rem;
    display: inline-block;
    font-size: 0.8rem;
  }

</style>
