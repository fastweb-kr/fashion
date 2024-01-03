import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Community, Login, Main, Match, Rank } from '../pages';
import { AppLayout, BasicLayout } from '../features';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="/community" element={<Community />} />
            <Route path="/match" element={<Match />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
