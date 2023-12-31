import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import type { Settings } from '@/types'
/**
 * 設定管理
 */
export const useSettingsStore = defineStore('settings', () => {
  const state = useStorage<Settings>('RIVER_CROSSING_SETTINGS', {
    sound: {
      volume: 0.5
    },
    debug: false
  })
  return {
    state,
  }
})