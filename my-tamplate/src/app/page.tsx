import React from 'react' 
import Hero from './components/Hero'
import Footer from './components/Footer'
import SubHero from './components/Subhero'
import Header from './components/Header'
import Shop from './shop/page'
import Blog from './blog/page'
import Contact from './contact/page'
import Cart from './components/Cart'
import Checkout from './components/Ceckout'
import SinglePage from './components/SinglePage'



function Home() {
  return (
      <div>
    <Header />
      <Hero />
      <SubHero />
      <Shop />
      <Cart />
      <Checkout/>
      <SinglePage/>
      <Blog />
      <Contact />
    <Footer />
    </div>
    
  )
}

export default Home;
           