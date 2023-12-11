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
import { useGetFetch } from "../../hooks/useGetFetch";
import { baseUrl } from "../../services/http";

function Bolimlar() {
  const { data } = useGetFetch(`${baseUrl}/bolim`);
  if (!data) {
    return <p></p>;
  }
  return (
    <div className="bolimlar container">
      <div className="content">
        <div className="desc">
          <h1 className="title">BO'LIMLAR</h1>
          <div className="row">
            {data.map((bolim) => {
              return (
                <div className="cardss" key={bolim.id}>
                  <h2 className="title">{bolim.title}</h2>
                  <p
                    className="descreption"
                    dangerouslySetInnerHTML={{ __html: bolim.description }}
                  ></p>
                </div>
              );
            })}
          </div>
          <hr style={{ marginBottom: "30px" }} />
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
