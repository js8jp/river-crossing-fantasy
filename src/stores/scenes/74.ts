import type { Scene } from '@/types/scene'
const scene: Scene = Object.freeze({
  id: 30,
  title: '闇夜の旅路(4)',
  category: 7,
  order: 4,
  level: 4,
  rules: {
    conditions: [
      'すべての登場人物を対岸に渡す',
      '最短時間でクリアする'
    ],
    transportation: '吊り橋の人数制限は2人まで。移動時はたいまつが必要。',
  },
  landscape: {
    night: true
  },
  passing: 30,
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
      duration: 3
    }
  }, {
    id: 2,
    name: '司祭',
    appearance: 'priest1',
    role: {
      duration: 7
    }
  }, {
    id: 3,
    name: '魔法使い',
    appearance: 'mage1',
    role: {
      duration: 9
    }
  }, {
    id: 4,
    name: '王女',
    appearance: 'princess11',
    role: {
      duration: 12
    }
  }]
})
export default scene
