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
      <template v-for="menu in menuList">
        <el-submenu v-if="menu.children && menu.children.length > 0" :key="menu.name">
          <template #title>
            <i :class="`iconfont icon-${menu.meta.icon}`"></i>
            <span>{{menu.meta.title}}</span>
          </template>
          <el-menu-item v-for="subMenuList in menu.children" :key="subMenuList.name">{{subMenuList.meta.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :key="menu.name">
          <i :class="`el-icon-menu iconfont icon-${menu.meta.icon}`"></i>
          <template #title>{{subMenuList.meta.title}}</template>
        </el-menu-item>
      </template>
      </el-menu>
      <div class="collapse-change">
        <div class="collapse-bar"></div>
        <div class="collapse-btn" @click.prevent="navCollapse()">
          <i class="iconfont" :class="{'icon-retract': !isCollapse, 'icon-open': isCollapse}"></i>
        </div>
        <div class="collapse-bar"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { generateSyncRouter } from '../../router/routerUtils'
export default {
  name: 'LeftMenu',
  props: {
    isCollapse: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  setup (props: any, context: any) {
    const navCollapse: () => void = () => {
      context.emit('navCollapse', !props.isCollapse)
    }

    const menuList = JSON.parse(localStorage.getItem('menuList'))
    console.log(menuList)
    return { navCollapse, menuList }
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