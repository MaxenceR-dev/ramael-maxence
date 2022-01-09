import React from "react";
import "./FormContact.css";
import emailjs from '@emailjs/browser';


export default function FormContact() {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_r3xv167','template_i0nrewf', e.target, 'user_o7PUBsMNyYvbeJ7P01s0m')
    .then(res=>{
      console.log(res);
    }).catch(err=>console.log(err));
  }
  return (
    <div className="formDiv">
      <h2 className="form-title">Contactez-moi</h2>
      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Votre nom *" />

        <input type="email" name="user_email" placeholder="Votre email *" />
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
