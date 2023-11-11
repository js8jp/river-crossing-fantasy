import type { Scene } from '@/types/scene'
const scene: Scene = Object.freeze({
  id: 10,
  title: '防衛戦線（初級編1）',
  description: {
    conditions: '王女を他国の騎士から保護しつつ、すべてのキャラクターを最小回数で対岸に渡す',
    transportation: '2人乗りの舟が1艘。すべてのキャラクターが舟を漕げる。',
    tips: [
      '騎士達が同国の王女を保護しながら川を渡るパズルです。',
      '王女は、他国の騎士が近くにいて、かつ同国の騎士が近くにいない場合、他国の騎士に襲われてしまいます。',
      'いずれかのキャラクターが危機に瀕している状況で舟を移動させることはできません。',
    ],
  },
  category: 'escorting-celebrity',
  level: 2,
  passing: 5,
  carriers: [{
    id: 0,
    capacity: 2,
    appearance: {
      sprite: '/images/carriers/boat2.png'
    }
  }],
  casts: [{
    id: 0,
    name: 'A国騎士',
    description: '他国の騎士が目を離すと他国の王女を襲う。',
    appearance: {
      sprite: '/images/casts/knight-a1.png'
    },
    role: {
    }
  }, {
    id: 1,
    name: 'A国王女',
    appearance: {
      sprite: '/images/casts/princess-a1.png'
    },
    role: {
      predators: [{
        predator: 2,
        guardian: 0,
      }]
    }
  }, {
    id: 2,
    name: 'B国騎士',
    description: '他国の騎士が目を離すと他国の王女を襲う。',
    appearance: {
      sprite: '/images/casts/knight-b1.png'
    },
    role: {
    }
  }, {
    id: 3,
    name: 'B国王女',
    appearance: {
      sprite: '/images/casts/princess-b1.png'
    },
    role: {
      predators: [{
        predator: 0,
        guardian: 2,
      }]
    }
  }]
})
export default scene
