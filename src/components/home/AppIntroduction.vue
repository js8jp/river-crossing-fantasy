<script lang="ts" setup>
import { useSessionStore } from '@/stores/session';
const { state: session } = storeToRefs(useSessionStore())
</script>

<template>
  <v-dialog
    v-model="session.introduction"
    persistent
    :retain-focus="false"
    class="d-flex justify-center align-center"
  >
    <v-card
      title="River Crossing Fantasy"
      class="overflow-y-auto opacity-90"
    >
      <v-divider />
      <v-card-text class="overflow-y-auto pa-0">
        <v-card-item subtitle="このゲームについて:">
          <v-card-text class="py-1">
            このゲームは、川岸にいる一団を、登場人物たちが持つ特性を考慮しつつ、条件を満たしながら対岸に渡すゲームです。
            このようなゲームは通称「River Crossing Puzzle」（川渡りパズル）と呼ばれており、古くから世界中で親しまれています。
          </v-card-text>
        </v-card-item>
        <v-card-item subtitle="推奨環境:">
          <v-card-text class="py-1">
            スマートフォンまたはタブレットの縦向きでのプレイを想定していますが、横向きでもPC（マウス操作）でもプレイは可能です。
          </v-card-text>
        </v-card-item>
        <v-card-item subtitle="開発環境:">
          <v-card-text class="py-1">
            このアプリケーションは
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              class="text-decoration-none"
            >
              Vuetify 3
            </a>
            で開発しています。
          </v-card-text>
        </v-card-item>
        <v-card-item subtitle="作者:">
          <v-card-text class="py-1">
            <a
              href="https://github.com/8amjp"
              target="_blank"
              class="text-decoration-none"
            >
              8Games
            </a>
          </v-card-text>
        </v-card-item>
        <v-card-item subtitle="素材:">
          <v-card-text class="py-1">
            BGM:
            <a
              href="https://dova-s.jp/bgm/play14344.html"
              target="_blank"
              class="text-decoration-none"
            >
              RiversideEnd
            </a>
          </v-card-text>
          <v-card-text class="py-1">
            イラスト協力:
            <a
              href="https://aipicasso.app/"
              target="_blank"
              class="text-decoration-none"
            >
              AI Picasso
            </a>
          </v-card-text>
        </v-card-item>
      </v-card-text>
      <v-divider />
      <v-card-actions class="d-flex justify-center">
        <v-btn @click.stop="session.introduction = false">
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
