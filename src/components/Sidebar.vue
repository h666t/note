<template>
  <div  id="sidebar">
    头像
    <div class="icons">
      <RouterLink exact to="/" >笔记</RouterLink>
      <RouterLink exact to="/notebooks">笔记本</RouterLink>
      <RouterLink exact to="/trash/1">回收站</RouterLink>
      <RouterLink exact to="/login">登录</RouterLink>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component export default class Sidebar extends Vue {

}
</script>

<style lang="scss" scoped>

</style>