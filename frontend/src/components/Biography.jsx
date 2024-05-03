import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            AzzCare Medical Institute stands as a beacon of excellence in the
            realm of healthcare, embodying a commitment to delivering
            unparalleled services with unwavering compassion and expertise.
            Within our state-of-the-art facility, we merge cutting-edge
            technology with a deep-rooted dedication to holistic care, ensuring
            that every individual receives the highest standard of medical
            attention.
          </p>
          <p>
            At AzzCare, we understand that your well-being is paramount. Thus,
            we embark on a journey with each patient, focusing not only on
            treating ailments but also on fostering a sense of harmony and
            empowerment in their pursuit of optimal health and wellness.
          </p>
          <p>
            At AzzCare Medical Institute, your journey towards well-being is not
            just a destination but a harmonious and transformative experience.
            We invite you to join us on this journey as we strive to redefine
            healthcare and create a healthier, happier world for all.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
