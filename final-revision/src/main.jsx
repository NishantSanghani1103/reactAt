import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './common/Header.jsx'
import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router-dom'
import MainLayout from './common/MainLayout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './pages/About.jsx'
import DashBoard from './pages/DashBoard.jsx'
import DashBoardProfile from './pages/DashBoardProfile.jsx'
import DashBoardLogin from './pages/DashBoardLogin.jsx'
import Cart from './pages/Cart.jsx'
import MemoCounter from './topics/hooks/Reactmemo/MemoCounter.jsx'
import UseMemo from './topics/hooks/UseMemo/UseMemo.jsx'
import UseCallBackCounter from './topics/hooks/UseCallBack/UseCallBackCounter.jsx'
import UserReducer from './topics/hooks/UseReducer/UserReducer.jsx'
import Page from './topics/hooks/CustomeHooks/Page.jsx'
import UseContext from './topics/hooks/USeContext/UseContext.jsx'
import Error404 from './pages/Error.jsx'
import UseLoader from './topics/hooks/UseLoader/UseLoader.jsx'
import { getMovieData } from './topics/hooks/UseLoader/MovieData.jsx'
import ApiDemo from './topics/apiDemo/ApiDemo.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        // element: <Navigate to={'/about'}/>
        element: <App />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "dashboard",
        element: <DashBoard />,
        children: [
          {
            path: "profile",
            element: <DashBoardProfile />
          },
          {
            path: "login",
            element: <DashBoardLogin />
          }
        ]
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "reactmemo",
        element: <MemoCounter />
      },
      {
        path: "usememo",
        element: <UseMemo />
      },
      {
        path: "usecallback",
        element: <UseCallBackCounter />
      },
      {
        path: "usereducer",
        element: <UserReducer />
      },
      {
        path: "customhooks",
        element: <Page />
      },
      {
        path: "apidemo",
        element: <ApiDemo />
      },
      {
        path: "movie",
        loader: getMovieData,
        element: <UseLoader />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <UseContext>
    <RouterProvider router={router} />
  </UseContext>

  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<MainLayout />}>
  //       <Route path='/' element={<App />} />
  //       <Route path='/about' element={<About />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>

)
