<template>
  <div  id="sidebar">
    头像
    <div class="icons">
      <RouterLink exact to="/" >
      <Icon name="#home"/>
        笔记
      </RouterLink>
      <RouterLink exact to="/notebooks">
      <Icon name="#notebook"/>
        笔记本
      </RouterLink>
      <RouterLink exact to="/trash/1">
      <Icon name="#trash"/>
        回收站
      </RouterLink>
      <RouterLink exact to="/login">登录</RouterLink>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
@Component({
  components: {Icon}
}) export default class Sidebar extends Vue {

}
</script>

<style lang="scss" scoped>

</style>