<script lang="ts" setup>
import type { Cast } from '@/types'
import type { UseSwipeDirection } from '@vueuse/core'
import sprites from '@/assets/images/casts'
import { useCastAppearance, useCast, useCastState, useScene } from '@/composables'
import { useSceneStore } from '@/stores/scene'
const props = defineProps<{
  state: Cast
}>()
const target = ref<HTMLElement | null>(null)
const store = useSceneStore()
const { width, height, aspectRatio } = useCastAppearance()
const { getTransform } = useCast()
const { coord, boarding } = useCastState(toRef(store.state))
const { pickUp, dropOff, safetyConfirmation } = useScene(toRef(store.state), toRef(store.scene))

/**
 * v-imgに適用するCSS transformプロパティ
 */
 const transform = computed(() => getTransform(props.state, coord(props.state)))

/**
 * タッチイベントの検知
 */
const { direction: directionSwipe, isSwiping: isTouchSwiping } = useSwipe(
  target, {
    onSwipeEnd(event: TouchEvent, direction: UseSwipeDirection) {
      action(direction)
    },
  }
)

/**
 * ポインターイベントの検知
 */
const { isSwiping: isPointerSwiping, direction: directionPointer } = usePointerSwipe(
  target, {
    onSwipeEnd(event: PointerEvent, direction: UseSwipeDirection) {
      action(direction)
    },
  }
)

/**
 * スワイプ中かどうか
 */
const isSwiping = computed(() => isTouchSwiping.value || isPointerSwiping.value)

/**
 * スワイプ方向
 */
const swipeDirection = computed(() => directionSwipe.value || directionPointer.value)

/**
 * 初期位置にいるかどうか
 */
const isOrigin = computed(() => coord(props.state) === -1 && boarding(props.state) === null)

/**
 * 登場人物のスワイプが終了した時
 */
const action = async (
  direction: UseSwipeDirection
) => {
  if (store.disabled) return
  // 登場人物を乗り物から降ろす
  const canDropOff = (boarding(props.state) !== null && direction === (coord(props.state) === 0 ? 'left' : coord(props.state) > 0 ? 'up' : 'down'))
  if (canDropOff) await dropOff(props.state)
  // 搭乗可能な乗り物があれば乗せる
  const canPickUp = (boarding(props.state) === null && direction === (coord(props.state) === 0 ? 'right' : coord(props.state) < 0 ? 'up' : 'down'))
  if (canPickUp) await pickUp(props.state)
  await safetyConfirmation()
}
</script>

<template>
  <PuzzleCastEmotion
    :state="state"
  >
    <v-card
      ref="target"
      flat
      :width="width"
      :height="height"
      :aspect-ratio="aspectRatio"
      class="d-flex justify-center align-end bg-transparent"
    >
      <v-img
        src="@/assets/images/shadow.png"
        cover
        :width="width"
        :height="height"
        :aspect-ratio="aspectRatio"
      >
        <v-img
          :src="sprites[state.appearance]"
          cover
          :width="width"
          :height="height"
          :aspect-ratio="aspectRatio"
          :style="{ transform: transform }"
          style="transform-origin: bottom center;"
        >
          <div class="d-flex justify-center align-end fill-height">
            <span
              v-if="isOrigin"
              class="text-white"
              style="font-size: 1.2vmin;"
            >
              {{ state.name }}
            </span>
          </div>
        </v-img>
      </v-img>
      <PuzzleCastMenu
        :state="state"
        :is-swiping="isSwiping"
        :swipe-direction="swipeDirection"
      />
    </v-card>
  </PuzzleCastEmotion>
</template>
