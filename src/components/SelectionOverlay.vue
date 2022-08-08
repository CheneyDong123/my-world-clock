<script setup lang="ts">
import { dayCellWidth } from '@/composables/constant'
import { selection } from '@/composables/state'
import { toRounded } from '@/composables/until'

const el = ref<HTMLDivElement>()

const { x } = useMouse()
const { pressed } = useMousePressed()

let overLayWidth = $ref(dayCellWidth)
let edgeStart = $ref(0)
let edgeEnd = $ref(0)

const isPressed = $computed<boolean>(() => pressed.value)
const leftEdge = $computed<number>(() => Math.min(edgeStart, edgeEnd))
const rightEdge = $computed<number>(() => Math.max(edgeStart, edgeEnd))
const position = $computed(() => ({
  left: `${leftEdge}px`,
  width: `${overLayWidth}px`,
  top: '0',
  bottom: '0',
}))

const leftWhiteout = $computed(() => ({
  left: `${selection.from - 29}px`,
  width: `${leftEdge - selection.from + 29}px`,
  top: '0',
  bottom: '0',
}))

const rightWhiteout = $computed(() => ({
  left: `${rightEdge}px`,
  right: '0',
  top: '0',
  bottom: '0',
}))

useEventListener('pointerdown', () => {
  edgeStart = (selection.from > x.value ? selection.from : toRounded(x.value)) - 29
})

watchEffect(() => {
  edgeEnd = (selection.from > x.value ? selection.from + dayCellWidth : x.value > selection.to ? selection.to + 5 : toRounded(x.value) + 4) - 29
  overLayWidth = Math.abs(edgeStart - edgeEnd)
})
</script>

<template>
  <div v-show="isPressed" ref="el" pointer-events-none>
    <div absolute :style="leftWhiteout" bg="white/60 dark:gray7/30" />
    <div absolute :style="rightWhiteout" bg="white/60 dark:gray7/30" />
    <div absolute border="3 green6 rounded dark:green8" :style="position" />
  </div>
</template>

<style scoped lang='less'>

</style>
