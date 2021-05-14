<template>
  <div>
    <el-submenu
      v-if="item.children && item.children.length > 0"
      :index="resolvePath(item.name)"
      popper-append-to-body
    >
      <template #title>
        <i :class="`iconfont icon-${item.meta.icon}`"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item
        v-for="subMenuList in item.children"
        :key="subMenuList.name"
        :inedx="resolvePath(subMenuList.name)"
        class="submenu-title-noDropdown"
      >
        {{ subMenuList.meta.title }}
      </el-menu-item>
    </el-submenu>
    <template v-else>
      <Link :to="resolvePath(item.path)">
        <el-menu-item :index="resolvePath(item.name)">
          <i :class="`iconfont icon-${item.meta.icon}`"></i>
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
  },
  setup(props) {
    const onlyOneChild = ref<RouteRecordRaw>({} as any);
    debugger;
    const resolvePath: (routePath: string) => string = (routePath: string) => {
      return path.resolve(props.basePath, routePath);
    };

    return { onlyOneChild, resolvePath };
  },
};
</script>