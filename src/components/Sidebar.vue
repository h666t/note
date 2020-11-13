<template>
  <div id="sidebar">
    头像
    <div class="tags">
      <RouterLink class="tag" exact to="/">
        <Icon name="#home"/>
      </RouterLink>
      <RouterLink class="tag" exact to="/notebooks">
        <Icon name="#notebook"/>
      </RouterLink>
      <RouterLink class="tag" exact to="/trash/1">
        <Icon name="#trash"/>
      </RouterLink>
      <RouterLink class="logout" exact to="/login">登出</RouterLink>
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
@import "~@/helper.scss";
#sidebar{
  height: 100vh;
  background: $black;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon {
  width: 24px;
  height: 24px;
  fill: white;
}
.tags{
  display: flex;
  flex-direction: column;
  >.router-link-active{
    background-color: #5e6266;
  }
  >.logout{
    position: absolute;
    bottom: 20px;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
  }
  >.tag{
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
  }
}
a{
  color: white;
}
</style>