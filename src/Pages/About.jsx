import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <img src="src/assets/about/gr3.png" alt="" />
      </div>


      <div className="about-right">

        <div className="about-des">
          <h1 className="text-5xl">About Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe hic,
            delectus qui numquam itaque dolore iusto quos accusamus. Saepe
            commodi eius voluptatem corporis incidunt sit ratione ipsum ipsam
            totam veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe hic,
            delectus qui numquam itaque dolore iusto quos accusamus. Saepe
            commodi eius voluptatem corporis incidunt sit ratione ipsum ipsam
            totam veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe hic,
            commodi eius voluptatem corporis incidunt sit ratione ipsum ipsam
            totam veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe hic,
          </p>
        </div>

        <div className="about-content">
          <div>
            <h1>Safe and Secure</h1>
            <p>
              commodi eius voluptatem corporis incidunt sit ratione ipsum ipsam
              totam veniam
            </p>
          </div>
          <div>
            <h1>Auto Pulling System</h1>
            <p>
              commodi eius voluptatem corporis incidunt sit ratione ipsum ipsam
              totam veniam
            </p>
          </div>
          <div>
            <h1>Referral Earnings</h1>
            <p>
              commodi eius voluptatem corporis incidunt sit ratione ipsum ipsam
              totam veniam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
