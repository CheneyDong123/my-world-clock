<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button i="carbon-sun dark:carbon-moon" text-2xl @click="toggleDark()" />
</template>

<style scoped lang='less'>
</style>
