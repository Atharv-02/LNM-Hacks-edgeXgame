import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <div className="content_aboutus">
          <div className="main-vision">
            <h2 className="aboutus_h2">Our Vision</h2>
            <p>
              Cloud gaming is a new and exciting way to play your favorite
              games. But the only way to get started is to buy a console or
              computer, which can be expensive. Our solution is to let gamers
              buy cloud gaming as a service, in the form of NFTs game passes.
              This way, gamers can enjoy the benefits of cloud gaming without
              having to buy hardware first. Gamers can further gain royaltys on
              their NFTs game passes as they excel in gaming.
            </p>
          </div>
          <div className="team">
            <div className="team-member">
              <div className="member-img">
                <img src="./images/IMG_3102.jpg" alt="" />
              </div>
              <div className="member-info">
                <h4>Atharv Gulati</h4>
              </div>
            </div>
            <div className="team-member">
              <div className="member-img">
                <img
                  src="./images/WhatsApp Image 2022-11-07 at 11.02.02 PM.jpeg"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Charchit Kumawat</h4>
              </div>
            </div>
            <div className="team-member">
              <div className="member-img">
                <img src="./images/ankit_profile_pic (1).jpg" alt="" />
              </div>
              <div className="member-info">
                <h4>Ankit Gupta</h4>
              </div>
            </div>
            <div className="team-member">
              <div className="member-img">
                <img src="./images/-2wfg3n.jpg" alt="" />
              </div>
              <div className="member-info">
                <h4>Tejaswini Ojha</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
