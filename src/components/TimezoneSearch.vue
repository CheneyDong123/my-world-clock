<script setup lang="ts">
import Fuse from 'fuse.js'
import { timezones } from '@/composables/data'
import { addToTimezone } from '@/composables/state'
import type { Timezones } from '@/types'

const fuse = new Fuse(timezones, {
  keys: ['name'],
})

const input = ref('')

const searchResult = computed(() => {
  return fuse.search(input.value)
})

function add(t: Timezones) {
  addToTimezone(t)
  input.value = ''
}
</script>

<template>
  <div relative>
    <input v-model="input" type="text" px2 py1 border="~ gray/15 rounded" bg-transparent w-full placeholder="search timezone...">
    <div v-show="input" absolute top-full bg-gray-500 w-full>
      <button v-for="i of searchResult" :key="i.refIndex" flex gap2 @click="add(i.item)">
        <div font-mono w-10 text-right>
          {{ i.item.offset }}
        </div>
        <div>
          {{ i.item.name }}
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
