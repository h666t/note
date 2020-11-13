<template>
<div>
  笔记1 id:{{id}}
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component export default class NoteBooks1 extends Vue{
   id = this.$route.params.noteId
}
</script>

<style lang="scss" scoped>

</style>