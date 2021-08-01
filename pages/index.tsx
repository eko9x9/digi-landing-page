import React, { ReactElement } from 'react'
import Heading from '../components/Heading'
import Home from '../components/Home'
import OurTeam from '../components/OurTeam'
import ServiceData from '../components/ServiceData'
import Navbar from '../layouts/Navbar'

export default function index(): ReactElement {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Navbar />
        <Home />
        <Heading />
        <ServiceData />
        <OurTeam />
      </div>
    </React.Fragment>
  )
}
