
/**
 * 行動履歴
 */
export interface Move {
  /** 移動した登場人物 */
  casts: Cast[]
  /** 出発地点の座標 */
  origin: number
  /** 到着地点の座標 */
  destination: number
  /** 所要時間 */
  value: number
  /** 結果 */
  result?: string
}
