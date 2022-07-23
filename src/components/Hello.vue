<script setup lang="ts">

const props = defineProps<{
  name: String
}>()
const toUpper = computed(() => props.name.toLocaleUpperCase())
</script>

<template>
  <div text="green 3xl" font-mono>hello, {{ toUpper }}</div>
  <div i-carbon-accessibility text="3xl red"></div>
</template>

<style>
</style>