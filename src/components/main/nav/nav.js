import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['about', 'skills', 'projects', 'contact'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="about">
                    <button>About</button>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="skills">
                    <button>Skills</button>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="projects">
                    <button>Projects</button>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="contact">
                    <button>Contact Me</button>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
