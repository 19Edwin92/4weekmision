import React from 'react'
import TDheader from './TODO/TDheader'
import TDartical from './TODO/TDartical'
import { CreateGlobal, Layout } from './TODO/TDcss'
import TDwrite from './TODO/TDwrite'

function TDmain() {
  return (
    <>
      <CreateGlobal />
      <Layout>
        <TDheader/>
        <TDwrite />
        <TDartical />
      </Layout>
    </>
  )
}

export default TDmain