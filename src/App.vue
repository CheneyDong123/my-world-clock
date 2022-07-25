<script setup lang="ts">
</script>

<template>
  <div bg-canvas h-screen>
    <NavBar />
    <div border="~ base" rounded bg-base m2>
      <ActionBar />
      <TimezoneSchedular />
    </div>
  </div>
</template>

<style>
html.dark {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>
