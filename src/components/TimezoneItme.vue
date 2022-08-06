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
  <div flex="~ auto" py1 gap2 items-center justify-between>
    <div
      op70 font-bold flex justify-center w10
      :text="offset !== 0 ? 'sky/60' : ''"
      :title="`${timezone.offset} ${timezone.addr}`"
    >
      {{ offset }}
    </div>
    <div flex="~ col auto" text-left md:w-40>
      <div>
        {{ city }}
        <span border="~ base rounded" px1 text-xs>{{ timezone.addr }}</span>
      </div>
      <div text-sm op50 leading-1em>
        {{ state }}
      </div>
    </div>
    <div pr2>
      {{ time }}
    </div>
  </div>
</template>

<style scoped lang='less'>
</style>
