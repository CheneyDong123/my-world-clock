<script setup lang="ts">
defineProps<{
  el: HTMLDivElement
}>()
const el = ref<HTMLDivElement>()
const { x, y } = useMouse()
const { pressed } = useMousePressed()
const { top, right, left, bottom, width, height } = useElementBounding(el)
const isPressed = $computed(() => pressed.value)
const leftEdge = $computed<number>(() => x.value)
const position = $computed(() => ({
  left: `${leftEdge}px`,
  width: '80' + 'px',
  top: '0',
  bottom: '0',
}))
</script>

<template>
  <div v-show="isPressed" ref="el" pointer-events-none>
    {{ x }} {{ y }} {{ left }}
    {{ pressed }}
    <div absolute border="3 green rounded" :style="position" />
  </div>
</template>

<style scoped lang='less'>

</style>
