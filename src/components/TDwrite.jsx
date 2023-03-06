import React, { useState } from 'react'
import { TDarticalForm } from './TDcss'
import { useDispatch } from 'react-redux'
import { D_PLUSETD } from '../modules/todolists'

function TDwrite() {
  const [title, setTitle] = useState('')
  const [txt, setTxt] = useState('')
  const dispatch = useDispatch();

  return (
    <TDarticalForm onSubmit={
      (e)=>{e.preventDefault();
      dispatch(D_PLUSETD({title, txt}));
      setTitle('');
      setTxt('')
      }}>
      
      할일이름 : <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <br/>
      할일내용 : <input required type="text" value={txt} onChange={(e) => setTxt(e.target.value)}/>
      <br/>
      <input type="submit" onSubmit={()=>dispatch(D_PLUSETD({title, txt}))}/>
    </TDarticalForm>
  )
}

export default TDwrite