import React, { useContext } from "react";
import Logo from "./Logo/Logo";
import css from "./Header.module.css";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import translations from '../../../src/components/LanguageSelector/translations.json';
import { LanguageContext } from "components/LanguageSelector/LanguageContext";
import { NavLink } from "react-router-dom";


const Header = () => {
    const { selectedLanguage } = useContext(LanguageContext);
  return (
    <>
      <div className={css.container}>
        <Logo />
        <div className={css.containerRight}>
          <LanguageSelector />
          <div className={css.navContainer}>
            <nav>
              <ul className={css.listMenu}>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? css.active : css.headerLink
                    }
                    to="/"
                  >
                    {translations[selectedLanguage].layoutHome}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? css.active : css.headerLink
                    }
                    to="portfolio"
                  >
                    {translations[selectedLanguage].layoutPortfolio}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? css.active : css.headerLink
                    }
                    to="aboutus"
                  >
                    {translations[selectedLanguage].layoutAboutUs}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? css.active : css.headerLink
                    }
                    to="contacts"
                  >
                    {translations[selectedLanguage].layoutContacts}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={css.header}></div>
    </>
  );
};

export default Header;
