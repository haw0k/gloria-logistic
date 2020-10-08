import { FC } from "react";
import cs from "classnames";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";
import { IMenuProps } from './../../../interfaces/IMenuProps';

const Menu: FC<IMenuProps> = ({ isMobile, children }) => {
  const { t } = useTranslation();

  return (
    <ul className={cs(isMobile ? "mobile-menu__list" : "main-menu__list")}>
      <li className={cs(isMobile ? "mobile-menu__item" : "main-menu__item")}>
        <Link href="/#about">
          <a className={cs(isMobile ? "mobile-menu__link" : "main-menu__link")}>
            {t("common:menuAbout")}
          </a>
        </Link>
      </li>
      <li className={cs(isMobile ? "mobile-menu__item" : "main-menu__item")}>
        <Link href="/#fixing">
          <a className={cs(isMobile ? "mobile-menu__link" : "main-menu__link")}>
            {t("common:menuFixing")}
          </a>
        </Link>
      </li>
      <li className={cs(isMobile ? "mobile-menu__item" : "main-menu__item")}>
        <Link href="/#stone">
          <a className={cs(isMobile ? "mobile-menu__link" : "main-menu__link")}>
            {t("common:menuStone")}
          </a>
        </Link>
      </li>
      {/* <li className={cs(isMobile ? "mobile-menu__item" : "main-menu__item")}>
        <Link href="/business">
          <a className={cs(isMobile ? "mobile-menu__link" : "main-menu__link")}>
            {t("common:menuBusiness")}
          </a>
        </Link>
      </li> */}
      {children}
    </ul>
  );
};

export default Menu;
