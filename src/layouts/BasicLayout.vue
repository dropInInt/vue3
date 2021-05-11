<template>
  <el-container>
    <el-header height="65px">
      <GlobalHeader></GlobalHeader>
    </el-header>
    <el-container>
      <el-aside>
        <LeftMenu />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import LeftMenu from "../layouts/components/LeftMenu.vue";
import GlobalHeader from '../layouts/components/GlobalHeader.vue'
export default {
  components: {
    LeftMenu,
    GlobalHeader
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>