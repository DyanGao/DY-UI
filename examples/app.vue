<template>
  <div>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <br>
  </div>
</template>  

<script lang="ts" setup>
import { Button } from 'dy-ui';
</script>

<style lang="less">
.dy-button {
  margin-right: 10px;
}
</style>