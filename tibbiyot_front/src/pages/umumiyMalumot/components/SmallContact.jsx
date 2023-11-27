import React from "react";
import "./smallContact.scss"

function SmallContact() {
  return (
    <div className="contact">
      <h2 className="title">
        Tibbiy ta’limda o‘quv resursla- rini yaratish va rivojlantirish markazi
      </h2>

      <p className="tel">
        Telefon raqami <br /> (71) 268-13-11
      </p>

      <hr />

      <p className="mail">
        Email <br /> contact@logistics.com
      </p>
    </div>
  );
}

export default SmallContact;
