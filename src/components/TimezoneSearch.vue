<script setup lang="ts">
import Fuse from 'fuse.js'
import { timezones } from '@/composables/data'
import { addToTimezone } from '@/composables/state'
import type { Timezones } from '@/types'

const fuse = new Fuse(timezones, {
  keys: ['name'],
})

let input = $ref('')
let index = $ref(0)
const modal = ref<HTMLDivElement>()

const searchResult = $computed(() => {
  return fuse.search(input)
})

onClickOutside(modal, () => {
  index = 0
  input = ''
})

function add(t: Timezones) {
  addToTimezone(t)
  input = ''
  index = 0
}

function onKeyDown(e: KeyboardEvent): void {
  if (e.key === 'ArrowDown')
    index = (index + 1) % searchResult.length
  else if (e.key === 'ArrowUp')
    index = (index - 1 + searchResult.length) % searchResult.length
  else if (e.key === 'Enter')
    add(searchResult[index].item)
  else if (e.key === 'Backspace')
    index = input.length <= 1 ? 0 : index
}
</script>

<template>
  <div relative m2>
    <input
      v-model="input"
      type="text" p="x2 y1" text="xl" border="~ base rounded" bg-transparent w-full
      placeholder="Search timezone..." @keydown="onKeyDown"
    >
    <div
      v-show="input"
      ref="modal"
      absolute top-full bg-base
      border="~ base"
      w-full max-h-100 of-auto shadow rounded z-10
    >
      <button
        v-for="i, idx of searchResult"
        :key="i.refIndex"
        border="b base"
        py2
        block w-full hover="bg-gray/15"
        :class="idx === index ? 'bg-gray:15' : ''"
        @click="add(i.item)"
      >
        <TimezoneItme :timezone="i.item" />
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
