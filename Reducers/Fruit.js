const Fruits = (state = [], action) => {
  let index = null;
  switch (action.type) {
    case 'ADD_FRUIT':
      index = state.findIndex((x) => x.name === action.fruit.name)
      if (index >= 0) {
        return [...state]
      }
      return [
        ...state,
        action.fruit
      ]    
    case 'DELETE_FRUIT':
      index = state.findIndex((x) => x.id === action.fruit.id)
      return [
        ... state.slice(0, index),
        ... state.slice(index + 1)
      ]
    default:
      return state
  }
}

export default Fruits
