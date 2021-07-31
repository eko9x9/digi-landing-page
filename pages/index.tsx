import React, { ReactElement } from 'react'
import Heading from '../components/Heading'
import Home from '../components/Home'
import Navbar from '../layouts/Navbar'

export default function index(): ReactElement {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Navbar />
        <Home />
        <Heading />
      </div>
    </React.Fragment>
  )
}
