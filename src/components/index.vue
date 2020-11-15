<template>
  <div class="page">
    <h1>Hello World</h1>
    <child @click.self='onClickChild'></child>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { get } from '../utils/http';
import { mapState } from "vuex";
import { Vue, Component, Prop } from 'vue-property-decorator'
import Child from './child.vue';

@Component({
  name: 'ChildCompoenent',
  components: {
    Child
  }
})
export default class HomePage extends Vue {
  message:string = 'hello world';
  onClick():void {
    console.log('hello typescript')
  }
  onClickChild():void {
    console.log('you click the child')
  }
  mounted() {
    console.log('hello typescript');
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
