import React from "react";
// components
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
// scss
import "./oquvResurslarigaQoyilganTalablar.scss";
import SidebarMarkazHaqida from "../../components/sidebar/SidebarMarkazHaqida";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import files from "../../assets/files/oquvResurslarigaQoyiladiganTalablar.pdf";

function OquvResurslarigaQoyilganTalablar() {
  const newplugin = defaultLayoutPlugin();
  return (
    <div className="oquvResurslarigaQoyilganTalablar container">
      <div className="content">
        <div className="desc">
          <h1 className="title">O'QUV RESURSLARIGA QO'YILADIGAN ADABIYOTLAR</h1>
          <div className="pdf">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={files} plugins={[newplugin]} />
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

export default OquvResurslarigaQoyilganTalablar;
