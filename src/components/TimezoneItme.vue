<script setup lang="ts">
import type { Timezones } from '@/types'
import { homeOffset } from '@/composables/state'

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
const city = $computed(() => timezone.name.split('/')[1]?.replace(/_/g, ' '))
const time = $computed(() => timezone.name ? formater.format(useNow().value) : '')
const offset = $computed(() => {
  const offset = timezone.offset - homeOffset.value
  return offset > 0 ? `+${offset}` : offset
})
</script>

<template>
  <div flex flex-wrap gap2 py1 items-center>
    <div
      w-10 op80 font-bold flex justify-center
      :title="`${timezone.offset} ${timezone.addr}`"
    >
      {{ offset }}
    </div>
    <div flex="~ col" text-left flex-auto>
      <div>
        {{ city }}
        <span border="~ base rounded" px1 text-xs>{{ timezone.addr }}</span>
      </div>
      <div text-sm op50 leading-1em>
        {{ state }}
      </div>
    </div>
    <div tabular-nums>
      {{ time }}
    </div>
    <slot />
  </div>
</template>

<style scoped lang='less'>
</style>
