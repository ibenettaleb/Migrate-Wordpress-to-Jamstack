import React from "react"
import { Link } from "gatsby"

import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to="/" className="home">
          Migrate Wordpress to Jamstack
        </Link>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
