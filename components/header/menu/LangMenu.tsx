import { FC } from "react";
import Link from "next/link";
import cs from "classnames";
import i18Config from "../../../i18n.json";
import useTranslation from "next-translate/useTranslation";
import { ILangMenuProps } from './../../../interfaces/ILangMenu';

const LangMenu: FC<ILangMenuProps> = ({ isMobile }) => {
  const { locales } = i18Config;
  const { lang } = useTranslation();

  return (
    <ul
      className={cs("lang-menu__list", isMobile && "lang-menu__list--mobile")}
    >
      {locales &&
        locales.map((item, index) => (
          <li
            className={cs(
              "lang-menu__item",
              isMobile && "lang-menu__item--mobile"
            )}
            key={index}
          >
            <Link href="/" locale={item}>
              <a
                className={cs(
                  "lang-menu__link",
                  isMobile && "lang-menu__link--mobile",
                  lang === item && "lang-menu__link--active"
                )}
              >
                {item}
              </a>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default LangMenu;
