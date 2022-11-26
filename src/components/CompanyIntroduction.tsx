import LogoMini from '../assets/logo/LogoMini.svg';
import IntroductionBg from '../assets/images/Illustration.svg';

export const CompanyIntroduction = (): JSX.Element => {
  return (
    <div className="kbz-introduction">
      <div className="kbz-introduction__content">
        <div className="kbz-introduction__content-wrapper">
          <div className="kbz-introduction__title">
            <img src={LogoMini} className="kbz-introduction__logo-mini" />
            Company Introduction
          </div>
          <div className="kbz-introduction__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <button className="kbz-introduction__button">More Detail</button>
        </div>
      </div>
      <div className="kbz-introduction__cover">
        <img src={IntroductionBg} className="kbz-introduction__bg" />
      </div>
    </div>
  )
};
