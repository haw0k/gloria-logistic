import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-3'>
            <div className='footer__copyright'>
              <p>© Gloria Logistic, 2020</p>
              <p>
                <small>
                  {t("common:footerCreated")}{" "}
                  <a
                    href='https://t.me/haw0k'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t("common:footerCreator")}
                  </a>
                </small>
              </p>
            </div>
          </div>
          <div className='col-lg-5 col-md-6'>
            <div className='footer__address'>
              <p>{t("common:footerAddress")}:</p>
              <address>
                Paseo Mediterráneo, n 1, local 10, despacho 6, 03590 - Altea
                (Alicante)
              </address>
            </div>
          </div>
          <div className='col-md-3 d-flex justify-content-md-end'>
            <div className='footer__email'>
              <p>e-mail:</p>
              <a
                href='mailto: glorialogistic.s.l@gmail.com'
                rel='noopener noreferrer'
              >
                glorialogistic.s.l@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
