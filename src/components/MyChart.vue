<template>
  <div style="height: 400px">
    <zingchart
      height="400"
      :data="chartData" />
  </div>

</template>

<script>
import 'zingchart/es6';
import 'zingchart/modules-es6/zingchart-bubble-pack.min';
import zingchartVue from 'zingchart-vue';

export default {
  name: 'MyChart',
  components: {
    zingchart: zingchartVue,
  },
  props: {
    chartData: {
      type: Object,
      default: () => ({
        type: 'hbar',
      }),
    },
  },
};
</script>

<style scoped>

</style>
