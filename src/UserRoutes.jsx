import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() => import('./pages/OurFriendsPage/OurFriendsPage'));


const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserPage = lazy(() => import('./pages/UserPage/UserPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<PublicRoute component={RegisterPage} redirectTo="/my-contacts" />} />
        <Route path="/login" element={<PublicRoute component={LoginPage} redirectTo="/" />}/>
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />

        <Route path="/user" element={<PrivateRoute component={UserPage} redirectTo="/login" />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
