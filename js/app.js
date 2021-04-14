import React from 'react'
import ReactDOM from 'react-dom'

// Components
import { Header } from './components/layout/Header'
import { Main } from './components/layout/Main'
import { Footer } from './components/layout/Footer'

const rootElement = document.querySelector('#root')

function Layout() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Layout />, rootElement)