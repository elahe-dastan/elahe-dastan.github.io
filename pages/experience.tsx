import Title from "../components/title";
import Image from "next/image";
import React from "react";

function Experience() {
  return (
    <section id="work-exp" className="bgWhite ofsInBottom">
      <div className="experience">
        <Title title="Work Experience" />

        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <Image src="/snapp.png" height={1024} width={1024} alt="snapp" />
            </div>
            <div className="col-md-6">
              <ul style={{ listStyleType: "disc" }}>
                <li>Backend Engineer / Data Scientist</li>
                <li>Since 2020</li>
                <li>Users Chapter</li>
                <li>Map Chapter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
