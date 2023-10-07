import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Services from '../../Components/Services/Services'
import Wellcome from '../../Components/WellCome/Wellcome'

const Home = () => {
  document.title="home-Elegance Weddings"
  return (
    <div>
      <Banner></Banner>
      <Wellcome></Wellcome>
      <Services></Services>
    </div>
  )
}

export default Home
