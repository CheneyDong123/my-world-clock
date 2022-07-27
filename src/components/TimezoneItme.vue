<script setup lang="ts">
import type { Timezones } from '@/types'

const { timezone } = defineProps<{
  timezone: Timezones
}>()

const formater = new Intl.DateTimeFormat('en-US', {
  timeZone: timezone.name,
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
})

const state = $computed(() => timezone.name.split('/')[0].replace(/_/g, ' '))
const city = $computed(() => timezone.name.split('/')[1].replace(/_/g, ' '))
const time = $computed(() => timezone.name ? formater.format(useNow().value) : '')
const offect = $computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset)
</script>

<template>
  <div flex w-full p1>
    <div w-10 grid place-items-center op80 font-bold>
      {{ offect }}
    </div>
    <div flex="~ col" text-left ml2 justify-center flex-auto>
      <div text-l flex items-center>
        {{ city }}
        <span border="~ base rounded" px1 mx1 text-1>{{ timezone.addr }}</span>
      </div>
      <div text-sm op50 leading-1rem>
        {{ state }}
      </div>
    </div>
    <div flex-right tabular-nums>
      {{ time }}
    </div>
  </div>
</template>

<style scoped lang='less'>
</style>
