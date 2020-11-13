<template>
  <div id="app">
    <HelloWorld/>
    <RouterView/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Home from '@/views/Home.vue';

@Component({components: {Home, HelloWorld}})
export default class App extends Vue {

}
</script>

<style lang="scss">
@import "index";
</style>
