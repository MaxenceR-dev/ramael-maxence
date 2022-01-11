import React, { useState } from "react";
import "./Modal.css";

export default function Modal({ props }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="card-container" onClick={toggleModal}>
        <h2>{props.name}</h2>
      </div>

      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>{props.name}</h2>
              <p>{props.description}</p>

              <button>
                <a href={props.lien} target="_blank">
                  Lien GITHUB
                </a>
              </button>

              <button className="close-modal" onClick={toggleModal}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
