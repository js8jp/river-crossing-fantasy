import type { Scene } from '@/types'
const scene: Scene = Object.freeze({
  id: 46,
  title: 'わがまま王女の旅(3)',
  category: 20,
  order: 3,
  rules: {
    conditions: [
      '王女同士が喧嘩（けんか）しないよう気を遣いつつ、すべての登場人物を対岸に渡す',
      '最小回数でクリアする'
    ],
    transportation: '2人乗りの筏（いかだ）が1艘（そう）。すべての登場人物が筏（いかだ）を漕（こ）げる。',
    tips: [
      '**王女たちを二人きり**にしないよう気を付けましょう。。',
    ],
  },
  passing: 7,
  carriers: [{
    id: 0,
    capacity: 2,
    appearance: 'raft2'
  }],
  casts: [{
    id: 0,
    name: '青国王女',
    description: '他国の王女と二人きりになることを嫌う。',
    appearance: 'princess11',
    role: {
      rower: true,
      discord: [ 1, 2 ]
    }
  }, {
    id: 1,
    name: '赤国王女',
    description: '他国の王女と二人きりになることを嫌う。',
    appearance: 'princess21',
    role: {
      rower: true,
      discord: [ 0, 2 ]
    }
  }, {
    id: 2,
    name: '緑国王女',
    description: '他国の王女と二人きりになることを嫌う。',
    appearance: 'princess31',
    role: {
      rower: true,
      discord: [ 0, 1 ]
    }
  }, {
    id: 3,
    name: '従者A',
    appearance: 'maid1',
    role: {
      rower: true
    }
  }, {
    id: 4,
    name: '従者B',
    appearance: 'maid2',
    role: {
      rower: true
    }
  }]
})
export default scene
