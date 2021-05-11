<template>
  <div class="global-menu" :style="{width: Width}">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="!isCollapse" @close="!isCollapse" :collapse="isCollapse">
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu>
    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script lang="ts">
import { computed, ref, ComputedRef } from 'vue'
export default {
  name: 'LeftMenu',
  setup () {
    const isCollapse = ref<boolean>(true)

    const Width = computed(() => {
      debugger
      let width: string = '0px'
      isCollapse.value === true ? width = '200px' : width = '64px'
      return width
    })


    return { isCollapse, Width }
  }
}
</script>

<style scoped>
</style>