import React from "react"
import "./app.css"
import bg from "./bg.svg"
import logo from "./logo.svg"
import star from "./star.svg"

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <ul>
          <li>
            <a href='#hero'>Home</a>
          </li>
          <li>
            <a href='#ingredients'>Product</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href=''>Customer Care</a>
          </li>
          <li>
            <a href=''>More</a>
          </li>
        </ul>
      </div>
      <div className='hero' id='hero'>
        <div className='scroll'>
          <div></div>
          <h3>01</h3>
          <h3>02</h3>
          <h3>03</h3>
          <h3>04</h3>
          <h3>05</h3>
          <div></div>
        </div>
        <div className='hero-left'>
          <h2>Disrupting the energy drink market</h2>
          <p>
            Those who think about work, school and sport, nonstop, all day long
            because you want to be one of the greats, we are the brand for you.
            ​ Those who are here to rebrand the African narrative, we are the
            brand for you. ​ Those who want to conquer the world, we are the
            brand for you. ​ ROTTWYLER represents the hustle!
          </p>
          <button>ABOUT US</button>
        </div>
        <div className='hero-right'>
          <img src='/Images/leaf.png' alt='' className='leafone' />
          <img src='/Images/leaf.png' alt='' className='leaftwo' />
          <img src='/Images/leaf.png' alt='' className='leafthree' />
          <img src='/Images/Web-hero-shots_-Png.png' alt='' />
        </div>
      </div>
      <div className='about-section' id='about'>
        <div className='about-left'>
          <img src='/Images/leaf.png' alt='' className='leafone' />
          <img src='/Images/leaf.png' alt='' className='leaftwo' />
          <img src='/Images/leaf.png' alt='' className='leafthree' />
          <img src='/Images/Dual-package-FloatingWS.png' alt='' />
        </div>
        <div className='about-right'>
          <h1>Pure Energy</h1>
          <p>
            As people are becoming more and more conscious about the need of
            fresh & clean products, also the beverage market is evolving moving
            from products with different preservatives towarDs more natural and
            healthy products.
          </p>
          <div className='right-down'>
            <p>
              ROTTWYLER is the first Natural Energy Drink made in africa, for
              africans. we provide a unique healthy lifestyle drink for the
              young and urban generation.
            </p>
          </div>
        </div>
      </div>
      <div className='ingredients-section' id='ingredients'>
        <img src='/Images/ingredients.webp' alt='' />
      </div>
      <div className='testimonials-section'>
        <div className='testimonials-left'>
          <img src={bg} alt='' className='bg-dots' />
        </div>
        <div className='testimonials-right'>
          <div className='testimonials-right-content'>
            <h3>What our clients say</h3>
            <p>
              A beverage that was free of synthetic, artificial ingredients and
              preservatives. A beverage that was made in Africa, for Africans.
            </p>
            <h3>Jane Doe</h3>
            <h4>Tester</h4>
            <div className='stars'>
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='footer-section'>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About us</a>
          </li>
          <li>
            <a href=''>Product</a>
          </li>
          <li>
            <a href=''>Customer care</a>
          </li>
        </ul>
        <h2>&copy; Rottwyler 2021</h2>
      </div>
    </div>
  )
}

export default App
