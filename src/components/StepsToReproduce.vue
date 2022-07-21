<template>
<div>
  <h3>Zing Bubble Pack Issue</h3>
  <div>
    <h4>Steps to reproduce</h4>
    <li>
      <ol>Click on any brand (ex: lego) in the nav bar</ol>
      <ol>Now Click on the other brand (ex: tiktok)</ol>
      <ol>Expected Result: The second brand (tiktok)'s chart be displayed</ol>
      <ol>Actual result: The chart is displaying old data (lego)</ol>
      <ol>
        Now refresh the page while you're looking at the second brand (tiktok)
        <li>
          <ul>You'll see that the data has refreshed</ul>
          <ul>
            Clicking on the first brand (lego) will still show data from the second brand (tiktok)
          </ul>
        </li>
      </ol>
    </li>
  </div>
</div>
</template>

<script>
export default {
  name: 'StepsToReproduce',
};
</script>

<style scoped>

</style>
