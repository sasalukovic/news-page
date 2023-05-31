import "./Modal.scss";

// eslint-disable-next-line react/prop-types
const Modal = ({ toggleModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close-modal" onClick={toggleModal}>
          <span>Close</span>
        </div>
        <iframe
          className="iframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RVFAyFWO4go"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
