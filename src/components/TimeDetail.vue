<script setup lang="ts">
import { format } from 'date-fns'
import type { Timezones } from '@/types'
import { dayCellWidth } from '@/composables/constant'
import { selection } from '@/composables/state'
import { isMidnight, isNight } from '@/composables/until'

const { timezone } = defineProps<{
  timezone: Timezones
}>()

const currentMonth = format(useNow().value, 'MMM')
const currentDate = format(useNow().value, 'dd')
const hours = $computed(() => Array.from({ length: 24 }, (_, i) => (i + timezone.offset + 1)))
const lastday = $computed(() => hours.filter(hour => hour < 0).map(hour => (hour + 24) % 24))
const today = $computed(() => hours.filter(hour => hour >= 0 && hour < 24))
const tomorrow = $computed(() => hours.filter(hour => hour >= 24).map(hour => hour % 24))
const days = $computed(() => [
  lastday,
  today,
  tomorrow,
])

const dialBox = ref()

const box = useElementBounding(dialBox)

watch(box.left, () => {
  selection.from = Math.floor(box.left.value)
  selection.to = selection.from + dayCellWidth * 24
})
</script>

<template>
  <div ref="dialBox" flex="~ none" of-auto items-end>
    <template v-for="day, idx of days" :key="idx">
      <div v-if="day.length" flex="~ none" border="~ sky7/30 rounded" of-hidden>
        <div
          v-for="i in day" :key="i"
          h7
          flex="~ col none" items-center justify-center
          :style="{ width: `${dayCellWidth}px` }"
          :class="[isMidnight(i) ? 'bg-sky7/90 text-white' : isNight(i) ? 'bg-sky/20' : '']"
        >
          <span v-if="i">
            {{ i }}
          </span>
          <span v-else text-xs text-center leading-1em>
            {{ currentMonth }}
            {{ currentDate }}
          </span>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang='less'>
</style>
