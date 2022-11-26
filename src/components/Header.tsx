import Logo from '../assets/logo/Logo.svg';
import LogoMini from '../assets/logo/LogoMini.svg';
import IconLang from '../assets/icons/lang.svg';
import IconSearch from '../assets/icons/search.svg';
import { LIST_FEATURE } from '../constants';

export const Header = (): JSX.Element => {
  return (
    <div className="kbz-header">
      <div className="kbz-header__wrapper">
        <div className="kbz-header__left-side">
          <img src={Logo} className="kbz-header__logo" />
          <img src={LogoMini} className="kbz-header__logo-mini" />
        </div>
        <div className="kbz-header__right-side">
          <div className="kbz-header__services">
            {
              LIST_FEATURE.map((service) => (
                <div key={service.id} className="kbz-header__service-item">
                  {service.label}
                </div>
              ))
            }
          </div>
          <div className="kbz-header__support">
            <div className="kbz-header__languages">
              <img src={IconLang} className="kbz-header__lang-icon" />
              <div className="kbz-header__lang-label">EN</div>
            </div>
            <img src={IconSearch} className="kbz-header__search" />
          </div>
        </div>
      </div>
    </div>
  )
};
