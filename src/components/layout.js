/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <div style={{
        minHeight: `100vh`
      }}>
        <main
          style={{
            width: `75em`,
            maxWidth: `calc(100% - 4em)`,
            margin: `0 auto`,
          }}
        >
          {children}
        </main>
        <footer>
          <div className="footer-note">
            Copyright © {new Date().getFullYear()} | Scavettapps | All Rights
            Reserved |
          </div>
          <div className="footer-note">
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              {" "}
              www.flaticon.com
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
