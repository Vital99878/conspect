type Range = [number, number, boolean]
/**
 * Искомое значение находистя в диапазоне?
 * @item  - number
 * @range  - [min ,max, isStrict].  isStrict - указывает, неравенство строгое или нет.
 * @return  - boolean
 */
export function isInRange(item: number, range: Range ): boolean {
  const [min, max, isStrict] = range

  if (isStrict) return min < item && item < max

  return min <= item && item <= max
}

