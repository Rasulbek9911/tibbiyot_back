import React from "react";
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
                    <h3>ЎЗБЕКИСТОН РЕСПУБЛИКАСИ СОҒЛИҚНИ САҚЛАШ ВАЗИРИ</h3>
                    <div className="info">
                      <p className="child">
                        {/* <span>Ma’lumoti:</span> */}
                        <p
                          dangerouslySetInnerHTML={{ __html: person.umumiy }}
                        ></p>
                      </p>
                      <p className="child">
                        <strong>Tamomlagan (Bakalavr):</strong>
                        <p> 2012 yil TATU Urganch filiali</p>
                      </p>
                      <p className="child">
                        <strong>Ma’lumoti bo’yicha mutaxassisligi:</strong>
                        <p> Axborot servis (Servis) </p>
                      </p>
                      <p className="child">
                        <strong> Tamomlagan (Magistratura):</strong>
                        <p> 2021 yil TDTU</p>
                      </p>
                      <p className="child">
                        <strong> Ma’lumoti bo’yicha mutaxassisligi:</strong>
                        <p>
                          Komyuter tizimlari va ularning dasturiy ta’minoti{" "}
                        </p>
                      </p>

                      <p className="child">
                        <strong> Telefon:</strong>
                        <p>
                          {" "}
                          (998) 01-234-56-78; (998) 01-234-56-78; (998)
                          01-234-56-78
                        </p>
                      </p>
                      <p className="child">
                        <strong>Elektron pochta:</strong>
                        <p> qwerty@mail.ru; qwerty@gmail.com</p>
                      </p>
                    </div>
                    <p className="qabul">
                      <strong>Qabul kunlari:</strong>
                      <p>
                        <strong className="kun">Dushanba</strong> kunlari soat{" "}
                        <strong className="kirish">16:00</strong> dan{" "}
                        <strong className="chiqish">18:00</strong> gacha
                      </p>
                    </p>
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
