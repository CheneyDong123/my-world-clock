<script setup lang="ts">
import type { Timezones } from '@/types'
import { homeOffset, now } from '@/composables/state'
import { tiemzoneItemHeight } from '@/composables/constant'
import { timeFormater } from '@/composables/until'

const { timezone } = defineProps<{
  timezone: Timezones
}>()

const state = $computed(() => timezone.name.split('/')[0].replace(/_/g, ' '))
const city = $computed(() => timezone.name.split('/')[1]?.replace(/_/g, ' '))
const time = $computed(() => timezone.name ? timeFormater(timezone).format(now.value) : '')
const offset = $computed(() => {
  const offset = timezone.offset - homeOffset.value
  return offset > 0 ? `+${offset}` : offset
})
</script>

<template>
  <div
    flex="~ auto" items-center justify-between
    :style="{ height: `${tiemzoneItemHeight}px` }"
  >
    <div
      op70 font-bold flex justify-center w10
      :text="offset !== 0 ? 'sky5/90' : ''"
      :title="`${timezone.offset} ${timezone.addr}`"
    >
      <span v-if="offset === 0" i-ri-home-2-fill />
      <span v-else>{{ offset }}</span>
    </div>
    <div flex="~ col auto" text-left md:w-40 ml3>
      <div text-ellipsis>
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
