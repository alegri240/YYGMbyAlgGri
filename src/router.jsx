import {createBrowserRouter } from 'react-router-dom';
import Eta from './pages/Eta/Eta.jsx';
import Meny from './pages/Meny/Meny.jsx';
import Recipt from './pages/Recipt/Recipt.jsx';
import Error from './pages/Error/Error.jsx';
import Cart from './pages/Cart/Cart.jsx';


const router = createBrowserRouter ([
    {
        path: '/',
        element: <Meny />,
        errorElement: <Error/>
    },
    {
        path: '/eta',
        element: <Eta />    
    },
     {
        path: '/cart',
        element: <Cart />    
    },
    {   
        path: '/recipt',
        element: <Recipt />
    }
    ]);

    export default router;
