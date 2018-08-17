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
  let tempObjects;
  switch (action.type) {
    case 'ADD_ROW':
      tempObjects = []
      state.data.map( object => {
        let new_object = {}
        Object.assign( new_object, object )
        tempObjects.push( new_object )
      });
      tempObjects.push(action.data)
      return Object.assign({},state,{data:tempObjects})
    case 'DELETE_ROW':
      tempObjects = []
      state.data.map( object => {
        let new_object = {}
        Object.assign( new_object, object )
        tempObjects.push( new_object )
      });
      tempObjects.pop()
      return Object.assign({},state,{data: tempObjects})
    default:
      return state
  }
}