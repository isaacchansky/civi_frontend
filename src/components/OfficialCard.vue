<template>
  <div class="official">
    <h3>{{official.name}}</h3>
    <div :class="['party-flag', 'party-' + official.party]">
      {{official.party}}
    </div>
    <div class="sections">
      <div class="section">
        <img v-bind:src="official.photoUrl" alt="" class="official-photo">
      </div>
      <div class="section">
        <ul class="urls" v-if="official.urls">
          <li v-for="url in official.urls">
            <a :href="url">{{url}}</a>
          </li>
        </ul>
        <ul class="phones" v-if="official.phones">
          <li v-for="phone in official.phones">
            {{phone}}
          </li>
        </ul>
        <ul class="address" v-if="official.address">
          <li v-for="addr in official.address">
            {{addr.line1}} {{addr.line2}}
            <br>
            {{addr.city}} {{addr.state}} {{addr.zip}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfficialCard',
  props: ['official'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .official {
    border: 1px solid #ccc;
    box-shadow: 0 1px 2px 0px rgba(0,0,0,0.2);
    padding: 1rem;
    margin-bottom: 1rem;
    position: relative;
  }
  .official-photo {
    width: 5rem;
    border-radius: 2px;
  }
  .party-flag {
    position: absolute;
    top: 1rem;
    right: 0;
    display: inline-block;
    padding: 0.25rem 1rem 0.25rem 0.5rem;
    font-size: 0.75rem;
    background: #666;
    color: #fff;
    font-weight: bold;
  }
  .party-flag.party-Republican {
    background: #b11212;
  }
  .party-flag.party-Democrat,
  .party-flag.party-Democratic {
    background: #125db1;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
  }

  ul li {
    font-size: 0.8rem;
  }

  h3 {
    margin-top: 0;
  }

  .sections {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .section + .section {
    margin-left: 1rem;
  }
</style>
