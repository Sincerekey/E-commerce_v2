import React from 'react'
import '../Styles/Home.css'
import HomeGrid from '../componets/HomeGrid'
import imgLogos from '../images/Screenshot_2023-10-25_at_2.13.49_PM-removebg-preview.png'


function Home() {
  return (
    <div className='home'>
      <main>
      {/* <!-- Banner section --> */}
        <section id="banner">
            <section id="heroText">
                <img src={imgLogos} alt='Logo' />
                <h1>TAURUS</h1>
                <h4>Syfy as Reality</h4>
            </section>
         {/* <!-- Empty space for design --> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </section>
        <HomeGrid />
      </main>
    </div>
  )
}

export default Home