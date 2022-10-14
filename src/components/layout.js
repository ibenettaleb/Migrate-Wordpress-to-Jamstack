import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      wp {
        generalSettings {
          title
          url
        }
      }
      wpMenu(id: { eq: "dGVybToxNw==" }) {
        menuItems {
          nodes {
            id
            url
            label
          }
        }
      }
    }
  `)

  const { title, url } = data.wp.generalSettings
  const menuItems = data.wpMenu.menuItems.nodes.map(item => ({
    ...item,
    url: item.url.replace(url, ""),
  }))

  return (
    <>
      <header>
        <Link to="/" className="home">
          {title}
        </Link>

        {menuItems.map(item => (
          <Link to={item.url} key={item.id}>
            {item.label}
          </Link>
        ))}
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
