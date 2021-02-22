import React from "react"
import { Link } from "gatsby"
import HeroComponent from "../components/hero/hero"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MainContentComponent from "../components/main/main"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroComponent />

      <MainContentComponent/>

    </Layout>
  )
}

export default IndexPage
