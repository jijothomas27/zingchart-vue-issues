<template>
  <div class="about">
    <h2>About: {{ selectedBrand }}</h2>
    <my-chart :chart-data="chartData"/>
    <hr />
    <steps-to-reproduce />
  </div>
</template>
<script>
import MyChart from '@/components/MyChart.vue';
import { chartServiceInstance } from '@/services/ChartService';
import StepsToReproduce from '@/components/StepsToReproduce.vue';

export default {
  name: 'About',
  components: { StepsToReproduce, MyChart },
  data: () => ({}),
  computed: {
    selectedBrand() {
      const { brand } = this.$route.params;
      return brand;
    },
    chartData() {
      return chartServiceInstance.getChart(this.selectedBrand);
    },
  },
};
</script>
