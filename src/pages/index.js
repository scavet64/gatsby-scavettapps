import HeroComponent from "../components/hero/hero"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MainContentComponent from "../components/main/main"
import { Waypoint } from "react-waypoint"

import React, { Component } from "react"

import "./../components/styles.scss"
import Nav from "../components/main/nav/nav"

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Seo title="Home" />

        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        >
          <div>
            <HeroComponent />
          </div>
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />
        <MainContentComponent />
      </Layout>
    )
  }
}
