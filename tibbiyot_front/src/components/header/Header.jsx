import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetFetch } from "../../hooks/useGetFetch";

// images
import logoOrg from "../../assets/icons/logoOrg.png";
import login from "../../assets/icons/Login.svg";
import nurse from "../../assets/images/nurse.png";
import phone from "../../assets/icons/phone.svg";
import gmail from "../../assets/icons/gmail.svg";

// sass
import "./header.scss";
import { baseUrl } from "../../services/http";
import { LoginContext } from "../../context/AuthLogin";

// const { oldToken, SetOldToken } = useContext(LoginContext);

function Header() {
  // language idea
  const { i18n, t } = useTranslation();
  function onLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  // hamkorlar idea
  const url = `${baseUrl}/kategoriya_hamkor`;

  const { data: hamkors } = useGetFetch(url);

  return (
    <header>
      <div className="topNavbar">
        <div className="topLeftRightNavbarMenu container">
          <ul className="topLeftNavbarMenu">
            <li>
              <NavLink to="/">{t("home_page.top_navbar.home")}</NavLink>
            </li>
            <li>
              <NavLink>{t("home_page.top_navbar.about")}</NavLink>
            </li>
            <li>
              <NavLink>{t("home_page.top_navbar.courses")}</NavLink>
            </li>
            <li>
              <NavLink>{t("home_page.top_navbar.services")}</NavLink>
            </li>
            <li>
              <NavLink to="/Yangiliklar">
                {t("home_page.top_navbar.news")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/video_materiallar">Video materiallar</NavLink>
            </li>
            {/* <li>
              <NavLink>{t("home_page.top_navbar.contact")}</NavLink>
            </li> */}
          </ul>
          <ul className="topRightNavbarMenu">
            <form>
              <select onChange={onLanguage}>
                <option value="uz">O'zbekcha</option>
                <option value="ru">Русский</option>
              </select>
            </form>
          </ul>
        </div>
      </div>
      <div className="bottomNavbar container">
        <Link className="logo">
          <div className="logoBlok">
            <img src={logoOrg} alt="Logo" />
          </div>
          <p>
            Tibbiy ta’limda o‘quv <br /> resurslarini yaratish va <br />
            rivojlantirish markazi
          </p>
        </Link>
        <div className="centerBottomNavbar">
          <ul className="callNavbar">
            <li>
              <img src={gmail} />
              <p> ttrm.2@mail.ru</p>
            </li>
            <li>
              <img src={phone} />
              <p>(71) 268-13-11</p>
            </li>
            <li>
              <img src={phone} /> <p>1003</p>
            </li>
            <Link to="/login" className="login">
              <img src={login} alt="Kirish" />
              {/* {oldToken ? <p>Kirish</p> : <p>Chiqish</p>} */}
              <p>Kirish</p>
            </Link>
          </ul>
          <ul className="dropdownNavbar">
            <li className="liDropLink1">
              <NavLink className="dropLink">
                <p>{t("home_page.dropdownNavbar.markaz_haqida")}</p>{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink to="/Umumiy-malumot">
                    {t("home_page.dropdownNavbar.umumiy_malumot")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Faoliyatga-oid-meyoriy-hujjatlar">
                    {t(
                      "home_page.dropdownNavbar.faoliyatgaOidMeyoriyHujjatlar"
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/SSB-buyrugi">
                    {" "}
                    {t("home_page.dropdownNavbar.SSBBuyrugi")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Yaratiladigan-Adabiyotlar">
                    {" "}
                    {t("home_page.dropdownNavbar.yaratiladiganAdabiyotlar")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Oquv-resurslariga-qoyilgan-talablar">
                    {" "}
                    {t(
                      "home_page.dropdownNavbar.oquvResurslarigaQoyilganTalablar"
                    )}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink2">
              <NavLink className="dropLink">
                <p>{t("home_page.dropdownNavbar.markaz_tuzilmasi")}</p>{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink to="/Rahbariyat-va-hodimlar">
                    {t("home_page.dropdownNavbar.rahbariyat_hodimlar")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Bo'limlar">
                    {t("home_page.dropdownNavbar.bolimlar")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Tarkibiy-tuzilma">
                    {t("home_page.dropdownNavbar.tarkibiy_tuzilma")}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink3">
              <NavLink className="dropLink">
                <p>{t("home_page.dropdownNavbar.faoliyat")}</p>{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                <li>
                  <NavLink to="/Yangi-adabiyotlar">
                    {t("home_page.dropdownNavbar.yangi_adabiyotlar")}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="liDropLink4">
              <NavLink className="dropLink">
                <p>{t("home_page.dropdownNavbar.bizningHamkorlarimiz")}</p>{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </NavLink>
              <ul className="inner">
                {hamkors &&
                  hamkors.map((hamkor) => {
                    return (
                      <li key={hamkor.id}>
                        <NavLink to={`/Hamkorlar/${hamkor.id}`}>
                          {hamkor.name}
                        </NavLink>
                      </li>
                    );
                  })}
              </ul>
            </li>
            <li className="liDropLink5">
              <NavLink
                to="/Fanlar-boyicha-oquv-resurslari"
                className="dropLink"
                // onClick={() => {
                //   console.log(token);
                // }}
              >
                <p>{t("home_page.dropdownNavbar.oquv_resurslar")}</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="headerImg">
        <img src={nurse} />
      </div>
    </header>
  );
}

export default Header;
