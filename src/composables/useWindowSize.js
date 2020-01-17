import { onBeforeMount, onMounted, onUnmounted, reactive, toRefs } from '@vue/composition-api'

export default function useWindowSize () {
  const state = reactive({
    height: 0,
    width: 0
  })

  function setSize () {
    state.height = window.innerHeight
    state.width = window.innerWidth
  }

  function onResize () {
    window.requestAnimationFrame(setSize)
  }

  onBeforeMount(() => {
    setSize()
  })

  onMounted(() => {
    window.addEventListener('resize', onResize, true)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })

  return {
    ...toRefs(state)
  }
}
