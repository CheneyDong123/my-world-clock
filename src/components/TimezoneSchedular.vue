<script setup lang="ts">
import { moveZone, removeZone, storage, zones } from '@/composables/state'
import { tiemzoneItemHeight } from '@/composables/constant'
</script>

<template>
  <div relative select-none>
    <div of-x-auto>
      <div
        v-for="zone, idx in zones" :key="idx"
        px4 border="b base" relative
      >
        <div flex="~ none" items-center justify-between>
          <TimezoneItme :timezone="zone" />
          <TimeDetail :timezone="zone" />
        </div>
      </div>
    </div>
    <div absolute top-0 bottom-0 left--6 w5>
      <div
        v-for="zone, idx in zones" :key="idx"
        :style="{ height: `${tiemzoneItemHeight}px` }"
        flex="~ col" items-center justify-center
      >
        <div v-if="zone?.name !== storage.home" flex="~ col">
          <button v-if="zone && idx !== 1" icon-button i-carbon-caret-up @click="moveZone(zone.name, -1)" />
          <button v-if="zone" icon-button i-carbon-close @click="removeZone(zone.name)" />
          <button v-if="zone && idx < zones.length - 1" icon-button i-carbon-caret-down @click="moveZone(zone.name, 1)" />
        </div>
      </div>
    </div>
    <SelectionOverlay absolute inset-0 of-hidden />
  </div>
</template>

<style scoped lang='less'>
</style>
