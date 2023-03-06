const initialState = [
  {id:1678075618574, title:"리액트 배우기(1)", txt:"리액트를 오늘부터 배워보자.", isDone:false},
  {id:1678075618575, title:"리액트 배우기(2)", txt:"리액트를 오늘부터 배워보자.", isDone:false},
  {id:1678075618576, title:"리액트 배우기(3)", txt:"리액트를 오늘부터 배워보자.", isDone:false},
]

const PLUSETD = "pluse_todo"
const EDLETETD = "delete_todo"
const DONETD = "done_todo"
const UPDATE = "update_todo"

export const D_PLUSETD = (payload) => {
  console.log(payload)
  return {
    type:PLUSETD,
    payload
  }
}

export const D_DONETD = (payload) => {
  return {
    type:DONETD,
    payload
  }
}

export const D_DELETETD = (payload) => {
  return {
    type:EDLETETD,
    payload
  }
}

export const D_UPDATE = (payload) => {
  return {
    type:UPDATE,
    payload:payload
  }
}

const todolist = (state=initialState, action) => {
  switch (action.type) {
    case PLUSETD :
      return [...state, {id:Date.now(), title:action.payload.title, txt:action.payload.txt, isDone:false},]
    case EDLETETD:
      const deleteTD = state.filter(el=> el.id !== Number(action.payload))
      return [...deleteTD]
    case DONETD:
      const doneTD = state.find(el=> el.id === Number(action.payload))
      doneTD.isDone = true
      return [...state]
    case UPDATE:
      const updateTD = state.find(el=> el.id === Number(action.payload.id))
      updateTD.txt = action.payload.txt
      return [...state]
    default :
      return state
  }
}

export default todolist