import React from 'react'
import TDheader from './TDheader'
import TDartical from './TDartical'
import { CreateGlobal, Layout } from './TDcss'
import TDwrite from './TDwrite'

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