import type { Scene } from '@/types/scene'
const scene = Object.freeze({
  id: 12,
  title: '魔獣使いの苦悩（中級編）',
  description: {
    conditions: '両岸で魔獣使い側が半数以上を維持しつつ、すべてのキャラクターを最小回数で対岸に渡す',
    transportation: '2人乗りの舟が1艘。すべてのキャラクターが舟を漕げる。',
  },
  tips: [
    '古くから「missionaries and cannibals problem」（宣教師と先住民）の名で知られる川渡りパズルを改変したもの。',
  ],
  category: 'keep-majority',
  landscape: '/images/landscapes/daytime-river.png',
  passing: 11,
  carriers: [{
    id: 0,
    capacity: 2,
    appearance: {
      sprite: '/images/carriers/boat2.png'
    }
  }],
  casts: [{
    id: 0,
    name: '魔獣使いA',
    appearance: {
      sprite: '/images/casts/beast-tamer1.png'
    },
    role: {
      rebel: false
    }
  }, {
    id: 1,
    name: '魔獣使いB',
    appearance: {
      sprite: '/images/casts/beast-tamer2.png'
    },
    role: {
      rebel: false
    }
  }, {
    id: 2,
    name: '魔獣使いC',
    appearance: {
      sprite: '/images/casts/beast-tamer3.png'
    },
    role: {
      rebel: false
    }
  }, {
    id: 3,
    name: '魔獣A',
    appearance: {
      sprite: '/images/casts/therianthropy1.png'
    },
    role: {
      rebel: true
    }
  }, {
    id: 4,
    name: '魔獣B',
    appearance: {
      sprite: '/images/casts/therianthropy2.png'
    },
    role: {
      rebel: true
    }
  }, {
    id: 5,
    name: '魔獣C',
    appearance: {
      sprite: '/images/casts/therianthropy3.png'
    },
    role: {
      rebel: true
    }
  }]
}) as Scene
export default scene
