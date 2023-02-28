<template>
  <button class="dy-button" :class="styleClass">
    <slot/>
  </button>
</template>

<script lang="ts">
import './style/index.less'
import { defineComponent, computed } from 'vue';
import { buttonProps } from './types';

export default defineComponent({
  name: 'dy-button',
  props: buttonProps,
  setup(props) {
    const styleClass = computed(() => {
      return {
        [`dy-button--${props.type}`]: props.type
      }
    })
    return {
      styleClass
    }
  }
})

</script>