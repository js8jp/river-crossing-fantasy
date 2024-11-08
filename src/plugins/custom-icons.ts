import {
  mdiAccountMultiple,
  mdiArrowDown,
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowUp,
  mdiBookOpenPageVariant,
  mdiChatAlert,
  mdiCog,
  mdiCrown,
  mdiCrownOutline,
  mdiDice1,
  mdiDice2,
  mdiDice3,
  mdiDice4,
  mdiDice5,
  mdiHistory,
  mdiHome,
  mdiLockOpen,
  mdiMapSearch,
  mdiMusic,
  mdiMusicOff,
  mdiRestart,
  mdiSwapVertical,
  mdiVolumeHigh,
} from '@mdi/js'
const aliases: {
  [name: string]: string
}
 = {
  casts: mdiAccountMultiple,
  conditions: mdiLockOpen,
  home: mdiHome,
  inbound: mdiArrowUp,
  left: mdiArrowLeft,
  level1: mdiDice1,
  level2: mdiDice2,
  level3: mdiDice3,
  level4: mdiDice4,
  level5: mdiDice5,
  moves: mdiHistory,
  mute: mdiMusicOff,
  outbound: mdiArrowDown,
  restart: mdiRestart,
  right: mdiArrowRight,
  settings: mdiCog,
  scoreEmpty: mdiCrownOutline,
  scoreFull: mdiCrown,
  solve: mdiMapSearch,
  sound: mdiMusic,
  story: mdiBookOpenPageVariant,
  transportation: mdiSwapVertical,
  tips: mdiChatAlert,
  volume: mdiVolumeHigh,
}

export default aliases
