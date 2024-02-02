import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'

import { createGlobalStyle } from 'styled-components'
import Header from './components/header'
import Form from './pages/form'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    height: 100vh;
    font-family: Raleway, Arial, Helvetica, sans-serif;
    background-color: #F2F2F2;
  }
`

function App() {

  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route  path='/form' element={<Form/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
