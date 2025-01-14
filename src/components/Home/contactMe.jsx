import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const ContactMe = () => {
  return (
      <div md={12} className="home-about-social">
          <h1>Para contactarme</h1>
          <p>
              No dude en ponerse en <span className="blue">contacto </span>conmigo
          </p>
          <ul className="home-about-social-links">
              <li className="social-icons">
                  <a
                      href="https://github.com/edinsondevs"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                      <AiFillGithub />
                  </a>
              </li>
              <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/ingedinsonmadrid/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                      <FaLinkedinIn />
                  </a>
              </li>
          </ul>
      </div>
  )
}

export default ContactMe