<template>
  <el-container>
    <el-aside style="transition: 1s;overflow: hidden;" :style="{width: navWidth}">
      <LeftMenu :isCollapse="isCollapse" @navCollapse="navCollapse"/>
    </el-aside>
    <el-container>
      <el-header height="65px">
        <GlobalHeader></GlobalHeader>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { computed, ref, ComputedRef, watch, WatchSource, WatchCallback } from 'vue'
import LeftMenu from "../layouts/components/LeftMenu.vue";
import GlobalHeader from '../layouts/components/GlobalHeader.vue'
export default {
  components: {
    LeftMenu,
    GlobalHeader
  },
  setup() {
    let navWidth = ref<string>('200px')
    let isCollapse = ref<boolean>(false)

    const navCollapse = (params) => {
      isCollapse.value = params
      params ? navWidth.value = '63px' : navWidth.value = '200px'
    }

    return { isCollapse, navCollapse, navWidth };
  },
};
</script>

<style scoped>
</style>