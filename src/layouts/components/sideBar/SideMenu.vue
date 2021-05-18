<template>
  <div>
    <el-submenu
      v-if="item.children && item.children.length > 0"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template #title>
        <i :class="`iconfont icon-${item.meta.icon}`"></i>
        <span>{{ item.meta.title }}</span>
      </template>
        <SideMenu
          v-for="subMenuList in item.children"
          :key="subMenuList.name"
          :is-next="true"
          :item="subMenuList"
          :basePath="item.path"
        ></SideMenu>
    </el-submenu>
    <el-menu-item v-else-if="item.name === 'home'" :index="resolvePath(item.path)">
        <i :class="`iconfont icon-${item.meta.icon}`"></i>
        <template #title><span>{{ item.meta.title }}</span></template>
      </el-menu-item>
    <template v-else>
      <Link :to="resolvePath(item.path)">
        <el-menu-item :index="resolvePath(item.path)">
          <i class="iconfont icon-open"></i>
          <template #title>{{ item.meta.title }}</template>
        </el-menu-item>
      </Link>
    </template>
  </div>
</template>
<script lang="ts">
import path from "path";
import Link from "../sideBar/Link.vue";
import { ref } from "vue";
import { RouteRecordRaw } from "vue-router";
export default {
  name: 'SideMenu',
  components: {
    Link,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: "",
    },
    isNext: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    
    const onlyOneChild = ref<RouteRecordRaw>({} as any);
    const resolvePath: (routePath: string) => string = (routePath: string) => {
      let pathCur:string;
      props.basePath === '' ? pathCur = routePath : pathCur = props.basePath + routePath
      //return path.resolve(props.basePath, routePath);
      return pathCur
    };

    return { onlyOneChild, resolvePath };
  },
};
</script>