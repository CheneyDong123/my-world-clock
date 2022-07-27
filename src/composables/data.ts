import timezonesRaw, { type Timezone } from 'timezones.json'

export const timezones = timezonesRaw.flatMap((i: Timezone) => {
  return i.utc.map((u) => {
    return {
      name: u,
      offset: i.offset,
      isdst: i.isdst,
      addr: i.abbr,
    }
  })
})
