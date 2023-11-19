import type { Scene } from '@/types/scene'
const scene: Scene = Object.freeze({
  id: 10,
  title: '逃避行（初級編2）',
  description: {
    conditions: 'すべての登場人物を最小回数で対岸に渡す',
    transportation: '2人乗りの舟が1<ruby>艘<rt>そう</rt></ruby>。ただし騎士の重量は定員2人分。すべての登場人物が舟を<ruby>漕<rt>こ</rt></ruby>げる。',
  },
  category: 'weight-limited',
  level: 2,
  passing: 9,
  carriers: [{
    id: 0,
    capacity: 2,
    weightLimit: 2,
    appearance: {
      sprite: 'boat2'
    }
  }],
  casts: [{
    id: 0,
    name: '騎士A',
    appearance: {
      sprite: 'knight31',
    },
    role: {
      weight: 2,
    },
  }, {
    id: 1,
    name: '騎士B',
    appearance: {
      sprite: 'knight32'
    },
    role: {
      weight: 2
    }
  }, {
    id: 2,
    name: '村人A',
    appearance: {
      sprite: 'villager1'
    },
    role: {
      weight: 1
    }
  }, {
    id: 3,
    name: '村人B',
    appearance: {
      sprite: 'villager2'
    },
    role: {
      weight: 1
    }
  }]
})
export default scene
