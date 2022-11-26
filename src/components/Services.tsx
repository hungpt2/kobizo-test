import FooterBg from '../assets/images/footer.svg';
import { SERVICES } from '../constants';

export const Services = (): JSX.Element => {
  return (
    <div
      className="kbz-services"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <div className="kbz-services__wrapper">
        <div className="kbz-services__title">
          We Offer A Wide Range Of Services
        </div>
        <div className="kbz-services__list">
          {
            SERVICES.map((el, index) => (
              <div
                key={index}
                className="kbz-services__list-item"
              >
                <img src={el.icon} className="kbz-services__item-icon" />
                <div className="kbz-services__item-label">
                  {el.label}
                </div>
                <div className="kbz-services__item-description">
                  {el.description}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};
