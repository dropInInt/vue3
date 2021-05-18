<template>
 <el-breadcrumb separator-class="el-icon-arrow-right">
  <template v-for="(bread, key) in currentRouter" :key="bread.key">
  <!--   <el-breadcrumb-item v-if="key == 0" :to="{ path: bread.path }">
     <i class="iconfont icon-tabHome"></i>
     {{bread.meta.title}}
     </el-breadcrumb-item> -->
    <el-breadcrumb-item v-if="key == currentRouter.length - 1">{{bread.meta.title}}</el-breadcrumb-item>
    <el-breadcrumb-item v-else :to="{ path: bread.path }">{{bread.meta.title}}</el-breadcrumb-item>
  </template>
</el-breadcrumb>
</template>
<script lang="ts">
import { ref, watch, Ref } from 'vue'
import { useRoute, useRouter, RouteLocationMatched } from 'vue-router'
export default {
 name: 'SysBreadcrumb',
 setup() {
  const route = useRoute()
  const router = useRouter()
  let currentRouter: Ref<RouteLocationMatched[]> = ref([])
  const getcurrentRouter = (): void => {
    currentRouter.value = router.currentRoute.value.matched
    currentRouter.value.shift()
  }
  getcurrentRouter()
  // watch(() =>route.path, () => getcurrentRouter())
  return { currentRouter }
 }
}
</script>