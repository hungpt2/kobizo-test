import DashboardLayout from '../../layout/Dashboard/DashboardLayout';

import {
  Banner,
  CompanyIntroduction,
  Services,
  TechnologySolutions,
  Information,
} from '../../components';

export const Dashboard = (): JSX.Element => {
  return (
    <DashboardLayout>
      <>
        <Banner />
        <CompanyIntroduction />
        <Services />
        <TechnologySolutions />
        <Information />
      </>
    </DashboardLayout>
  )
};
