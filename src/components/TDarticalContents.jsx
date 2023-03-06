import React from 'react'
import { TDarticalContentsDiv, TDarticalDiv } from './TDcss'
import { useSelector, useDispatch } from 'react-redux'
import { D_DELETETD, D_DONETD } from '../modules/todolists';

function TDarticalContents({articalText, isDone}) {
  const todolist = useSelector((state)=> {
    return state.todolist
  });
  const dispatch = useDispatch();

  return (
    <TDarticalContentsDiv>
      {/* 조건이 하나일 때 "if.jh" 너의 이름은 뭐니 */}
      <p className='title'>{articalText}</p>
      {todolist.map(el => 
        el.isDone === isDone &&
           (
            <TDarticalDiv key={el.id}>
              <p>{el.title}</p>
              <p>{el.txt}</p>
              <button onClick={() => dispatch(D_DONETD(el.id))}>완료</button>
              <button onClick={() => dispatch(D_DELETETD(el.id))}>삭제</button>
              <button>수정</button>
            </TDarticalDiv>
          )
      )}
    </TDarticalContentsDiv>
  )
}

export default TDarticalContents

{/* {todolist.map(el => {
  if (el.isDone === isDone) {
    return (
      <TDarticalDiv key={el.id}>
        <p>{el.title}</p>
        <p>{el.txt}</p>
        <button onClick={() => dispatch(D_DONETD(el.id))}>완료</button>
        <button onClick={() => dispatch(D_DELETETD(el.id))}>삭제</button>
      </TDarticalDiv>
    )
  }
})} */}