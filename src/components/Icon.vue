<template>
  <svg class="icon">
    <use :xlink:href="name" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';
const importAll = (requireContent: __WebpackModuleApi.RequireContext) => requireContent.keys().forEach(requireContent);
try {
  importAll(require.context('../assets/icon', true, /\.svg$/));
} catch (e) {
  console.log(e);
}
//将所有'../assets/icon'中的svg都引入

@Component
export default class Icon extends Vue {
  @Prop(String) name!: string;
}
</script>

<style lang="scss" scoped>

</style>