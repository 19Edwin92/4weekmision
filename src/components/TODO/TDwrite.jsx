import { useDispatch } from 'react-redux'
import { useInput } from '../../hook/hook'
import { D_PLUSETD } from '../../modules/todolists'
import { TDarticalForm } from './TDcss'

function TDwrite() {
  const [title, titleHandle, setTitle] =  useInput('');
  const [txt, txtHandle, setTxt] =  useInput('');
  const dispatch = useDispatch();

  return (
    <TDarticalForm onSubmit={
      (e)=>{e.preventDefault();
      dispatch(D_PLUSETD({title, txt}));
      setTitle('');
      setTxt('')
      }}>
      할일이름 : <input required type="text" value={title} onChange={titleHandle}/>
      <br/>
      할일내용 : <input required type="text" value={txt} onChange={txtHandle}/>
      <br/>
      <input type="submit"/>
    </TDarticalForm>
  )
}

export default TDwrite