<script setup lang="ts">
import { zones } from '@/composables/state'
</script>

<template>
  <div>
    <div v-for="i, idx in zones" :key="idx" px4 py3 border="b base">
      <TimezoneItme :timezone="i" />
    </div>
  </div>
</template>

<style scoped lang='less'>
</style>
