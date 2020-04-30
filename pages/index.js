import React from 'react'
import Navbar from 'components/Layouts/Navbar'
import Footer from 'components/Layouts/Footer'
import Banner from 'components/Home/Banner'
import Features from 'components/Home/Features'
import Overview from 'components/Home/Overview'
import JoinCard from 'components/Home/JoinCard'
import CtaCard from 'components/Home/CtaCard'
import SaasTools from 'components/Home/SaasTools'
import Funfact from 'components/Home/Funfact'
import WorkProcess from 'components/Home/WorkProcess'
import PricingPlan from 'components/Home/PricingPlan'
import GetStarted from 'components/Home/GetStarted'
import Feedback from 'components/Home/Feedback'
import Partner from 'components/Home/Partner'

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Features />
        <Overview />
        <JoinCard />
        <CtaCard />
        <SaasTools />
        <Funfact />
        <WorkProcess />
        <PricingPlan />
        <GetStarted />
        <Feedback />
        <Partner />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Index
