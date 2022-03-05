<template>
  <div>
    <div class="mt-2">测试props</div>

    <el-button @click="addCount">addCount</el-button>
    count的值：{{ state.count }}

    <div class="mt-2">测试props</div>
    {{ props.name }}

    <div class="mt-2">测试父子事件emit</div>
    <el-button type="primary" @click="toParent">ParentChildEmit</el-button>

    <div class="mt-2">测试vuex</div>
    <el-button @click="testVuex" type="danger">test vuex</el-button>
    <!--    <div>{{ username }}</div>-->
  </div>
</template>

<script setup>
//获取store和router
const props = defineProps({
  name: {
    require: true,
    default: 'fai',
    type: String
  }
})
// const state = reactive({
//   levelList: null
// });

const state = reactive({
  count: 0
})

let addCount = () => {
  state.count++
  console.log('addCount')
}

import { useStore } from 'vuex'

const store = useStore()
//testVuex
const testVuex = () => {
  store.commit('test/M_username', 'testName')
}
// const username = computed(() => {
//   return store.state.test.username
// })
// watch(() => props.name, (oldValue,newValue) => {
//
//   },
//   { immediate: true }
// );

const emit = defineEmits(['toParent'])
const toParent = () => {
  emit('toParent', 'I come form child')
}
// const store = useStore()
// const router = useRouter()
// onMounted(()=>{
//   console.log("页面挂载了")
// })

//导出给refs使用
// defineExpose({ helloFunc });
//导出属性到页面中使用
// let {levelList} = toRefs(state);
</script>

<style scoped lang="scss"></style>
