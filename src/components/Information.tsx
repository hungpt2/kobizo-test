import Logo from '../assets/logo/Logo.svg';
import FooterBg from '../assets/images/footer.svg';
import { LIST_FEATURE, LIST_SOCIAL } from '../constants';

export const Information = (): JSX.Element => {
  return (
    <div className="kbz-information">
      <div
        className="kbz-information__background"
        style={{ backgroundImage: `url(${FooterBg})` }}
      />
      <div className="kbz-information__content">
        <div className="kbz-information__title">Request More Information</div>
        <div className="kbz-information__description">We are obsessed from creating amazing products for our customers to then succeeding with you to celebrate together.</div>
        <button className="kbz-information__button">
          <span className="kbz-information__button-text">Contact Us</span>
        </button>
        <div className="kbz-information__copyright">© 2022 Kobizo Business & Technology. All Rights Reserved.</div>
        <div className="kbz-information__footer">
          <img src={Logo} className="kbz-information__logo" />
          <div className="kbz-information__services">
            {
              LIST_FEATURE.map((service) => (
                <div key={service.id} className="kbz-information__service-item">
                  {service.label}
                </div>
              ))
            }
          </div>
          <div className="kbz-information__socials">
            {
              LIST_SOCIAL.map((social) => (
                <div key={social.id} className="kbz-information__social-item">
                  <img src={social.icon} className="kbz-information__social-icon" />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
};
