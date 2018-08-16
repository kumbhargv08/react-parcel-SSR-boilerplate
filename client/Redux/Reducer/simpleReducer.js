export default (state = {
  data:[{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    }
  }]
}, action) => {
  let data;
  switch (action.type) {
    case 'ADD_ROW':
      data = []
      data = state.data
      data.push(action.data)
      return Object.assign({},state,{data:data})
    case 'DELETE_ROW':
      data = state.data
      data.pop()
      return Object.assign({},state,{data:data})
    default:
      return state
  }
}