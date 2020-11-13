<template>
<div>
  NoteBooks
  <RouterLink exact to="/note/1">笔记本1</RouterLink>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component export default class NoteBooks extends Vue{

}
</script>

<style lang="scss" scoped>

</style>