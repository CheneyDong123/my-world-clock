<script setup lang="ts">
import { format } from 'date-fns'
import type { Timezones } from '@/types'
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

function isMidnight(h: number) {
  return h >= 22 || h <= 5
}

function isNight(h: number) {
  return h >= 18 || h <= 7
}
</script>

<template>
  <div flex="~ none" of-auto items-end>
    <template v-for="day, idx of days" :key="idx">
      <div
        v-if="day.length"
        flex="~ none"
        border="~ sky7/30 rounded"
        of-hidden
      >
        <div
          v-for="i in day"
          :key="i"
          h7 w10
          flex="~ col none" items-center justify-center
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
