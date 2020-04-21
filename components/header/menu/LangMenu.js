import Link from "next-translate/Link";
import cs from "classnames";
import i18Config from "../../../i18n.json";
import useTranslation from "next-translate/useTranslation";

const LangMenu = ({ isMobile }) => {
  const { allLanguages } = i18Config;
  const { lang } = useTranslation();

  return (
    <ul
      className={cs("lang-menu__list", isMobile && "lang-menu__list--mobile")}
    >
      {allLanguages &&
        allLanguages.map((item, index) => (
          <li
            className={cs(
              "lang-menu__item",
              isMobile && "lang-menu__item--mobile"
            )}
            key={index}
          >
            <Link href="/" lang={item}>
              <a
                className={cs(
                  "lang-menu__link",
                  isMobile && "lang-menu__link--mobile",
                  lang === { item } && "lang-menu__link--active"
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
