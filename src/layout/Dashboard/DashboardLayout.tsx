import {
  Header,
} from '../../components';

interface IDashboardProps {
  children?: JSX.Element;
}

const DashboardLayout = (props: IDashboardProps) => {
  return (
    <div className='h-screen w-screen overflow-hidden flex flex-col'>
      <Header />
      <div className='flex-1 overflow-auto'>
        { props.children }
      </div>
    </div>
    
  );
};

export default DashboardLayout;