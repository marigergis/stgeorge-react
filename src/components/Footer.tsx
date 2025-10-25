import React from 'react';
import './Footer.tsx.css'; // Create a CSS file for styling if needed

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div>
          <strong>Priests:</strong><br />
          &nbsp;&nbsp;&nbsp;Hegumen Fr. Bisenty Abdel-Messih Gerges,&nbsp;
          <a href="mailto:peniot@hotmail.com">peniot@hotmail.com</a>
          <br />
          &nbsp;&nbsp;&nbsp;Fr. Armia Aziz Gerges,&nbsp;
          <a href="mailto:fr.armia@stgeorge.ca">fr.armia@stgeorge.ca</a>
          <br />
        </div>

        <hr />
        <div>
          Our new land in Port Kells is located at&nbsp;
          <a href="https://www.google.com/maps/place/18555+88+Ave,+Surrey,+BC+V4N+5T1,+Canada/@49.16301,-122.7108849,17z/data=!3m1!4b1!4m6!3m5!1s0x5485d117822c218f:0x920ec2d5e8bac29e!8m2!3d49.16301!4d-122.70831!16s%2Fg%2F11c5jnlghz?entry=ttu&amp;g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">18555 88 Avenue, Surrey, BC, V4N 5T1</a>
        </div>

        <hr />
        <div>
          Donate by e-transfer to&nbsp;
          <a href="mailto:donation@stgeorge.ca">donation@stgeorge.ca</a>.
        </div>

        <div>
          You received this message because you subscribed to the church email distribution list.
          To unsubscribe from this group and stop receiving emails, simply reply to this message and request removal.
        </div>

      </div>
    </footer>
  );
};

export default Footer;