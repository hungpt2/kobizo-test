import SolutionBg from '../assets/images/solutions.svg';

export const TechnologySolutions = (): JSX.Element => {
  return (
    <div className="kbz-solutions">
      <button className="kbz-solutions__button">Technology Solutions</button>
      <div>
        <div
          className="kbz-solutions__background"
        >
          <img src={SolutionBg} className="kbz-header__logo" />
        </div>
        <div className="kbz-solutions__description">
          We are obsessed from creating amazing products for our customers to then succeeding with you to celebrate together!
        </div>
      </div>
    </div>
  )
};
