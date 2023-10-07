import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { Records } from '@/types/records'
import type { Scene } from '@/types/scene'
import { s01, s02 } from './scenes'
/**
 * 実績管理
 */
export const useRecordsStore = defineStore('records', () => {
  const state = useStorage<Records>('RIVER_CROSSING_RECORDS', {
    stage: 0,
    started: false,
    swiped: false,
    gotOn: false,
    gotOnRower: false,
    leaved: false,
    arrived: false,
  })
  const now = ref(0)
  const scenes = [ s01, s02 ]
  /** 指定されたIDのシーンを読み込み */
  const load = async (id: string|string[]): Promise<Scene> => {
    if(Array.isArray(id)) throw false
    const scene = scenes.find(scene => scene.id === parseInt(id))
    if(!scene) throw false
    now.value = parseInt(id)
    return scene
  }
  const cleared = async (): Promise<void> => {
    state.value.stage = now.value
  }
  return {
    state,
    scenes,
    load,
    cleared,
  }
})