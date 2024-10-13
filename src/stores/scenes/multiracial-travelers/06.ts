import type { Scene } from '@/types'
const scene: Scene = Object.freeze({
  id: 67,
  title: '村人とエルフと吟遊詩人(1)',
  category: 1,
  order: 6,
  rules: {
    conditions: [
      'エルフと人間が筏（いかだ）に同乗しないよう気を遣い、かつ吟遊詩人が独りぼっちにならないよう気を遣いながら、すべての登場人物を対岸に渡す',
      '最小回数でクリアする'
    ],
    transportation: '2人乗りの筏（いかだ）が1艘（そう）。すべての登場人物が筏（いかだ）を漕（こ）げる。',
    tips: [
      'エルフと人間が筏（いかだ）に同乗せず、かつ吟遊詩人が独りぼっちにならない状態を維持しながら川を渡るパズルです。',
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
    name: '村人A',
    appearance: 'villager1',
    role: {
      rower: true
    }
  }, {
    id: 1,
    name: '村人B',
    appearance: 'villager2',
    role: {
      rower: true
    }
  }, {
    id: 2,
    name: 'エルフ',
    description: '人間と一緒に筏（いかだ）に乗ることを嫌う。',
    appearance: 'elf1',
    role: {
      rower: true,
      demihuman: true,
      misanthrope: true
    }
  }, {
    id: 3,
    name: '吟遊詩人',
    description: '独りぼっちを嫌う。',
    appearance: 'bard1',
    role: {
      rower: true,
      monophobia: true
    }
  }]
})
export default scene
