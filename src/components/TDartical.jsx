import React from 'react'
import { useSelector } from 'react-redux'
import { TDarticalDiv } from './TDcss'

function TDartical() {
  const todolist = useSelector((state)=> {
    return state.todolist
  })
  
  return (
    <div>
    {todolist.map(el => {
      return (
        <TDarticalDiv key={el.id}>
          <p>{el.title}</p>
          <p>{el.txt}</p>
          <button>완료</button>
          <button>삭제</button>
        </TDarticalDiv>
      )
    })}
    </div>
  )
}

export default TDartical