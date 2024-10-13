import type { Scene } from '@/types'
const scene: Scene = Object.freeze({
  id: 24,
  title: '闇夜の旅路(3)',
  category: 7,
  order: 3,
  rules: {
    conditions: [
      'すべての登場人物を対岸に渡す',
      '最短時間でクリアする'
    ],
    transportation: '吊り橋の人数制限は2人まで。移動時はたいまつが必要。',
    tips: [
      '4人で橋を渡ります。最も遅い魔法使いは、橋を渡るのに8分かかります。',
      '古くから「bridge and torch problem」（橋とたいまつの問題）等の名で知られる川渡りパズルを改変したものです。',
    ],
  },
  landscape: {
    night: true
  },
  passing: 15,
  level: 4,
  recommended: true,
  carriers: [{
    id: 0,
    capacity: 2,
    appearance: 'touch'
  }],
  casts: [{
    id: 0,
    name: '盗賊',
    appearance: 'thief1',
    role: {
      duration: 1
    }
  }, {
    id: 1,
    name: '戦士',
    appearance: 'fighter1',
    role: {
      duration: 2
    }
  }, {
    id: 2,
    name: '司祭',
    appearance: 'priest1',
    role: {
      duration: 5
    }
  }, {
    id: 3,
    name: '魔法使い',
    appearance: 'mage1',
    role: {
      duration: 8
    }
  }]
})
export default scene
