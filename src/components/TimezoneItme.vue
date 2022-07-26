<script setup lang="ts">
import type { Timezones } from '@/types'

const { timezone } = defineProps<{
  timezone: Timezones
}>()

const state = $computed(() => timezone.name.split('/')[0])
const city = $computed(() => timezone.name.split('/')[1])
const offect = $computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset)
</script>

<template>
  <div flex w-full p1>
    <div w-10 grid place-items-center op80 font-bold>
      {{ offect }}
    </div>
    <div flex="~ col" text-left ml2 justify-center>
      <div text-l>
        {{ city }}
      </div>
      <div text-sm op50 leading-1rem>
        {{ state }}
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
</style>
