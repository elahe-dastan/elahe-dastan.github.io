import Title from "../components/title";
import React from "react";

function Experience() {
  return (
    <section id="work-exp" className="bgWhite ofsInBottom">
      <div className="experience">
        <Title title="Work Experience" />

        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <img src="/snapp.png" alt="snapp" />
            </div>
            <div className="col-md-6">
              <ul style={{ listStyleType: "disc" }}>
                <li>Backend Engineer</li>
                <li>Since 2020</li>
                <li>Seculatory and Users Teams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
