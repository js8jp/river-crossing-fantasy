<script lang="ts" setup>
import { onMounted } from 'vue'
import "@fontsource/architects-daughter"
import casts from '@/assets/images/casts'
import { AppIntroduction, AppSettings } from '@/components'
import { useCast } from '@/composables'
import { convert } from '@/composables/use-text'
import { useRecordsStore } from '@/store/records'
import { useSessionStore } from '@/store/session'
import { useSettingsStore } from '@/store/settings'
const settings = useSettingsStore()
const session = useSessionStore()
const records = useRecordsStore()
const { getTransform } = useCast()
onMounted(async () => {
  if (!records.state.level.has(1)) records.state.level.add(1)
  const nextSceneId = records.getNextSceneId()
  document.getElementById(`s${nextSceneId}`)?.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })
})
</script>

<template>
  <v-app-bar
    :elevation="2"
    density="compact"
    color="secondary"
    title="River Crossing Fantasy"
    style="font-family: 'Architects Daughter', cursive;"
  ></v-app-bar>
  <v-main>
    <v-parallax
      src="@/assets/images/title.png"
      class="h-100"
    >
      <v-container>
        <template
          v-for="scene in records.scenes"
          :key="scene.id"
        >
          <v-list-subheader
            v-if="records.header(scene.id)"
          >
            <v-icon
              icon="mdi-speedometer"
            ></v-icon>
            {{ records.header(scene.id) }}
          </v-list-subheader>
          <v-list-item
            lines="one"
            :id="`s${scene.id}`"
            :to="`/${scene.id}`"
            :title="scene.title"
            :disabled="!settings.state.debug && !records.isQualified(scene.level)"
            class="elevation-4 rounded my-1"
            style="background-color: hsla(0, 0%, 100%, 0.95)"
          >
            <v-list-item-subtitle>
              <div v-html="convert(scene.rules.conditions[0])"></div>
            </v-list-item-subtitle>
            <v-list-item-subtitle
              class="d-flex justify-end align-end"
            >
              <v-avatar
                v-for="cast in scene.casts"
                :key="cast.id"
                size="24"
              >
                <v-img
                  :src="casts[cast.appearance]"
                  :style="{ transform: getTransform(cast, 1) }"
                  style="transform-origin: bottom center;"
                ></v-img>
              </v-avatar>
            </v-list-item-subtitle>
            <template v-slot:prepend>
              <v-chip
                rounded
                :color="scene.category"
                class="mr-3"
              >
                Q{{scene.id}}
              </v-chip>
            </template>
            <template v-slot:append>
              <v-icon
                v-if="!records.state.level.has(scene.level)"
                icon="mdi-lock"
              ></v-icon>
              <v-rating
                v-if="records.state.level.has(scene.level)"
                readonly
                density="compact"
                size="small"
                :length="2"
                :model-value="records.getScore(scene.id)"
                active-color="orange"
              ></v-rating>
            </template>
          </v-list-item>
        </template>
      </v-container>
    </v-parallax>
  </v-main>
  <v-footer
    app
    class="pa-0"
  >
    <v-banner
      lines="one"
      text="River Crossing Fantasy"
      color="primary"
      class="px-3 py-0"
      style="font-family: 'Architects Daughter', cursive;"
    >
      <template v-slot:actions>
        <v-btn
          @click.stop="session.state.introduction = true"
        >
          このゲームについて
        </v-btn>
        <v-btn
          @click.stop="session.state.settings = true"
        >
          設定
        </v-btn>
      </template>
    </v-banner>
  </v-footer>
  <AppIntroduction></AppIntroduction>
  <AppSettings></AppSettings>
</template>
