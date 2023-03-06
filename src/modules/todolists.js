const initialState = [
  {id:1678075618574, title:"리액트 배우기(1)", txt:"리액트를 오늘부터 배워보자."},
]

const PLUSETD = "pluse_todo"

export const D_PLUSETD = (payload) => {
  console.log(payload.title)
  console.log(payload.txt)
  console.log(initialState)
  return {
    type:PLUSETD,
    payload : payload
  }
}


const todolist = (state=initialState, action) => {
  switch (action.type) {
    case PLUSETD :
      return [...state, {id:Date.now(), title:action.payload.title, txt:action.payload.txt},]
    default :
      return state
  }
}

export default todolist