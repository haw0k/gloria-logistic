import { useState, FC } from "react";
import Link from "next-translate/Link";
import Icons from "../shared/Icons";
import ReactModal from "react-modal";
import useTranslation from "next-translate/useTranslation";
import Menu from "./menu/Menu";
import LangMenu from "./menu/LangMenu";

const Header: FC = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const { lang } = useTranslation();

  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <header className='main-header'>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className='modal'
        overlayClassName='modal__overlay'
      >
        <button className='modal__close' onClick={closeModal}>
          ×
        </button>
        <nav className='mobile-menu' onClick={closeModal}>
          <Menu isMobile={true}>
            <LangMenu isMobile={true} />
          </Menu>
        </nav>
      </ReactModal>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-2 col-md-6 col-6'>
            <Link href='/' lang={lang}>
              <a className='main-header__logo'>
                <Icons name='logo' />
              </a>
            </Link>
          </div>
          <div className='col-lg-8 d-none d-lg-flex justify-content-center'>
            <nav className='main-menu'>
              <Menu isMobile={false} />
            </nav>
          </div>
          <div className='col-lg-2 d-none d-lg-flex justify-content-end'>
            <nav className='lang-menu'>
              <LangMenu isMobile={false} />
            </nav>
          </div>
          <div className='col-6 col-md-6 d-lg-none d-md-flex d-flex justify-content-end'>
            <nav className='mobile-menu' onClick={() => setIsOpen(true)}>
              <div className='ui-icon__wrapper'>
                <Icons name='hamburger' />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
