<script lang="ts" setup>
import { useAppearance } from '@/composables'
import { useRecordsStore } from '@/stores/records'
import { useSceneStore } from '@/stores/scene'
const route = useRoute('/[id]')
const router = useRouter()
const { isSupported, orientation } = useScreenOrientation()
const records = useRecordsStore()
const store = useSceneStore()
const loading = ref(true)
const { navigationHeight } = useAppearance()
onMounted(async () => {
  if(Array.isArray(route.params.id)) throw `id: ${route.params.id}`
  const id = parseInt(route.params.id)
  if(!store.scene || store.scene.id !== id) {
    const config = await records.load(id)
    if (!config) {
      router.push({ path: '/home' })
      return
    }
    await store.load(config)
    await store.init()
  }
  loading.value = false
})
onUnmounted(async () => {
  await store.unload()
})
</script>

<template>
  <template
    v-if="!loading"
  >
    <v-app-bar
      v-if="isSupported && orientation === 'portrait-primary'"
      :title="store.scene.title"
      :elevation="4"
    >
      <template #prepend>
        <v-chip
          rounded
          :color="store.scene.category"
        >
          Q{{ store.scene.id }}
        </v-chip>
      </template>
    </v-app-bar>
    <v-main
      @contextmenu.prevent
    >
      <PuzzleStage />
      <PuzzleBottomMenu
        v-if="isSupported && orientation === 'portrait-primary'"
        :height="navigationHeight"
      />
    </v-main>
    <SceneNavigationDialog />
    <SceneSplash />
    <SceneResult />
  </template>
</template>
