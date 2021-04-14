import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="header-nav">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT ME</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACTS</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export { Header }