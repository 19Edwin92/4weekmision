import React from 'react'
import { Layout, CreateGlobal } from './components/TDcss'; 
import TDheader from './components/TDheader';
import TDartical from './components/TDartical';
import TDwrite from './components/TDwrite';

function App() {

  return (
    <>
    <CreateGlobal />
    <Layout>
      <TDheader />
      <TDwrite/>
      <TDartical/>
    </Layout>
    </>
  )
}

export default App