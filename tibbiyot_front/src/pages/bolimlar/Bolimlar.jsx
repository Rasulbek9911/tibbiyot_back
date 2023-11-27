import React from "react";
// scss
import "./bolimlar.scss";
// images
import person from "../../assets/images/person.png";
// components
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import usePagenation from "../../components/pagenation/usePagenation";
import SidebarMarkazTuzilmasi from "../../components/sidebar/SidebarMarkazTuzilmasi";

function Bolimlar() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { pagenation, currentItems } = usePagenation(url, 3);
  return (
    <div className="bolimlar container">
      <div className="content">
        <div className="desc">
          <div className="row">
            <h1 className="title">BO'LIMLAR</h1>
            <p>
              Tibbiy ta’limda o’quv resurslarini yaratish va rivojlantirish
              markazi rahbariyati
            </p>
            {currentItems.map((rahbar) => {
              return (
                <div className="cardss">
                  <div className="imageBlok">
                    <div className="image">
                      <img src={person} />
                    </div>
                    <h2>
                      {rahbar.name}
                      {rahbar.username}
                    </h2>
                  </div>
                  <div className="descreption">
                    <h3>ЎЗБЕКИСТОН РЕСПУБЛИКАСИ СОҒЛИҚНИ САҚЛАШ ВАЗИРИ</h3>
                    <div className="info">
                      <p className="child">
                        <span>Ma’lumoti:</span>
                        <p> Oliy</p>
                      </p>
                      <p className="child">
                        <span>Tamomlagan (Bakalavr):</span>
                        <p> 2012 yil TATU Urganch filiali</p>
                      </p>
                      <p className="child">
                        <span>Ma’lumoti bo’yicha mutaxassisligi:</span>
                        <p> Axborot servis (Servis)</p>
                      </p>
                      <p className="child">
                        <span> Tamomlagan (Magistratura):</span>
                        <p> 2021 yil TDTU</p>
                      </p>
                      <p className="child">
                        <span> Ma’lumoti bo’yicha mutaxassisligi:</span>
                        <p>Komyuter tizimlari va ularning dasturiy ta’minoti</p>
                      </p>
                      <p className="child">
                        <span> Telefon:</span>
                        <p>
                          {" "}
                          (998) 01-234-56-78; (998) 01-234-56-78; (998)
                          01-234-56-78
                        </p>
                      </p>
                      <p className="child">
                        <span>Elektron pochta:</span>
                        <p> qwerty@mail.ru; qwerty@gmail.com</p>
                      </p>
                    </div>
                    <p className="qabul">
                      <span>Qabul kunlari:</span>
                      <p>
                        <span className="kun">Dushanba</span> kunlari soat{" "}
                        <span className="kirish">16:00</span> dan{" "}
                        <span className="chiqish">18:00</span> gacha
                      </p>
                    </p>
                    <button className="download">
                      <i className="fa fa-arrow-down" aria-hidden="true"></i>
                      <span>To’liq ma’lumot</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <hr style={{ marginBottom: "30px" }} />
          {pagenation}
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

export default Bolimlar;
