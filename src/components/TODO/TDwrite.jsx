import { useDispatch } from 'react-redux'
import { useInput } from '../../hook/hook'
import { D_PLUSETD } from '../../modules/todolists'
import { TDarticalForm } from './TDcss'

function TDwrite() {
  const [title, hanleChange1, setTitle] =  useInput('');
  const [txt, hanleChange2, setTxt] =  useInput('');
  const dispatch = useDispatch();

  return (
    <TDarticalForm onSubmit={
      (e)=>{e.preventDefault();
      dispatch(D_PLUSETD({title, txt}));
      setTitle('');
      setTxt('')
      }}>
      할일이름 : <input required type="text" value={title} onChange={hanleChange1}/>
      <br/>
      할일내용 : <input required type="text" value={txt} onChange={hanleChange2}/>
      <br/>
      <input type="submit"/>
      <input type="submit" onSubmit={()=>dispatch(D_PLUSETD({title, txt}))}/>
    </TDarticalForm>
  )
}

export default TDwrite