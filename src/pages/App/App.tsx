import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from '../Dashboard';

export const App = () => {
  return (
    <BrowserRouter basename='/kobizo-test'>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
