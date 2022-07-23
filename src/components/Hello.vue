<script setup lang="ts">

const props = defineProps<{
  name: String
}>()
const toUpper = computed(() => props.name.toLocaleUpperCase())
</script>

<template>
  <div>hello, {{ toUpper }}</div>
</template>

<style>
</style>