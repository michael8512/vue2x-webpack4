<template>
  <h1 @click="onClickHandle">child</h1>
</template>

<script lang="ts">
import axios from 'axios';
import { get } from '../utils/http';
import { mapState } from "vuex";
import Vue from 'vue';

interface IState {
  msg: string
}

export default Vue.extend ({
  data():IState {
    return {
      msg: 'hello child'
    };
  },
  mounted() {
    console.log(this.msg);
    let name = 'sad'
  },
  methods: {
    onClickHandle():void {
      console.log('you click the child');
    },
  }
})
</script>
<style lang="scss">

.page {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
