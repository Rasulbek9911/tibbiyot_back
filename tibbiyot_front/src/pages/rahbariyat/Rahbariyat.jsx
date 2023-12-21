import React, { useEffect } from "react";
// scss
import "./rahbariyat.scss";
// components
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
// images
// import person from "../../assets/images/person.png";
import { useGetFetch } from "../../hooks/useGetFetch";
import SidebarMarkazTuzilmasi from "../../components/sidebar/SidebarMarkazTuzilmasi";
import { baseUrl } from "../../services/http";

function Rahbariyat() {
  const url = `${baseUrl}/rahbariyat`;
  const { data, isPending, error } = useGetFetch(url);

  if (!data) {
    return <p></p>;
  }
  return (
    <div className="rahbariyat container">
      <div className="content">
        <div className="desc">
          <div className="row">
            <h1 className="title">RAHBARIYAT VA HODIMLAR</h1>
            <p>
              Tibbiy ta’limda o’quv resurslarini yaratish va rivojlantirish
              markazi rahbariyati
            </p>
            {data.map((person) => {
              return (
                <div key={person.id} className="cardss">
                  <div className="imageBlok">
                    <div className="image">
                      <img src={person.rasm} />
                    </div>
                    <h2>
                      {person.familya} {person.ism} {person.sharf}
                    </h2>
                  </div>

                  <div className="descreption">
                    <div className="info">
                      <p className="child">
                        {/* <span>Ma’lumoti:</span> */}
                        <p
                          dangerouslySetInnerHTML={{ __html: person.umumiy }}
                        ></p>
                      </p>
                      {/* <p className="child">
                        <strong>Tamomlagan (Bakalavr):</strong>
                        <p> 2012 yil TATU Urganch filiali</p>
                      </p> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
        <div className="layout">
          <SidebarMarkazTuzilmasi />
          <OqXalat />
          <SmallContact />
        </div>
      </div>
    </div>
  );
}

export default Rahbariyat;
