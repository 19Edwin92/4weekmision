import React from 'react'
import { useSelector } from 'react-redux'
import { TDarticalDiv } from './TDcss'
import { useDispatch } from 'react-redux'
import { D_EDLETETD } from '../modules/todolists';

function TDartical() {
  const todolist = useSelector((state)=> {
    return state.todolist
  });

  const dispatch = useDispatch();
  
  return (
    <div>
    {todolist.map(el => {
      return (
        <TDarticalDiv key={el.id}>
          <p>{el.title}</p>
          <p>{el.txt}</p>
          <button>완료</button>
          <button onClick={()=> dispatch(D_EDLETETD(el.id))}>삭제</button>
        </TDarticalDiv>
      )
    })}
    </div>
  )
};

export default TDartical;