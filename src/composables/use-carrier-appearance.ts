import { useAppearance } from '@/composables'
import type { Carrier } from '@/types'

/**
 * 川渡りパズルの乗り物の外観
 */
const useCarrierAppearance = (
  state: Ref<Carrier>,
) => {
  const { gridSize } = useAppearance()
  // 幅（登場人物の幅 * （登場人物の人数 + 1））
  const width = computed(() =>gridSize.value * (state.value.capacity + 1))
  // 高さ（登場人物の高さ * 2.5）
  const height = computed(() =>gridSize.value * 2.5)
  // アスペクト比
  const aspectRatio = computed(() => width.value / height.value)
  return {
    width,
    height,
    aspectRatio,
  }
}
export default useCarrierAppearance
export type UseCarrierAppearanceReturn = ReturnType<typeof useCarrierAppearance>
