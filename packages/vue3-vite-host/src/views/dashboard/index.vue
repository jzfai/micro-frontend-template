<template>
  <div class="scroll-y">
    <div>---------------------------------------</div>
    <h3 class="mt-2 mb-2">**** test vue3-vite-remote component *****</h3>

    <!--<VuexUse /> to test-->
    <FromRemote />

    <div class="mt-2">
      <Parent />
    </div>

    <div>---------------------------------------</div>
  </div>
</template>

<script setup>
//import the component  from vue3-vite-remote
const Parent = defineAsyncComponent(() => import('vue3-vite-remote/Parent'))
const VuexUse = defineAsyncComponent(() => import('vue3-vite-remote/VuexUse'))
const FromRemote = defineAsyncComponent(() => import('vue3-vite-remote/FromRemote'))
const toParent = (data) => {
  console.log('data', data)
}
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
