import styled, { createGlobalStyle } from 'styled-components'

export const CreateGlobal = createGlobalStyle`
body {
  background: #e9ecef;
}
`

// App.jsx 관련 CSS 내용
export const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin:  0 auto;

  div {
  margin-top: 10px;
}
`

// TD_header.jsx 관련 CSS 내용
export const HeaderLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div {
    height: 50px;
    margin-top: 0;
    padding: 0 10px;
    line-height: 50px;
    font-size: 20px;
    font-weight: 700;
  }

  div:nth-child(3) {
    text-align: right;
  }
`

// TD_articsl.jsx 관련 CSS 내용
export const TDarticalForm = styled.form`
 width: 100%;
 padding: 10px 0;
 background-color: yellow;
 margin-top: 10px;
`

// TD_articalContents.jsx 관련 CSS 내용
export const TDarticalContentsDiv = styled.div`
  min-height: 50px;

  .title {
    font-size: 20px;
    font-weight:900;
  }
`

export const TDarticalDiv = styled.div`
  border: 1px solid red;
`
