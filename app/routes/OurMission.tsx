import React from 'react'
import Navbar from '~/components/Navbar/Navbar'
import Footer from '~/components/Footer/Footer'
import Logo from "../../public/assets/Logo.png"
import Logo2 from "../../public/assets/Logo2.png"

const OurMission = () => {
  return (
    <div>
      <Navbar />
      <div className="OurMission-container">
        <h1>Our Mission</h1>
      </div>
        <div className="Sixth-main">
          <div className="AppName">
            <img src={Logo2} alt="Logo" />
          </div>
          <div className="Navs-head">
            <h1>Learn</h1>
            <h1>About</h1>
            <h1>Support</h1>
          </div>
          <div className="Navs">
            <ul>
              <li>
                <a href="/AlphabetPage">Alphabet</a>
              </li>
                <li>
              <a href="/PronounsPage">Pronouns</a>
            </li>
              <li>
                <a href="/VocabPage">Vocabulary</a>
              </li>
              <li>
                <a href="/SentenceFormPage">Sentences</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/OurMission">Our Mission</a>
              </li>
              <li>
                <a href="/Team">The Team</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/ContactUs">Contact Us</a>
              </li>
              <li>
                <a href="/FAQ">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default OurMission