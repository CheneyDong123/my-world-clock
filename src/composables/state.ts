import { timezones } from './data'
import type { Timezones } from '@/types'

const zoneNames = useLocalStorage<String[]>('world-time-zones', [])
export const zones = computed(() => zoneNames.value.map(name => timezones.find(t => t.name === name)))
export function addToTimezone(timezone: Timezones) {
  if (zoneNames.value.includes(timezone.name))
    return
  zoneNames.value.push(timezone.name)
}

const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

if (!zones.value.length)
  zoneNames.value.push(userTimezone)
