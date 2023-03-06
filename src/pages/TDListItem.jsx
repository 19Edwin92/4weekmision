import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function TDListItem() {
  const todo = useSelector((state)=> {
    return state.todolist
  })
  const prams = useParams();
  console.log(prams.id)

  const findtodo = todo.find(el=> el.id === Number(prams.id))
  const navigate = useNavigate();
  
  return (
    <div>
      <input type="button" value="돌아가기" onClick={()=> {navigate("/")}}/>
      <p>{findtodo.title}</p>
      <p>{findtodo.txt}</p>
    </div>
  )
}

export default TDListItem