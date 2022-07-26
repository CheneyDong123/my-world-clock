import type { Timezones } from '@/types'

export const zones = $ref<Timezones[]>([])

export function addToTimezone(timezone: Timezones) {
  if (zones.includes(timezone))
    return
  zones.push(timezone)
}
