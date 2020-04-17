import PropTypes from "prop-types"
import React from "react"
import './footer.css'

import dv_logo from '../images/hermes/dv_logo.png'
import mta_logo from '../images/hermes/mta_logo.png'


const Footer = ({ siteTitle }) => (
  <div className="Footer">
    <div className="FooterGroup">
      <div className="FooterInfo">
        <span><p className="nyc">New York City</p></span> 
        <p className="copyright">© MTA & BCG Digital Ventures, 2020. All rights reserved</p>
      </div>
      <div className="Icons">
        <div className="logos-footer">
            <span className="footer-power">Powered by</span>
            <img className="logo" src={dv_logo}/>
            <img className="logo" src={mta_logo}/>
        </div>
      </div>
      <p className="copyright-mobile">© MTA + BCG Digital Ventures, 2020. All rights reserved</p>
    </div>
  </div>
)

export default Footer
