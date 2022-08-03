<script setup lang="ts">
import { moveZone, removeZone, zones } from '@/composables/state'
</script>

<template>
  <div>
    <div v-for="i, idx in zones" :key="idx" px4 py2 border="b base" relative>
      <TimezoneItme :timezone="i">
        <TimeDetail :timezone="i" />
      </TimezoneItme>
      <div flex="~ col" justify-center absolute top-0 bottom-0 left="-5">
        <button
          v-if="i && idx > 0"
          icon-button
          i-carbon-caret-up
          @click="moveZone(i.name, -1)"
        />
        <button
          v-if="i"
          icon-button
          i-carbon-close
          @click="removeZone(i.name)"
        />
        <button
          v-if="i && idx < zones.length - 1"
          icon-button
          i-carbon-caret-down
          @click="moveZone(i.name, 1)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
</style>
