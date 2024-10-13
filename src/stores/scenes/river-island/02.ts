import type { Scene } from '@/types'
const scene: Scene = Object.freeze({
  id: 33,
  title: '魔獣たちの反乱（最上級編）',
  category: 9,
  order: 2,
  rules: {
    conditions: [
      '両岸および中州の上で魔獣使い側が半数以上を維持しつつ、すべての登場人物を対岸に渡す',
      '最小回数でクリアする'
    ],
    transportation: '2人乗りの筏（いかだ）が1艘（そう）。すべての登場人物が筏（いかだ）を漕（こ）げる。川の中の島に降りることもできる。',
  },
  landscape: {
    island: true
  },
  passing: 26,
  carriers: [{
    id: 0,
    capacity: 2,
    appearance: 'raft2'
  }],
  casts: [{
    id: 0,
    name: '魔獣使いA',
    appearance: 'beasttamer1',
    role: {
      rower: true,
      rebel: false
    }
  }, {
    id: 1,
    name: '魔獣使いB',
    appearance: 'beasttamer2',
    role: {
      rower: true,
      rebel: false
    }
  }, {
    id: 2,
    name: '魔獣使いC',
    appearance: 'beasttamer3',
    role: {
      rower: true,
      rebel: false
    }
  }, {
    id: 3,
    name: '魔獣使いD',
    appearance: 'beasttamer4',
    role: {
      rower: true,
      rebel: false
    }
  }, {
    id: 4,
    name: '魔獣A',
    appearance: 'therianthropy1',
    role: {
      rower: true,
      rebel: true
    }
  }, {
    id: 5,
    name: '魔獣B',
    appearance: 'therianthropy2',
    role: {
      rower: true,
      rebel: true
    }
  }, {
    id: 6,
    name: '魔獣C',
    appearance: 'therianthropy3',
    role: {
      rower: true,
      rebel: true
    }
  }, {
    id: 7,
    name: '魔獣D',
    appearance: 'therianthropy4',
    role: {
      rower: true,
      rebel: true
    }
  }]
})
export default scene
