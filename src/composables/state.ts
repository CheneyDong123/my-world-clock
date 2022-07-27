import { timezones } from './data'
import type { Timezones } from '@/types'

const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

const zoneNames = useLocalStorage<String[]>('world-time-zones', [userTimezone])
export const zones = computed(() => zoneNames.value.map(name => timezones.find(t => t.name === name)))
export function addToTimezone(timezone: Timezones) {
  if (zoneNames.value.includes(timezone.name))
    return
  zoneNames.value.push(timezone.name)
}

export function removeZone(zoneName?: string) {
  zoneNames.value = zoneNames.value.filter(name => name !== zoneName)
}

export function moveZone(zoneName: string, delate: 1 | -1) {
  const index = zoneNames.value.indexOf(zoneName) + delate
  const other = zoneNames.value[index]
  zoneNames.value[index] = zoneName
  zoneNames.value[index - delate] = other
}

if (!zoneNames.value.length)
  zoneNames.value.push(userTimezone)
