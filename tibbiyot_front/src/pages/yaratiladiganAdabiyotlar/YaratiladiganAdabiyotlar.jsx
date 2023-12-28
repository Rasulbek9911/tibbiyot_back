import React, { useEffect, useState } from "react";
// scss
import "./yaratiladiganAdabiyotlar.scss";
// components
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import SidebarMarkazHaqida from "../../components/sidebar/SidebarMarkazHaqida";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import file from "../../assets/files/exe.pdf";

function YaratiladiganAdabiyotlar() {
  const [obj, setObj] = useState();

  useEffect(() => {
    fetch("http://tibbiy-talim-resurslari.uz:90/yaratiladigan_adabiyot")
      .then((res) => res.json())
      .then((data) => setObj(data[0]));
  }, []);

  const newplugin = defaultLayoutPlugin();
  if (!obj) {
    return <p></p>;
  }

  return (
    <div className="oquvResurslarigaQoyilganTalablar container">
      <div className="content">
        <div className="desc">
          <h1 className="title">YARATILADIGAN ADABIYOTLAR</h1>
          <div className="pdf">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={file} plugins={[newplugin]} />
            </Worker>
          </div>
        </div>
        <div className="layout">
          <SidebarMarkazHaqida />
          <OqXalat />
          <SmallContact />
        </div>
      </div>
      <hr style={{ marginBottom: "60px", marginTop: "30px" }} />
    </div>
  );
}

export default YaratiladiganAdabiyotlar;
