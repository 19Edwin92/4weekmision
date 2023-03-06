import React from 'react'
import { useSelector } from 'react-redux'
import TD_header from './components/TD_header';
import { Layout, CreateGlobal } from './components/TD_Css'; 

function App() {
  const todolist = useSelector((state)=> {
    return state.todolist
  });
  console.log(todolist)

  return (
    <>
    <CreateGlobal />
    <Layout>
      <TD_header></TD_header>
      <div>todo입력</div>
      <div>todolists 공간</div>
    </Layout>
    </>
  )
}

export default App