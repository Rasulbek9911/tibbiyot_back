import React from "react";
// scss
import "./xalqaroHamkorlik.scss";
// components
import SidebarTwo from "../../components/sidebar/SidebarTwo";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
import { useGetFetch } from "../../hooks/useGetFetch";
import { useParams } from "react-router-dom";

function XalqaroHamkorlik() {
  const { id } = useParams();
  const url = `http://tibbiy-talim-resurslari.uz/hamkorlar/${id}`;
  const { data } = useGetFetch(url);

  return (
    <div className="xalqaro container">
      <div className="desc">
        <h1 className="title">{data && data[0].category.name}</h1>
        <table className="xalqaroTable">
          <tr className="thead">
            <td>N</td>
            <td>Tashkilot nomi</td>
            <td>Faoliyati</td>
            <td>Logotype</td>
          </tr>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={item.id} className="tbody">
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td dangerouslySetInnerHTML={{ __html: item.faoliyat }}></td>
                  <td>
                    <img src={item.rasm} />
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
      <div className="layout">
        <SidebarTwo />
        <OqXalat />
        <SmallContact />
      </div>
    </div>
  );
}

export default XalqaroHamkorlik;
