import type { Scene } from '@/types'
const scene: Scene = Object.freeze({
  id: 69,
  title: '絶体絶命パーティ(2)',
  category: 85,
  order: 2,
  rules: {
    conditions: [
      '登場人物をそれぞれの天敵から保護しつつ、すべての登場人物を対岸に渡す',
      '最小回数でクリアする'
    ],
    transportation: '2人乗りの筏（いかだ）が1艘（そう）。ただし筏（いかだ）を漕（こ）げるのは魔獣使い、死霊使い、騎士のみ。',
    tips: [
      '魔獣は、魔獣使いが目を離すと、近くにいる死霊以外の全員を襲います。',
      '死霊は、死霊使いが目を離すと、近くにいる魔獣以外の全員を襲います。',
      '騎士は、他国の王女が近くにおり、かつその国の騎士が近くにいない場合、王女を襲います。'
    ],
  },
  passing: 17,
  carriers: [{
    id: 0,
    capacity: 2,
    appearance: 'raft2'
  }],
  casts: [{
    id: 0,
    name: '魔獣使い',
    appearance: 'beasttamer1',
    role: {
      rower: true,
      predators: [{
        predator: 3,
        guardian: 2,
      }]
    },
  }, {
    id: 1,
    name: '魔獣',
    description: '魔獣使いが目を離すと死霊以外の全員を襲う。',
    appearance: 'therianthropy1',
    role: {
      rower: false,
      demihuman: true
    }
  }, {
    id: 2,
    name: '死霊使い',
    appearance: 'necromancer1',
    role: {
      rower: true,
      predators: [{
        predator: 1,
        guardian: 0,
      }]
    }
  }, {
    id: 3,
    name: '死霊',
    description: '死霊使いが目を離すと魔獣以外の全員を襲う。',
    appearance: 'undead1',
    role: {
      rower: false
    }
  }, {
    id: 4,
    name: '青国騎士',
    description: '赤国騎士が目を離すと赤国王女を襲う。',
    appearance: 'knight1',
    role: {
      rower: true,
      predators: [{
        predator: 1,
        guardian: 0
      }, {
        predator: 3,
        guardian: 2,
      }]
    }
  }, {
    id: 5,
    name: '青国王女',
    appearance: 'princess11',
    role: {
      rower: false,
      predators: [{
        predator: 1,
        guardian: 0
      }, {
        predator: 3,
        guardian: 2
      }, {
        predator: 6,
        guardian: 4
      }, {
        predator: 8,
        guardian: 4
      }, {
        predator: 9,
        guardian: 4
      }]
    }
  }, {
    id: 6,
    name: '赤国騎士',
    description: '青国騎士が目を離すと青国王女を襲う。',
    appearance: 'knight2',
    role: {
      rower: true,
      predators: [{
        predator: 1,
        guardian: 0
      }, {
        predator: 3,
        guardian: 2,
      }]
    }
  }, {
    id: 7,
    name: '赤国王女',
    appearance: 'princess21',
    role: {
      rower: false,
      predators: [{
        predator: 1,
        guardian: 0
      }, {
        predator: 3,
        guardian: 2
      }, {
        predator: 4,
        guardian: 6
      }, {
        predator: 8,
        guardian: 6
      }, {
        predator: 9,
        guardian: 6
      }]
    }
  }, {
    id: 8,
    name: '緑国騎士',
    description: '他国の騎士が目を離すとその国の王女を襲う。',
    appearance: 'knight3',
    role: {
      rower: true,
      predators: [{
        predator: 1,
        guardian: 0
      }, {
        predator: 3,
        guardian: 2
      }]
    }
  }, {
    id: 9,
    name: '紫国騎士',
    description: '他国の騎士が目を離すとその国の王女を襲う。',
    appearance: 'knight4',
    role: {
      rower: true,
      predators: [{
        predator: 1,
        guardian: 0
      }, {
        predator: 3,
        guardian: 2
      }]
    }
  }]
})
export default scene
