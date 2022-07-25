import type { Timezones } from '@/types'

export const zones = ref<Timezones[]>([])

export function addToTimezone(timezone: Timezones) {
  zones.value.push(timezone)
}
