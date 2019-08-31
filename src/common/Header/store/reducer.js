const defaultState = {
  isFocus:false

}

export default (state = defaultState, action) => {
  switch(action.type){
    case 'search_focus': 
    return{
      isFocus:true
    };
    case 'search_blur':return{
      isFocus:false
    }

    default:return state
  }
  return state
}