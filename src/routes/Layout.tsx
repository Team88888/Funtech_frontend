import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RouterBuilder from './RouterBuilder';

const Layout = () => {
    const routes = useMemo(() => RouterBuilder(), []);
    return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default Layout;
