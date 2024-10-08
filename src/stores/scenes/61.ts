import type { Scene } from '@/types/scene'
const scene: Scene = Object.freeze({
  id: 8,
  title: '商人は荷物が多い(1)',
  category: 6,
  order: 1,
  level: 1,
  rules: {
    conditions: [
      '重量制限に気を付けながら、すべての登場人物を対岸に渡す',
      '5回以内にクリアする'
    ],
    transportation: '2人乗りの筏（いかだ）が1艘（そう）。すべての登場人物が筏（いかだ）を漕（こ）げる。',
    tips: [
      '筏（いかだ）には、定員の他に重量制限が設定されています。',
      '今回登場する商人は、荷物が多いため、**定員2人分の重量があります**。',
      '重量オーバーになる場合は、登場人物を筏（いかだ）に乗せることはできません。',
    ],
  },
  passing: 5,
  carriers: [{
    id: 0,
    capacity: 2,
    appearance: 'raft2'
  }],
  casts: [{
    id: 0,
    name: '戦士',
    appearance: 'fighter1',
    role: {
      rower: true,
      weight: 1
    }
  }, {
    id: 1,
    name: '盗賊',
    appearance: 'thief1',
    role: {
      rower: true,
      weight: 1
    }
  }, {
    id: 2,
    name: '商人',
    appearance: 'merchant1',
    role: {
      rower: true,
      weight: 2,
    }
  }]
})
export default scene
