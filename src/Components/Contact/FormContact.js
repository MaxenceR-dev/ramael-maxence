import React, { useState } from "react";
import "./FormContact.css";

function FormContact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let mail = document.getElementById("not-mail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = "none";
      return true;
    } else {
      mail.style.display = "block";
      mail.style.animation = "dongle 1s";
      setTimeout(() => {
        mail.style.animation = "none";
      }, 1000);
      return false;
    }
  };

  const failMessage = () => {
    let formMess = document.querySelector(".form-message");
    formMess.innerHTML = "Merci de remplir correctement les champs requis *";
    formMess.style.oppacity = "1";
    formMess.style.background = "rgb(253,87,87)";
  };

  const oKMessage = () => {
    let okMess = document.querySelector(".form-message");
    okMess.innerHTML = "Message envoyé ! Merci";
    okMess.style.oppacity = "1";
    okMess.style.background = "lightgreen";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback("template_i0nrewf", {
        name,
        company,
        phone,
        email,
        message,
      });
      oKMessage();
    } else {
      failMessage();
    }
  };

  const sendFeedback = (templateId, variables) => {
    console.log(templateId);
    console.log(variables);

    window.emailjs
      .send("service_r3xv167", templateId, variables)
      .then((res) => {
        console.log("success !");
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          (document.querySelector(".form-message").innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      );
  };

  return (
    <div className="formDiv">
      <h2 className="form-title">Contactez-moi</h2>
      <form>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Votre nom *"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Votre email *"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoComplete="off"
            required
          />
        </div>

        <input
          type="text"
          name="company"
          id="company"
          placeholder="Votre entreprise"
          onChange={(e) => setCompany(e.target.value)}
          value={company}
        />
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Votre telephone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <label>Message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        >
          Bonjour Maxence,
        </textarea>
        <input type="submit" value="Envoyer" onClick={handleSubmit} />
        <div className="form-message"></div>
      </form>
    </div>
  );
}

export default FormContact;
