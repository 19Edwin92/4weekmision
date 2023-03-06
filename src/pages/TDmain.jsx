import React from 'react'
import TDheader from '../components/TODO/TDheader'
import TDartical from '../components/TODO/TDartical'
import { CreateGlobal, Layout } from '../components/TODO/TDcss'
import TDwrite from '../components/TODO/TDwrite'

function TDmain() {
  return (
    <>
      <CreateGlobal />
      <Layout>
        <TDheader/>
        <TDwrite />
        <TDartical />  {/* TDarticalContents  -> 수정시 TDedite -> TDListItem*/}
      </Layout>
    </>
  )
}

export default TDmain