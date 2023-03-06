const initialState = [
  {id:1678075618574, title:"리액트 배우기(1)", txt:"리액트를 오늘부터 배워보자."},
  {id:1678075618575, title:"리액트 배우기(2)", txt:"리액트를 오늘부터 배워보자."},
  {id:1678075618576, title:"리액트 배우기(3)", txt:"리액트를 오늘부터 배워보자."},
]

const PLUSETD = "pluse_todo"
const EDLETETD = "delete_todo"

export const D_PLUSETD = (payload) => {
  return {
    type:PLUSETD,
    payload
  }
}

export const D_EDLETETD = (payload) => {
  console.log(payload)
  return {
    type:EDLETETD,
    payload
  }
}


const todolist = (state=initialState, action) => {
  switch (action.type) {
    case PLUSETD :
      return [...state, {id:Date.now(), title:action.payload.title, txt:action.payload.txt},]
    case EDLETETD:
      const deleteTD = state.filter(el=> el.id !== Number(action.payload))
      console.log(deleteTD)
      return state
    default :
      return state
  }
}

export default todolist