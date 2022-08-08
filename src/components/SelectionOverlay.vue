<script setup lang="ts">
const el = ref<HTMLDivElement>()

const { x, y } = useMouse()
const { pressed } = useMousePressed()
const box = useElementBounding(el)
let overLayWidth = $ref(70)

let left = $ref(x.value - box.left.value)
let right = $ref(0)

const isPressed = $computed(() => pressed.value)
const leftEdge = $computed<number>(() => Math.min(right, left))
const rightEdge = $computed<number>(() => Math.max(left, right))
const position = $computed(() => ({
  left: `${leftEdge}px`,
  width: `${overLayWidth}px`,
  top: '0',
  bottom: '0',
}))

useEventListener('mousedown', () => {
  left = x.value - 29
})

watchEffect(() => {
  right = x.value
  overLayWidth = Math.abs(right - left)
})

const leftWhiteout = $computed(() => ({
  left: '0',
  width: `${leftEdge}px`,
  top: '0',
  bottom: '0',
}))

const rightWhiteout = $computed(() => ({
  left: `${rightEdge}px`,
  right: '0',
  top: '0',
  bottom: '0',
}))
</script>

<template>
  <div v-show="isPressed" ref="el" pointer-events-none>
    <div absolute :style="leftWhiteout" bg-white:60 />
    <div absolute :style="rightWhiteout" bg-white:60 />
    <div absolute border="3 green rounded" :style="position" />
  </div>
</template>

<style scoped lang='less'>

</style>
