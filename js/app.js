import React from 'react'
import ReactDOM from 'react-dom'

// Components
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

const rootElement = document.querySelector('#root')

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, rootElement)