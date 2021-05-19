import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/base.css";
import "../styles/main.css";

import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <div id="wrapper" className="margLTop margLBottom">
      <Head>
        <title>Elahe Dastan</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌰</text></svg>"
        />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-md-3 left-content">
            <header id="header">
              <div className="main-header">
                <figure className="img-profile">
                  <img src="/me-1.jpg" alt="Elahe Dastan" />
                  <figcaption className="name-profile">
                    <span>ELAHE DASTAN</span>
                  </figcaption>
                </figure>
                <nav id="main-nav" className="main-nav clearfix tabbed">
                  <ul>
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        <i className="fas fa-user"></i>About Me
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/education" className="nav-link">
                        <i className="fas fa-graduation-cap"></i>Education
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/experience" className="nav-link">
                        <i className="fas fa-briefcase"></i>Work
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/contact" className="nav-link">
                        <i className="fas fa-pen"></i>Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="bottom-header bgWhite ofsTSmall ofsBSmall tCenter">
                <ul className="social">
                  <li className="anim">
                    <a
                      href="https://github.com/elahe-dastan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li className="anim">
                    <a
                      href="https://instagram.com/elahe.dstn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
                <p>I Have a Dream</p>
              </div>
            </header>
          </div>
          <div className="col-md-9 right-content">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainApp;
