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
  border: 1px solid red;
}
`

// TD_header.jsx 관련 CSS 내용
export const HeaderLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

          //App.jsx > Layout border 없애면 필요 없어지는 태그
          div {
            height: 50px;
            border: none;
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