import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TDarticalContents from './TDarticalContents'

function TDartical() {
  const todolist = useSelector((state)=> {
    return state.todolist
  });

  const dispatch = useDispatch();
  
  return (
    <div>
      <TDarticalContents articalText="할일목록" isDone={false}/>
      <TDarticalContents articalText="완료목록" isDone/>
    </div>
  )
};

export default TDartical;