import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import screenshot from '../images/hermes/iphone1.png'
import get_started from '../images/hermes/get_started.png'
import hermes_logo from '../images/hermes/hermes_logo.png'

const HermesDesc = () => (
    <div className="Section">
      <div className="SectionGroup">
        <img className="screenshot" src={screenshot} />     
        <div className="section-info">
            <img className="hermes" src={hermes_logo} />     
            <h3>AI-Powered + Anonymous</h3>
            <h1>Meet Hermes 👋</h1>
            <p>Hermes is here to help you navigate through the COVID Crisis. Your conversations with Hermes is anonymous and free. From free mental health resources, feedback to the MTA, to daily encouragments, Hermes has got your back. Hermes is named after the Greek God of messages and boundaries. </p>
            <button className="get_started" />        
        </div>
      </div>                     
    </div>
)

export default HermesDesc
