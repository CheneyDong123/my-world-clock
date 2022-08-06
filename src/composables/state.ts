import { timezones } from './data'
import type { Timezones } from '@/types'

export interface state {
  name?: string
  description?: string
  zones: string[]
  home: string
  date: string
  selections: Selections[]
}

export interface Selections {
  to: Date
  from: Date
}

const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

export const storage = useLocalStorage('time-block-state', {
  zones: [userTimezone],
  home: userTimezone,
  date: new Date(),
  selections: [],
})

const zoneNames = toRef(storage.value, 'zones')
export const homeZone = toRef(storage.value, 'home')
export const homeOffset = computed(() => timezones.find(t => t.name === homeZone.value)?.offset || 0)
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
