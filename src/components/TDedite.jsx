import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { D_UPDATE } from '../modules/todolists'



function TDedite({el}) {
  const id = el.id
  const [edit, setEdit] = useState(false)
  const [txt, setTxt] = useState('')
  const dispatch = useDispatch();

  const editFunc = (e) => {
    setEdit((boolean => !boolean))
  }
  const checkFunc = (e) => {
    dispatch(D_UPDATE({id,txt}))
    setEdit((boolean => !boolean));
    setTxt('')
  }
  const navigate = useNavigate();

  return (
    <>
    {edit ? <input required type="text" value={txt} onChange={e=> setTxt(e.target.value)}/> : <span style={{cursor:"pointer"}} onClick={()=> {navigate(`/todo/${el.id}`)}}>{el.txt}</span>}
    {edit ? <input type="button" value="확인" onClick={checkFunc} /> : <input type="button" value="수정" onClick={editFunc}/>}
    </>
  )
}

export default TDedite