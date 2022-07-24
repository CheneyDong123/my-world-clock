<script setup lang="ts">
import Fuse from 'fuse.js'
import { timezones } from './composables/data'
import type { Timezones } from './types'

const fuse = new Fuse(timezones, {
  keys: ['name'],
})

const input = ref('')

const searchResult = computed(() => {
  return fuse.search(input.value)
})

const zoneName = ref<Array<Object>>([])

function addToTimezone(timezone: Timezones) {
  zoneName.value.push(timezone)
}
</script>

<template>
  <pre>{{ zoneName }}</pre>
  <input v-model="input" type="text" >
  <div>
    <div v-for="i of searchResult" :key="i.refIndex">
      {{ i.item.offset }}
      <div @click="addToTimezone(i.item)">
        {{ i.item.name }}
      </div>
    </div>
  </div>
</template>

<style>
html {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>
