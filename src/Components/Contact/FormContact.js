import React from "react";
import "./FormContact.css";

export default function FormContact() {
  return (
    <div className="formDiv">
      <h2 className="form-title">Contactez-moi</h2>
      <form>
        <input type="text" name="name" placeholder="Votre nom*" />

        <input type="email" name="user_email" placeholder="Votre email*" />
        <input type="text" name="company" placeholder="Votre entreprise" />
        <input type="text" name="phone" placeholder="Votre telephone" />
        <label>Message</label>
        <textarea name="message" rows="4">
          Bonjour Maxence,
        </textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
