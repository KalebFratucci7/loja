import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetail />,
  },
]);

function Navigation() {
  return <RouterProvider router={router} />;
}

export default Navigation;
