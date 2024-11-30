import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Yangiliklar from './pages/Yangiliklar';
import Contact from './pages/Contact';
import NewsAbout from './components/NewsAbout';
import Xizmatlar from './pages/Xizmatlar';
import DoctorsPage from './pages/DoctorsPage';
import Kirish from './pages/Kirish';
import SignUp from './pages/SignUp';
import Online from './pages/Online';
import ServicesAbout from './pages/ServicesAbout';
import DoctorsAbout from './pages/DoctorsAbout';
import DiseasesPage from './pages/DiseasesPage';
import DiseaseDetails from './components/DiseaseDetails';
const appRouter = createBrowserRouter([{
  element: <App />,
  path: "/",
  errorElement: <ErrorPage />,
  children: [{
    path: "/",
    element: <Home />

  },
  {
    path: "/Xizmatlar",
    element: <Xizmatlar />
  },
  {
    path: "/doctors",
    element: <DoctorsPage />
  },

  {
    path: "/yangiliklar",
    element: <Yangiliklar />
  },
    {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/kirish",
    element: <Kirish />
  },
  {
    path: "/ro'yxatdan_o'tish",
    element: <SignUp />
  },
  {
    path: "/qabul",
    element: <Online />
  },
  {
    path: "/kasalliklar",
    element: <DiseasesPage />
  },

  {
    path: "/newsAbout/:id",
    element: <NewsAbout />
  },
  {
    path: "/ServicesAbout/:id",
    element: <ServicesAbout />
  },
  {
    path: "/DoctorsAbout/:id",
    element: <DoctorsAbout />
  },
  {
    path: "/diseases/:id",
    element: <DiseaseDetails />
  },

  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

