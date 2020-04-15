import React from "react";
import Link from "next/link";
import Icons from "../shared/Icons";
import ReactModal from "react-modal";

const Header = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <header className="main-header">
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="modal"
        overlayClassName="modal__overlay"
      >
        <button className="modal__close" onClick={closeModal}>×</button>
        <nav className="mobile-menu" onClick={closeModal}>
          <ul className="mobile-menu__list">
            <li className="mobile-menu__item">
              <Link href="/#about">
                <a className="mobile-menu__link">О компании</a>
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link href="/#services">
                <a className="mobile-menu__link">Услуги</a>
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link href="/business">
                <a className="mobile-menu__link">Бизнес-проекты</a>
              </Link>
            </li>
            <ul className="lang-menu__list lang-menu__list--mobile">
              <li className="lang-menu__item lang-menu__item--mobile">
                <Link href="#">
                  <a className="lang-menu__link lang-menu__link--mobile">En</a>
                </Link>
              </li>
              <li className="lang-menu__item lang-menu__item--mobile">
                <Link href="#">
                  <a className="lang-menu__link lang-menu__link--mobile">Es</a>
                </Link>
              </li>
              <li className="lang-menu__item lang-menu__item--mobile">
                <Link href="#">
                  <a className="lang-menu__link lang-menu__link--mobile lang-menu__link--active">Ру</a>
                </Link>
              </li>
            </ul>
          </ul>
        </nav>
      </ReactModal>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-6 col-6">
            <Link href="/">
              <a className="main-header__logo">
                <Icons name="logo" />
              </a>
            </Link>
          </div>
          <div className="col-lg-8 d-none d-lg-flex justify-content-center">
            <nav className="main-menu">
              <ul className="main-menu__list">
                <li className="main-menu__item">
                  <Link href="/#about" scroll={false}>
                    <a className="main-menu__link">О компании</a>
                  </Link>
                </li>
                <li className="main-menu__item">
                  <Link href="/#services" scroll={false}>
                    <a className="main-menu__link">Услуги</a>
                  </Link>
                </li>
                <li className="main-menu__item">
                  <Link href="/business/">
                    <a className="main-menu__link">Бизнес-проекты</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-2 d-none d-lg-flex justify-content-end">
            <nav className="lang-menu">
              <ul className="lang-menu__list">
                <li className="lang-menu__item">
                  <Link href="#">
                    <a className="lang-menu__link">En</a>
                  </Link>
                </li>
                <li className="lang-menu__item">
                  <Link href="#">
                    <a className="lang-menu__link">Es</a>
                  </Link>
                </li>
                <li className="lang-menu__item">
                  <Link href="#">
                    <a className="lang-menu__link lang-menu__link--active">
                      Ру
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-6 col-md-6 d-lg-none d-md-flex d-flex justify-content-end">
            <nav
              className="mobile-menu"
              onClick={() => setIsOpen(true)}
            >
              <div className="ui-icon__wrapper">
                <Icons name="hamburger" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
