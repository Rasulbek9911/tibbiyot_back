import React, { useContext, useState } from "react";
import "./maruzaMatn.scss";
import SidebarFan from "../sidebarFan/SidebarFan";
import { FanContext } from "../../../../context/OquvResurslar";

// ==
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

function MaruzaMatn() {
  const { detail } = useContext(FanContext);

  console.log(detail);
  const newplugin = defaultLayoutPlugin();
  if (!detail) {
    return <p></p>;
  }
  return (
    <div className="maruzaMatn container">
      <h1 className="title">FARMAKOLOGIYA VA REPSEPTURA ASOSLARI</h1>
      <div className="content">
        <div className="desc">
          <div className="pdf">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={detail} plugins={[newplugin]} />
            </Worker>
          </div>
        </div>
        <div className="sidebarBlok">
          <SidebarFan />
        </div>
      </div>
    </div>
  );
}

export default MaruzaMatn;
