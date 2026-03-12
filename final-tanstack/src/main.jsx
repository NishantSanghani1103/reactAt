import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './common/MainLayout.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Cart from './pages/Cart.jsx';
import Contact from './pages/Contact.jsx';
import InfiniteScroll from './pages/InfiniteScroll.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import MainContext from './common/MainContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "scroll",
        element: <InfiniteScroll />
      },
      {
        path: "products/:id",
        element: <ProductDetails />
      }
    ]
  }
])
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <MainContext>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </MainContext>

)
