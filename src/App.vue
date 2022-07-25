<script setup lang="ts">
import ActionBar from '@/components/ActionBar.vue'
import TimezoneSchedular from '@/components/TimezoneSchedular.vue'
</script>

<template>
  <div border="~ gray/20" m2>
    <ActionBar />
    <TimezoneSchedular />
  </div>
</template>

<style>
html {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>
