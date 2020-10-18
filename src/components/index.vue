<template>
  <div class="page">
    <h1>Hello World</h1>
  </div>
</template>

<script>
import axios from 'axios';
import { get } from '../utils/http';
import { mapState } from "vuex";

export default {
  name: 'page',
  components: {

  },
  mounted() {
    get('/getData').then(res=>{
      console.log(res.data);
    });
  },
  computed: {
    ...mapState([]),
  },
  methods: {
    
  }
}
</script>
<style lang="scss">

.page {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
