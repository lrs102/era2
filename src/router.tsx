import {createBrowserRouter} from 'react-router';
import AppLayout from './AppLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            // {index: true, element: <HomePage/>},
            // {path: 'about', element: <AboutPage/>},
        ],
    },
]);
