<template>
 <breadcrumb></breadcrumb>
 <router-view :key="key" v-slot="{ Component }">
  <transition mode="out-in">
   <keep-alive>
    <component :is="Component"></component>
   </keep-alive>
  </transition>
  
 </router-view>
</template>
<script lang="ts">
import { computed, defineComponent, ComputedRef } from "vue"
import { useRoute } from 'vue-router'
import Breadcrumb from '/@/components/Breadcrumb/SysBreadcrumb.vue'

export default defineComponent({
 name: 'AppMain',
 components: {
  Breadcrumb
 },
 setup() {
  const route: any = useRoute()
  const key:ComputedRef<any> = computed(()=> route.path)
  return { key }
 }
})
</script>