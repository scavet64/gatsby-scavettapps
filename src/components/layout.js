/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import "./styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          minHeight: `100vh`,
        }}
      >
        <main id="mainpage">{children}</main>
        <footer>
          <div className="footer-note">
            Copyright © {new Date().getFullYear()} | Scavettapps | All Rights
            Reserved
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
