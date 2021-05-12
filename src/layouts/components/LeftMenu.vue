<template>
  <div class="global-menu">
    <div class="system-tip">
      <i class="iconfont icon-cloudLogo"></i>
      <span>医院SPD系统</span>
    </div>
    <div class="menu-area">
      <el-menu 
      default-active="1-4-1" 
      class="el-menu-vertical-demo" 
      @open="!isCollapse" 
      @close="!isCollapse" 
      :collapse="isCollapse"
      unique-opened="true">
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
      <div class="collapse-change">
        <div class="collapse-bar"></div>
        <div class="collapse-btn" @click.prevent="navCollapse()">
          <i class="iconfont" :class="{'icon-retract': !isCollapse, 'icon-open': isCollapse}"></i>
        </div>
        <div class="collapse-bar"></div>
      </div>
    </div>
    <!-- <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false" @click.prevent="navCollapse()">展开</el-radio-button>
      <el-radio-button :label="true" @click.prevent="navCollapse()">收起</el-radio-button>
    </el-radio-group> -->
  </div>
</template>

<script lang="ts">
export default {
  name: 'LeftMenu',
  props: {
    isCollapse: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  setup (props, context) {
    const navCollapse = () => {
      context.emit('navCollapse', !props.isCollapse)
    }
    return { navCollapse }
  }
}
</script>

<style scoped>
.global-menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}
.menu-area {
  flex-grow: 1;
  border-right: 1px solid #e5e5e5;
}
.global-menu .el-menu {
  width: 100%;
  border: none;
  height: calc(100% - 62px);
}
/* system-tip  */
.system-tip {
  background: #009afc;
  height: 65px;
  border-right: 1px solid #008ce5;
  width: 100%;
}
.system-tip .icon-cloudLogo {
  font-size: 22px;
  margin-left: 16px;
  line-height: 65px;
  color: #fff;
}
.system-tip span {
  font-size: 17px;
  margin-left: 15px;
  color: #fff;
}

/* collapse-bar */
.collapse-change {
  height: 62px;
  width: 100%;
  display: flex;
}
.collapse-bar {
  flex: 1;
  background: #e5e5e5;
  height: 1px;
  margin-top: 35px;
}
.collapse-btn {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid #e5e5e5;
  margin-top: 24px;
  text-align: center;
  line-height: 20px;
}
.collapse-btn .iconfont {
  color: #24aaff;
}
</style>