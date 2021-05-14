<template>
  <div class="global-menu">
    <div class="system-tip">
      <i class="iconfont icon-cloudLogo"></i>
      <span>医院SPD系统</span>
    </div>
    <div class="menu-area">
      <div class="menu-left-list">
        <el-scrollbar>
          <el-menu
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            :default-active="menuActive"
            active-text-color="#24aaff"
            :unique-opened="true">
            <template v-for="menu in menuList">
              <el-submenu v-if="menu.children && menu.children.length > 0" :key="menu.name" :index="menu.path">
                <template #title>
                  <i :class="`iconfont icon-${menu.meta.icon}`"></i>
                  <span>{{menu.meta.title}}</span>
                </template>
                <el-menu-item 
                  v-for="subMenuList in menu.children" 
                  @click="menuSelect(subMenuList.path)" 
                  :key="subMenuList.name" 
                  :inedx="subMenuList.path">
                    {{subMenuList.meta.title}}
                  </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="menu.path" :key="menu.name" @click="menuSelect(menu.path)">
                <i :class="`iconfont icon-${menu.meta.icon}`"></i>
                <template #title>{{subMenuList.meta.title}}</template>
              </el-menu-item>
            </template>
          </el-menu>
        </el-scrollbar>
      </div>
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
import { ref, Ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
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

    const router = useRouter()
    const route = useRoute()
    
    const active: string = useRoute().path.substring(1, useRoute().path.length)

    let menuActive: Ref<string> = ref(active)

    const menuSelect: (index: any) => void = (index: any) => {
      menuActive = index
      router.push('/' +index)
    }
    const menuList: any = JSON.parse(localStorage.getItem('menuList'))
    return { navCollapse, menuList, menuSelect, menuActive }
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
.menu-left-list {
  height: calc(100vh - 127px);
  overflow-x: hidden;
}
.global-menu .el-menu {
  width: 100%;
  border: none;
  height: 100%;
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