<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot></slot>
  </component>
</template>
<script lang="ts">
export default {
  name: "Link",
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const linkProps = (to: any) => {
      return {
        to: to,
      };
    };
    return {
      type: "router-link",
      linkProps,
    };
  },
};
</script>