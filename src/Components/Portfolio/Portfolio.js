import React, { useState } from "react";
import Modal from "../../Shared/Modal";
import "./Portfolio.css";
export default function Portfolio() {
  const [projet, setProjet] = useState({
    projetUn: {
      name: "MernPjt",
      description:
        "Création d'une application de réseau social afin d'approfondire mes compétences en Js et surtout dans le stack MERN ",
      lien: "https://github.com/MaxenceR-dev/MernPjct",
    },
    projetDeux: {
      name: "Canage-movie",
      description:
        "Application style Allociné réalisée dans le cadre de mon stage de fin de formation. Développée en MERN (MongoDb, Express, React.js, Node.js).",
      lien: "https://github.com/MaxenceR-dev/Canage-movie",
    },
    projetTrois: {
      name: "Protfolio",
      description: "Cette application réalisée sur React.",
      lien: "https://github.com/MaxenceR-dev/ramael-maxence",
    },
  });

  return (
    <div className="portfolio">
      <div className="project-container">
        <Modal props={projet.projetUn} />
        <Modal props={projet.projetDeux} />
        <Modal props={projet.projetTrois} />
      </div>
    </div>
  );
}
