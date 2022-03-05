<template>
  <div class="dashboard-container scroll-y">
    <FromRemote />
  </div>
</template>

<script setup>
import FromRemote from '/src/federation/FromRemote.vue'
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    //margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
