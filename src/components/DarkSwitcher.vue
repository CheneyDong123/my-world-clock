<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div flex gap1>
    <a icon-button text-xl i="carbon-logo-github" href="https://github.com/CheneyDong123/my-world-clock" target="_blank" title="GitHub" />
    <button icon-button i="carbon-sun dark:carbon-moon" text-xl @click="toggleDark()" />
  </div>
</template>

<style scoped lang='less'>
</style>
