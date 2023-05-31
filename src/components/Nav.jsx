import { useState } from "react";
import "./Nav.scss";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <nav className="nav">
      {openModal && <Modal toggleModal={toggleModal} />}
      <header className="header">
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="logo-container">
          <img src="../assets/logo.svg " alt="asioso" className="logo" />
        </div>
        <ul className="links">
          <Link className="nav-link" to={"/"}>
            Home
          </Link>
          <Link className="nav-link" to={"/about"}>
            About
          </Link>
          <Link className="nav-link" to={"/blog"}>
            Blog
          </Link>
          <Link className="nav-link" to={"/contact"}>
            Contact
          </Link>
        </ul>
      </header>

      <section className="subheader">
        <div className="subheader-text">
          <h4>Who we are?</h4>
          <h1>We make digital business simple</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, ipsam facere voluptatibus, quibusdam dignissimos ipsum
            sequi, libero ex perferendis ut laboriosam impedit? Eum ipsa, quos
            sed pariatur consequuntur fugit earum!
          </p>
        </div>
        <div className="subheader-buttons">
          <button className="explore-btn">Explore Now</button>
          <button className="watch-btn" onClick={toggleModal}>
            Watch Video
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
