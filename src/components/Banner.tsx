import { useState } from 'react';
import BannerBg from '../assets/images/banner.svg';
import IconChevronL from '../assets/icons/chevron-l.svg';
import IconArrowR from '../assets/icons/arrow-r.svg';
import { BANNER_CONFIG } from '../constants';

export const Banner = (): JSX.Element => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="kbz-banner">
      <div
        className="kbz-banner__background"
        style={{ backgroundImage: `url(${BannerBg})` }}
      />
      <div className="kbz-banner__content">
        <div
          className={`kbz-banner__action-btn ${current === 0 ? 'kbz-banner__action-btn--disabled' : ''}`}
          onClick={() => setCurrent(current - 1 > 0 ? current - 1 : 0)}
        >
          <img src={IconChevronL} className="kbz-banner__prev" />
        </div>
        <div className="kbz-banner__casual">
          <div className="kbz-banner__casual-wrapper">
            {
              BANNER_CONFIG.map((info, idx) => (
                <div
                  key={idx}
                  style={{
                    transform: `translateX(${(idx - current) * 100}%)`
                  }}
                  className="kbz-banner__casual-item"
                >
                  <div className="kbz-banner__box-title">
                    {info.label}
                  </div>
                  <div className="kbz-banner__box-description">
                    {info.description}
                  </div>
                  <div className="kbz-banner__box-button">
                    {info.buttonLabel}
                    <img src={IconArrowR} className="kbz-banner__box-button-icon" />
                  </div>
                </div>
              ))
            }
          </div>
          <div className="kbz-banner__casual-status">
            {
              BANNER_CONFIG.map((info, idx) => (
                <div
                  key={idx}
                  className={`kbz-banner__casual-status-item ${current === idx ? 'kbz-banner__casual-status-item--active' : ''}`}
                />
              ))
            }
          </div>
        </div>
        <div
          className={`kbz-banner__action-btn ${current + 1 === BANNER_CONFIG.length ? 'kbz-banner__action-btn--disabled' : ''}`}
          onClick={() => setCurrent(current + 1 < BANNER_CONFIG.length ? current + 1 : BANNER_CONFIG.length - 1)}
        >
          <img src={IconChevronL} className="kbz-banner__next" />
        </div>
      </div>
    </div>
  )
};
