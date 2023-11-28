// components
import OqXalat from "./components/OqXalat";
import SmallContact from "./components/SmallContact";
import { useGetFetch } from "../../hooks/useGetFetch";
import SidebarMarkazHaqida from "../../components/sidebar/SidebarMarkazHaqida";
import { baseUrl } from "../../services/http";

function Umumiy() {
  const url = `${baseUrl}/common_information`;
  const { data, isPending, error } = useGetFetch(url);
  if (data == null) {
    return <p>null</p>;
  }
  return (
    <div className="umumiy">
      <div className="desc">
        <h1>UMUMIY MA’LUMOT</h1>
        <h4 dangerouslySetInnerHTML={{ __html: data[0]?.title }}></h4>
        <div dangerouslySetInnerHTML={{ __html: data[0]?.description }}></div>
      </div>
      <div className="layout">
        <SidebarMarkazHaqida />
        <OqXalat />
        <SmallContact />
      </div>
    </div>
  );
}

export default Umumiy;
