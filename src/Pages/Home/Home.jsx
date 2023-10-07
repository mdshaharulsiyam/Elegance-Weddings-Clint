import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Services from '../../Components/Services/Services'
import Wellcome from '../../Components/WellCome/Wellcome'
import Ourgallery from '../../Components/OurGallery/Ourgallery'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'
import ContactUs from '../../Components/ContactUs/ContactUs'

const Home = () => {
  document.title="home-Elegance Weddings"
  return (
    <div>
      <Banner></Banner>
      <Wellcome></Wellcome>
      <WhyChooseUs></WhyChooseUs>
      <Services></Services>
      <Ourgallery></Ourgallery>
    </div>
  )
}

export default Home
