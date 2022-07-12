export const AddItem = 'list/addItem'

export const PopItem = 'list/popItem'

export const getAddAction = (payload) => ({
  type: AddItem,
  payload,
})

export const getPopAction = (payload) => ({
  type: PopItem,
  payload,
})
