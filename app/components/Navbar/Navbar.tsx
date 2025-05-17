import React from 'react'
import "./Navbar.css"
import Logo from "../../../public/assets/Logo.png"

const Navbar = () => {
  return (
    <div className='Navbar-container'>
      <nav className='Navbar'>
        <div className='Navbar-logo'>
          <a href="/">
            <img src={Logo} alt="Logo image" ></img>
          </a>
        </div>
        <ul className='Navbar-links'>
          <li><a href="/AlphabetPage">Alphabet Learning</a></li>
          <li> <a href="/PronounsPage">Pronouns Learning</a></li>
          <li><a href="/VocabPage">Vocabulary Learning</a></li>
          <li><a href="/SentenceFormPage">Sentence Formation</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar