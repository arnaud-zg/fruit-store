let nextFruitId = 0
export const addFruit = (fruit) => {
  return {
    type: 'ADD_FRUIT',
    id: nextFruitId + 1,
    fruit
  }
}

export const deleteFruit = (fruit) => {
  return {
    type: 'DELETE_FRUIT',
    id: nextFruitId - 1,
    fruit
  }
}
