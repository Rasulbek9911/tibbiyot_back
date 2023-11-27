import React from "react";

//sass
import "./footer.scss";

// images
import logo from "../../assets/icons/logo.svg";
import mail from "../../assets/icons/mail.svg";
import inn from "../../assets/icons/in.svg";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container footerTop">
        <Link className="footerLogo">
          <div className="logoBlok">
            <img src={logo} alt="Logo" />
          </div>
          <p>
            Tibbiy ta’limda o‘quv <br /> resurslarini yaratish va <br />
            rivojlantirish markazi
          </p>
        </Link>
      </div>
      <div className="footerBottom">
        <div className="footerNavbar container">
          <div className="col">
            <Link>
              <img src={mail} />
            </Link>
            <p>
              Email <br />
              <Link>contact@logistics.com</Link>
            </p>
          </div>
          <div className="col">
            <Link to="/">{t("home_page.footer.bosh_sahifa")}</Link>
            <Link>{t("home_page.footer.markaz_haqida")}</Link>
            <Link>{t("home_page.footer.markaz_tuzilmasi")}</Link>
            <Link>{t("home_page.footer.faoliyat")}</Link>
            <Link>{t("home_page.footer.contact")}</Link>
          </div>
          <div className="col">
            <Link>{t("home_page.footer.yangiliklar")}</Link>
            <Link>{t("home_page.footer.oquv_qollanmalar")}</Link>
            <Link>{t("home_page.footer.oquv_materiallari")}</Link>
            <Link>{t("home_page.footer.elektron_resurslar")}</Link>
            <Link>{t("home_page.footer.video_darslar")}</Link>
          </div>
          <div className="col">
            <form>
              <input
                className="footerMail"
                type="email"
                placeholder="Elektron pochta: *"
              />
            </form>
            <div className="logoshow">
              <button>
                <Link>{t("home_page.footer.junatishBtn")}</Link>
              </button>
              <Link>
                <img src={inn} />
              </Link>
              <Link>
                <img src={twitter} />
              </Link>
              <Link>
                <img src={facebook} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footerNextBottom">
        <div className="container">
          <p>{t("home_page.footer.footer_protected")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
