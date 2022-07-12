export const Decrease = 'num/decrease'
export const Increase = 'num/increase'

export const getDecreaseAction = (payload) => ({
  type: Decrease,
  payload,
})

export const getIncreaseAction = (payload) => ({
  type: Increase,
  payload,
})
