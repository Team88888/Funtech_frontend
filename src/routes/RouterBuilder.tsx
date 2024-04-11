import NotFoundPage from './NotFoundPage/NotFoundPage';
import MeetupsPage from './MeetupsPage/MeetupsPage';
import App from '../components/App';
import AccountPage from './AccountPage/AccountPage';
import HomePage from './HomaPage/HomePage';

const RouterBuilder = () => {
  const generalRoutes = [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/account',
      element: <AccountPage />,
    },
    {
      path: '/meetups',
      element: <MeetupsPage />,
    },
  ];

  const routes = [
    {
      element: <App />,
      children: generalRoutes,
      errorElement: <NotFoundPage />,
    },
  ];

  return routes;
};

export default RouterBuilder;
