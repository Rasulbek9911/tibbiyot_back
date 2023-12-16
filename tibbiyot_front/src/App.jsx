import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import BoshSahifa from "./pages/BoshSahifa";
import Home from "./pages/home/Home";
import UmumiyMalumot from "./pages/umumiyMalumot/UmumiyMalumot";
import FaoliyatgaOidMeyoriyHujjat from "./pages/faoliyatgaOidMeyoriyHujjat/FaoliyatgaOidMeyoriyHujjat";
import SSBbuyrugi from "./pages/SSBbuyrugi/SSBbuyrugi";
import Rahbariyat from "./pages/rahbariyat/Rahbariyat";
import Bolimlar from "./pages/bolimlar/Bolimlar";
import TarkibiyTuzilma from "./pages/tarkibiyTuzilma/TarkibiyTuzilma";
import XalqaroHamkorlik from "./pages/xalqaroHamkorlik/XalqaroHamkorlik";
import YangiAdabiyotlar from "./pages/yangiAdabiyotlar/YangiAdabiyotlar";
import NotFound from "./pages/notFound/NotFound";
import YaratiladiganAdabiyotlar from "./pages/yaratiladiganAdabiyotlar/YaratiladiganAdabiyotlar";
import OquvResurslarigaQoyilganTalablar from "./pages/oquvResurslarigaQoyilganTalablar/OquvResurslarigaQoyilganTalablar";
import FanlarBoyichaOquvResurslariAll from "./pages/fanlarBoyichaOquvResurslariAll/FanlarBoyichaOquvResurslariAll";
import FanMundarija from "./pages/fanlarBoyichaOquvResurslariAll/fanMundarija/FanMundarija";
import PullikResurslar from "./pages/fanlarBoyichaOquvResurslariAll/PullikResurslar";
import LayoutFanMundarija from "./pages/fanlarBoyichaOquvResurslariAll/fanMundarija/LayoutFanMundarija";
import MaruzaMatn from "./pages/fanlarBoyichaOquvResurslariAll/fanMundarija/maruzaMatn/MaruzaMatn";
import Login from "./pages/authModal/login/Login";
import RoyxatdanOtish from "./pages/authModal/royxatdanOtish/RoyxatdanOtish";
import ParolniTiklash from "./pages/authModal/parolniTiklash/ParolniTiklash";
import Yangiliklar from "./pages/yangiliklar/Yangiliklar";
import YangilikLayout from "./pages/yangiliklar/YangilikLayout";
import BatafsilYangilik from "./pages/yangiliklar/BatafsilYangilik";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <BoshSahifa />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "Umumiy-malumot",
          element: <UmumiyMalumot />,
        },
        {
          path: "Faoliyatga-oid-meyoriy-hujjatlar",
          element: <FaoliyatgaOidMeyoriyHujjat />,
        },
        {
          path: "SSB-buyrugi",
          element: <SSBbuyrugi />,
        },
        {
          path: "Yaratiladigan-Adabiyotlar",
          element: <YaratiladiganAdabiyotlar />,
        },
        {
          path: "Oquv-resurslariga-qoyilgan-talablar",
          element: <OquvResurslarigaQoyilganTalablar />,
        },
        {
          path: "Rahbariyat-va-hodimlar",
          element: <Rahbariyat />,
        },
        {
          path: "Bo'limlar",
          element: <Bolimlar />,
        },
        {
          path: "Tarkibiy-tuzilma",
          element: <TarkibiyTuzilma />,
        },
        {
          path: "Hamkorlar/:id",
          element: <XalqaroHamkorlik />,
        },
        {
          path: "Yangi-adabiyotlar",
          element: <YangiAdabiyotlar />,
        },
        {
          path: "Yangiliklar",
          element: <YangilikLayout />,
          children: [
            {
              index: true,
              element: <Yangiliklar />,
            },
            {
              path: ":id",
              element: <BatafsilYangilik />,
            },
          ],
        },
        {
          path: "Yangiliklar",
          element: <Yangiliklar />,
        },
        {
          path: "Fanlar-boyicha-oquv-resurslari",
          element: <PullikResurslar />,
          children: [
            {
              index: true,
              element: <FanlarBoyichaOquvResurslariAll />,
            },
            {
              path: ":id",
              element: <LayoutFanMundarija />,
              children: [
                {
                  index: true,
                  element: <FanMundarija />,
                },
                // {
                //   path: "detail",
                //   element: <MaruzaMatn />,
                // },
              ],
            },
          ],
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "royxatdan-otish",
          element: <RoyxatdanOtish />,
        },
        {
          path: "parolni-tiklash",
          element: <ParolniTiklash />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
