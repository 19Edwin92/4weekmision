import React from 'react'
import TDarticalContents from './TDarticalContents'

function TDartical() {
  return (
    <div>
      <TDarticalContents articalText="할일목록" isDone={false}/>
      <TDarticalContents articalText="완료목록" isDone/>
    </div>
  )
};

export default TDartical;