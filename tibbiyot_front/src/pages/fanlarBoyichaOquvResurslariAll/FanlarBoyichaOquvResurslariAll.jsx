import React, { useState } from "react";
import photo from "../../assets/images/Photo.png";
import "./fanlarBoyichaOquvResurslariAll.scss";
// image
import Accardion from "./Accardion";

function FanlarBoyichaOquvResurslariAll() {
  const [questions, setQuestions] = useState([
    { id: 1, title: "Umumkasbiy fanlar", desc: "desc1" },
    { id: 2, title: "Klinik modullar", desc: "desc2" },
    { id: 3, title: "Ishlab chiqarish amaliyotlari", desc: "desc3" },
    { id: 4, title: "Farmakologiya va repseptura asoslari", desc: "desc4" },
  ]);

  return (
    <div className="fanlarBoyichaOquResurslarAll container">
      <h1 className="title">FANLAR BO’YICHA O’QUV RESURSLAR</h1>
      <div className="content">
        <div className="sidebarFan">
          <form>
            <input type="text" placeholder="Nomi bilan qidirish..." />
          </form>
          {questions.map((question) => {
            return <Accardion key={question.id} {...question} />;
          })}
        </div>
        <div className="cardsBlok">
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
          <div className="cardss">
            <div className="imgBlok">
              <img src={photo} />
            </div>
            <h4>Farmakologiya va repseptura asoslari</h4>
            <p>Kasb (mutaxassislik) kodi va nomi 40910204 – Hamshiralik ishi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FanlarBoyichaOquvResurslariAll;
