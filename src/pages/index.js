import React, { useEffect } from "react"
import ScrollOut from 'scroll-out'
import '../style/index.scss'
import '../component/service-card'
import ServiceCard from "../component/service-card"
import Timeline from "../component/timeline"
import AirBalls from '../function/air-balls'
import { init } from '../function/ball-mechanism'
import 'animate.css'
import StackItem from "../component/stack-item"

import html from '../../static/html5.svg'
import java from '../../static/java.svg'
import js from '../../static/js.svg'
import sass from '../../static/sass.svg'
import css from '../../static/css.svg'
import spring from '../../static/spring.svg'
import logo from '../../static/szk-logo.svg'
import TabLayout from "../component/tab-layout"

const HomePage = () => {

  useEffect(() => {
    ScrollOut({
      once: true,
      threshold: 0.1,
      onShown: (element) => {
        element.classList.add('animate__animated', 'animate__zoomIn');
      },
      onHidden: (element) => {
        element.classList.remove('animate__animated', 'animate__zoomIn')
      }
    });
  }, [])

  return <main>
    <section className='landing'>
      <div className='label'>
        <h1>Hello, I'm Koppány Szamosy</h1>
        <p>I'm a web developer. I love what I'm doing and I'd be happy to help you to reach your audiance or kick-off your online store</p>
        <button className='action-button' onClick={() => window.scrollTo({ top: window.innerHeight * 1.1, left: 0, behavior: 'smooth' })}>Learn more</button>
      </div>

      <div className='bottom'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#222222" d="M0,256L120,256C240,256,480,256,720,250.7C960,245,1200,235,1320,229.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
      </div>
    </section>

    <section className='services'>
      <div className='services-content'>
        <h1>
          Services
        </h1>

        <div className='cards-container'>
          <ServiceCard img="../../ecommerce.jpg" title='Protfolio' items={['SEO Optimized', 'Responsive design',]} />
          <ServiceCard img="../../ecommerce.jpg" title='Blog' items={['SEO Optimized', 'Responsive design',]} />
          <ServiceCard img="../../ecommerce.jpg" title='Ecommerce' items={['SEO Optimized', 'Responsive design',]} />
        </div>

      </div>
      <div className='bg3'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0993f0" d="M0,0L0,96L36.9,96L36.9,224L73.8,224L73.8,128L110.8,128L110.8,256L147.7,256L147.7,0L184.6,0L184.6,224L221.5,224L221.5,256L258.5,256L258.5,128L295.4,128L295.4,192L332.3,192L332.3,96L369.2,96L369.2,64L406.2,64L406.2,192L443.1,192L443.1,64L480,64L480,96L516.9,96L516.9,256L553.8,256L553.8,224L590.8,224L590.8,192L627.7,192L627.7,64L664.6,64L664.6,256L701.5,256L701.5,32L738.5,32L738.5,160L775.4,160L775.4,64L812.3,64L812.3,128L849.2,128L849.2,160L886.2,160L886.2,160L923.1,160L923.1,96L960,96L960,160L996.9,160L996.9,256L1033.8,256L1033.8,160L1070.8,160L1070.8,256L1107.7,256L1107.7,96L1144.6,96L1144.6,192L1181.5,192L1181.5,96L1218.5,96L1218.5,224L1255.4,224L1255.4,96L1292.3,96L1292.3,224L1329.2,224L1329.2,96L1366.2,96L1366.2,96L1403.1,96L1403.1,128L1440,128L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path>
</svg>
      </div>
    </section>


    <section className='experience'>
      <div className='bg' />
      <h1>Experience</h1>
      <TabLayout />
      <div className='stack' data-scroll>

      </div>
    </section>

    <section className='contact'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#191f3b" d="M0,288L0,64L38.9,64L38.9,288L77.8,288L77.8,192L116.8,192L116.8,192L155.7,192L155.7,160L194.6,160L194.6,192L233.5,192L233.5,224L272.4,224L272.4,192L311.4,192L311.4,192L350.3,192L350.3,224L389.2,224L389.2,64L428.1,64L428.1,32L467,32L467,288L505.9,288L505.9,224L544.9,224L544.9,32L583.8,32L583.8,128L622.7,128L622.7,64L661.6,64L661.6,96L700.5,96L700.5,256L739.5,256L739.5,320L778.4,320L778.4,32L817.3,32L817.3,256L856.2,256L856.2,256L895.1,256L895.1,192L934.1,192L934.1,96L973,96L973,160L1011.9,160L1011.9,96L1050.8,96L1050.8,224L1089.7,224L1089.7,192L1128.6,192L1128.6,32L1167.6,32L1167.6,160L1206.5,160L1206.5,192L1245.4,192L1245.4,160L1284.3,160L1284.3,192L1323.2,192L1323.2,192L1362.2,192L1362.2,224L1401.1,224L1401.1,64L1440,64L1440,0L1401.1,0L1401.1,0L1362.2,0L1362.2,0L1323.2,0L1323.2,0L1284.3,0L1284.3,0L1245.4,0L1245.4,0L1206.5,0L1206.5,0L1167.6,0L1167.6,0L1128.6,0L1128.6,0L1089.7,0L1089.7,0L1050.8,0L1050.8,0L1011.9,0L1011.9,0L973,0L973,0L934.1,0L934.1,0L895.1,0L895.1,0L856.2,0L856.2,0L817.3,0L817.3,0L778.4,0L778.4,0L739.5,0L739.5,0L700.5,0L700.5,0L661.6,0L661.6,0L622.7,0L622.7,0L583.8,0L583.8,0L544.9,0L544.9,0L505.9,0L505.9,0L467,0L467,0L428.1,0L428.1,0L389.2,0L389.2,0L350.3,0L350.3,0L311.4,0L311.4,0L272.4,0L272.4,0L233.5,0L233.5,0L194.6,0L194.6,0L155.7,0L155.7,0L116.8,0L116.8,0L77.8,0L77.8,0L38.9,0L38.9,0L0,0L0,0Z"></path>
        </svg>
        <div className='contact-content'>
        <h1>
          Contact me
        </h1>
        <div className='form'>
          <form action="https://getform.io/f/19b64069-6b0b-481d-94c1-4385af946499" method="POST">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message" />
            <button className='action-button' type="submit">Send</button>
          </form>
        </div>
        {/* <div className='info'>
          <h4>My email address: koppanyszamosy@gmail.com</h4>
        </div> */}

        </div>
    </section>

    <footer>
      Copyright 2020. Made by: Szamosy Koppány
    </footer>

  </main>
}

export default HomePage;