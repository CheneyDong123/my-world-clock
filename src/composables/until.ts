import { selection } from '@/composables/state'
import { dayCellWidth } from '@/composables/constant'
import type { Timezones } from '@/types'

export function toRounded(xRaw: number) {
  const x = xRaw - selection.from
  let n = Math.round(x / dayCellWidth)
  n = Math.max(0, n)
  n = Math.min(n, 24)
  return n * dayCellWidth + selection.from
}

export function isMidnight(h: number) {
  return h >= 22 || h <= 5
}

export function isNight(h: number) {
  return h >= 18 || h <= 7
}

export function timeFormater(timezone: Timezones) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: timezone.name,
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
  })
}

