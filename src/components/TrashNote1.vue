<template>
<div>trashNote1 id:{{trashNoteId}}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component export default class TrashNote1 extends Vue{
  trashNoteId=this.$route.params.trashNoteId
}
</script>

<style lang="scss" scoped>

</style>