import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import Ray_Gun from '../images/RayGun-removebg-preview.png'
import Portal_Gun from '../images/PortalG-removebg-preview.png'
import Duplication_Gun from '../images/DupGun-removebg-preview.png'
import Light_Saber from '../images/s-l1200-removebg-preview.png'
import AI_Card from '../images/chip-removebg-preview.png'
import What_if from '../images/IWhat_If_Machine__A_Rapberry_Pi-powered_tv_from_Futurama__by_remoheadder_-_Thingiverse-removebg-preview.png'
import Hover_Board from '../images/8c008c20df6d06664ea6ae1b2f47d2f2-removebg-preview.png'
import Neutralizer from '../images/mrsy100lg-removebg-preview.png'



function HomeGrid() {
  return (
    <div id="homeGrid">
       {/* <!-- Link to the products page --> */}
            {/* <a href="#">  */}
                {/* <!-- Grid 1 with 4 products --> */}
                <section id="grid1">
                    {/* <!-- Grid 1 title --> */}
                    <Link to='/Sales'><h6 id="grid1Title">Shop Sale Items</h6></Link>
                    <h6><span className="discount">10% off</span> <img src={Ray_Gun} alt="product 1/Grid 1"/>Ray Gun</h6>
                    <h6><span className="discount">15% off</span><img src={Portal_Gun} alt="product 2/Grid 1"/>Portal Gun</h6>
                    <h6><br /><br /><span class="discount">5% off</span><br /><img src={Duplication_Gun} alt="product 3/Grid 1"/>Duplication Gun</h6>
                    <h6><span class="discount">10% off</span><img src={Light_Saber} alt="product 4/Grid 1"/>Light Saber</h6>
                    
                </section> 
            {/* </a> */}

            {/* <!-- Link to the products page --> */}
            
                {/* <!-- Grid 2 with 5 products --> */}
                <section id="grid2" >
                    <h6><img src={AI_Card} alt="product 1/Grid 2" />Pre-Downloaed AI SD Card</h6>
                    <h6><img src={What_if} alt="product 2/Grid 2" />What if Machine</h6>
                    <h6 id="streched"><img src={Hover_Board} alt="product 3/Grid 2" />Hover Board</h6>
                    <h6><img src={Neutralizer} alt="product 4/Grid 2" />Neutralizer (M.I.B)</h6>
                    <h6><img src={Duplication_Gun} alt="product 2/Grid 2" />Duplication Gun</h6>
                    {/* <!-- Grid 2 title --> */}
                   <Link to='/products'><h6 id="grid2Title">Found only at TAURUS</h6></Link> 
                </section>
            

            {/* <!-- Email signup section --> */}
            <section id="emailS">
                <label for="email">Sign-up With Email for 20% off </label>
                <input id="email" type="email" placeholder="Example@example.com" />
            </section>
    </div>
  )
}

export default HomeGrid
