<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({components: {HelloWorld}})
export default class App extends Vue {

}
</script>

<style lang="scss">
@import "index";
</style>
