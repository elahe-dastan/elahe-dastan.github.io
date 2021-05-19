import Divier from "../components/divider";
import Title from "../components/title";
import React from "react";

function Contact() {
  return (
    <section id="contact" className="bgWhite ofsInBottom">
      <div className="contact">
        <Title title="Contact Me" />
        <div className="content">
          <div className="block-content margBSmall">
            <div className="row">
              <div className="col-md-8">
                <b style={{ fontWeight: "bold" }}>
                  <i className="fab fa-google"></i> Email
                </b>
                :&nbsp; elahe.dstn <b style={{ fontWeight: "bold" }}>at</b>{" "}
                gmail <b style={{ fontWeight: "bold" }}>dot</b> com
                <br />
                <b style={{ fontWeight: "bold" }}>
                  <i className="fas fa-university"></i> Email
                </b>
                :&nbsp; dastan.elahe <b style={{ fontWeight: "bold" }}>at</b>{" "}
                aut <b style={{ fontWeight: "bold" }}>dot</b> ac{" "}
                <b style={{ fontWeight: "bold" }}>dot</b> ir
                <br />
                <b style={{ fontWeight: "bold" }}>
                  <i className="fab fa-skype"></i> Skype
                </b>
                :&nbsp; elahe.dstn
                <br />
                <b style={{ fontWeight: "bold" }}>
                  <i className="fas fa-phone"></i> Phone
                </b>
                :&nbsp;{" "}
                <a href="tel://+989205705417" style={{ color: "#777" }}>
                  (+98) 920 570 54 17
                </a>
                <Divier />
              </div>
              <div className="col-md-4">
                <a
                  href="https://github.com/elahe-dastan.key"
                  target="_blank"
                  role="button"
                  rel="noreferrer"
                  className="btn btn-outline-dark"
                >
                  Public Keys
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
