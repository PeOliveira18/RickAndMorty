import styled from "styled-components"
import Home from "./pages/home"
import React from "react"

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
  height: 100%;
  background-color: #043F47;
`


function App() {


  return (
    <AppContainer>
      <Home/>
    </AppContainer>
  )
}

export default App
