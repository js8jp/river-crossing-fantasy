import { computed, Ref } from 'vue'
import type { Carrier, Status } from '@/types/carrier'
import type { Cast } from '@/types/cast'
/**
 * 川渡りパズルの乗り物の初期ステータス
 */
export const defaultStatus: Status = Object.freeze({
  isCrossed: false,
  isSailing: false,
  passengers: [] as Cast[],
})
/**
 * 川渡りパズルの乗り物
 */
interface UseCarrierReturn {
  /** useTransitionで変化させるY座標 */
  y: Ref<number>
  /** 進行方向（上） */
  upbound: Ref<boolean>
  /** 進行方向（下） */
  downbound: Ref<boolean>
  /** 乗り物が利用可能（空席がある） */
  available: Ref<boolean>
  /** 乗り物が出発できるかどうか（乗り物を操作できる人物が乗っており、乗り物が進行中でない） */
  canLeave: Ref<boolean>
  /** 移動速度 */
  duration: Ref<number>
  /** 乗り物のステータスを初期化 */
  init: () => Promise<void>
  /** 乗客を乗せる */
  pickUp: (cast: Cast) => Promise<void>
  /** 乗客を降ろす */
  dropOff: (cast: Cast) => Promise<void>
  /** 発進する */
  leave: () => Promise<void>
  /** 到着する */
  arrive: () => Promise<void>
}
const useCarrier = (
  state: Carrier
): UseCarrierReturn => {
  const y = computed(() => state.status.isCrossed ? -1 : 0)
  const upbound = computed(() => canLeave.value && !state.status.isCrossed)
  const downbound = computed(() => canLeave.value && state.status.isCrossed)
  const available = computed(() => state.status.passengers.length < state.capacity)
  const canLeave = computed(() => !state.status.isSailing && state.status.passengers.some(cast => cast.role.canRow))
  const duration = computed(() => state.status.passengers.length > 0
    ? Math.max(...state.status.passengers.map(cast => cast.role.duration ? cast.role.duration : 1))
    : 1)
  const init = async () => {
    console.log(`useCarrier: init carrier ${state.id}`)
    state.status = {...defaultStatus}
    state.status.passengers = []
  }
  const pickUp = async (
    cast: Cast
  ) => {
    console.log(`useCarrier: pickUp cast ${cast.id}`)
    state.status.passengers.push(cast)
  }
  const dropOff = async (
    cast: Cast
  ) => {
    console.log(`useCarrier: dropOff cast ${cast.id}`)
    state.status.passengers = state.status.passengers.filter(passenger => passenger.id !== cast.id)
  }
  const leave = async () => {
    console.log(`useCarrier: leave carrier ${state.id}`)
    state.status.isSailing = true
    state.status.isCrossed = !state.status.isCrossed
  }
  const arrive = async () => {
    console.log(`useCarrier: arrive carrier ${state.id}`)
    state.status.isSailing = false
  }
  return {
    y,
    upbound,
    downbound,
    available,
    canLeave,
    duration,
    init,
    pickUp,
    dropOff,
    leave,
    arrive,
  }
}
export default useCarrier