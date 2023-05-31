import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="single-section">
        <span>Want to hear more</span>
        <h3>Contact us.</h3>
        <h3>Lets Talk</h3>
      </div>
      <div className="single-section">
        <h4>More Info</h4>
        <p>About us</p>
        <p>Details</p>
        <p>Contact</p>
      </div>
      <div className="single-section">
        <h4>Where we are</h4>
        <p>Belgrade, Serbia</p>
      </div>
      <div className="single-section">
        <h4>Our contact info</h4>
        <p>011/555/555</p>
        <p>example@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
