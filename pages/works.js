import React, { Component } from 'react'
import Navbar from 'components/Layouts/Navbar'
import Footer from 'components/Layouts/Footer'
import Banner from 'components/Works/Banner'
import WorksContent from 'components/Works/WorksContent'

class Works extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <WorksContent />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Works
