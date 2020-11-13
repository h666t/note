<template>
  <div class="hello">
<Sidebar/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Sidebar from '@/components/Sidebar.vue';
@Component({
  components: {Sidebar}
})
export default class HelloWorld extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
