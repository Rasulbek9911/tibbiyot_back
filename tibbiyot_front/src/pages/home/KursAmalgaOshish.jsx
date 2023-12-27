import React from "react";

// images
import phoneIcon from "../../assets/icons/peopleIcon.svg";
import { Link } from "react-router-dom";

function KursAmalgaOshish() {
  return (
    <div className="kursAmalgaOshish">
      <div className="kurs container">
        <div className="desc">
          <h1 className="title">
            Kasbga yo’naltirilgan kurslar qanday amalga oshiriladi.
          </h1>
          {/* accardion */}

          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Siz nimani o’rganasiz?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Mazkur sayt orqali tibbiy taʼlimga oid zamonaviy bilimlarga
                  ega boʼlish hamda shu bilan birga kasbiy faoliyatda zarur
                  boʼlgan maʼlumotlar bilan tanishish imkoniyatlari mavjud.
                  Bundan tashqari inson salomatligini mustahkamlash, uzoq umr
                  koʼrish sirlarini oʼrganish va aholi orasida targʼibot
                  ishlarini amalga oshirish uchun eng yangi maʼlumotlar bilan
                  tanishasiz.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Pullik kurslarning maqsadi?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Mazkur sayt orqali tibbiy taʼlimning dolzarb muammolari
                  boʼyicha qisqa muddatli (36-72 soatlik) kurslar ham tashkil
                  etiladi. Unda nafaqat tibbiyot taʼlim muassasalarining
                  professor oʼqituvchilari balki amaliyotda ishlab kelayotgan
                  xodimlar uchun ham maʼlumotlar berib boriladi.
                  Tinglovchilarimiz yangi maʼlumotlarni oʼqish, tajribali
                  mutaxassislardan eshitish, audio va video tasvirlar orqali
                  amaliy jarayonlarni koʼrishlarilar mumkin.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Ulardan foydalanish bo'yicha maslahatlar?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Mazkur kurslardan foydalnish uchun ushbu saytning “Fanlar
                  boʼyicha oʼquv resurslari” boʼlimiga kirib ruyxatdan
                  oʼtishingiz lozim boʼladi. Shundagina Siz uchun barcha
                  maʼlumotlar ochiq boʼladi.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Elektron tibbiy axborat resurslari
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                Mazkur saytga joylashtirilgan platformada nafaqat Respublikamiz balki xorijiy davlatlarning elektron resurslari ham mavjud. Ulardan faoliyatingizga oid maʼlumotlar bilan atroflicha tanishish imkoniyati mavjud. Mazkur elektron resurslardan foydalanish ayniqsa tibbiyot taʼlim muassasalari oʼquvchilari va talabalari uchun tahsil olayotgan yoʼnalishlari boʼyicha qoʼshimcha manba boʼlib xizmat qiladi.
                </div>
              </div>
            </div>
          </div>

          {/* ================== */}
        </div>
        <div className="contactCard">
          <p className="linkEmail">
            <span>Email:</span> contact@logistics.com
          </p>
          <h1>Kurslarga yoziling yoki bepul maslaxat oling.</h1>
          <div className="tel">
            <img src={phoneIcon} alt="" />
            <p>
              Telefon raqami <br /> (71) 268-13-11
            </p>
          </div>
          <div className="btn">
            <Link>Batafsil</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KursAmalgaOshish;
