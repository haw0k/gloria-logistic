import Link from 'next/link';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="footer__copyright">
            <p>
              © Gloria Logistic, 2020
            </p>
            <p>
              Все права защищены
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="footer__address">
            <p>
              Адрес:
            </p>
            <address>
              Paseo Mediterráneo, n 1, local 10, despacho 6, 03590 - Altea (Alicante)
            </address>
          </div>
        </div>
        <div className="col-md-3 d-flex md-justify-content-end">
          <div className="footer__email">
            <p>e-mail:</p>
            <a href="mailto: glorialogistic.s.l@gmail.com">glorialogistic.s.l@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;