import type { Scene } from '@/types/scene'
const scene: Scene = Object.freeze({
  id: 15,
  title: '魔獣たちの反乱（中級編1）',
  level: 3,
  category: 'keep-majority',
  rules: {
    conditions: [
      '両岸で魔獣使い側が半数以上を維持しつつ、すべての登場人物を対岸に渡す',
      '最小回数でクリアする'
    ],
    transportation: '2人乗りの筏（いかだ）が1艘（そう）。すべての登場人物が筏（いかだ）を漕（こ）げる。',
    tips: [
      '魔獣使い側が半数以上を維持しつつ川を渡るパズルです。',
      '古くから「missionaries and cannibals problem」（宣教師と先住民）の名で知られる川渡りパズルを改変したものです。',
    ],
  },
  passing: 11,
  carriers: [{
    id: 0,
    capacity: 2,
    appearance: {
      sprite: 'raft2'
    }
  }],
  casts: [{
    id: 0,
    name: '魔獣使いA',
    appearance: {
      sprite: 'beasttamer1'
    },
    role: {
      rebel: false
    }
  }, {
    id: 1,
    name: '魔獣使いB',
    appearance: {
      sprite: 'beasttamer2'
    },
    role: {
      rebel: false
    }
  }, {
    id: 2,
    name: '魔獣使いC',
    appearance: {
      sprite: 'beasttamer3'
    },
    role: {
      rebel: false
    }
  }, {
    id: 3,
    name: '魔獣A',
    appearance: {
      sprite: 'therianthropy1'
    },
    role: {
      rebel: true
    }
  }, {
    id: 4,
    name: '魔獣B',
    appearance: {
      sprite: 'therianthropy2'
    },
    role: {
      rebel: true
    }
  }, {
    id: 5,
    name: '魔獣C',
    appearance: {
      sprite: 'therianthropy3'
    },
    role: {
      rebel: true
    }
  }]
})
export default scene