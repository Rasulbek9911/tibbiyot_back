import React from "react";
import "./oqxalat.scss";
import { Link } from "react-router-dom";

function OqXalat() {
  return (
    <div className="oqXalat">
      <h2>Nima uchun shifokorlar aynan oq xalat kiyadilar?</h2>
      <p>
        Atrofdagi hamma biladiki, ko‘plab kasblar-ning o‘ziga xos maxsus ust
        kiyimi bor: tibbiyot xodimlarida, dengizchilarda, temir yo‘l
        ishchilarida, harbiylarda.
      </p>
      <Link>Batafsil</Link>
    </div>
  );
}

export default OqXalat;
