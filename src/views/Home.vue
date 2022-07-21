<template>
  <div class="home">
    <steps-to-reproduce />
  </div>
</template>

<script>
// @ is an alias to /src

import StepsToReproduce from '@/components/StepsToReproduce.vue';

export default {
  name: 'Home',
  components: {
    StepsToReproduce,
  },
};
</script>
