import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Homelayout from './Layout/Homelayout.jsx';
import Home from './Page/Home.jsx';
import Addplant from './Layout/Addplant.jsx';
import AddPlantForm from './Page/AddPlantForm.jsx';
import AllPlantsTable from './Layout/AllPlantsTable.jsx';
import Allplantlayout from './Layout/Allplantlayout.jsx';
import PlantDetails from './Compound/PlantDetails.jsx';
import LoginPage from './Page/LoginPage.jsx';
import RegisterPage from './Page/RegisterPage.jsx';
import MyPlantPageLayout from './Layout/MyPlantPageLayout.jsx';
import MyPage from './Compound/MyPage.jsx';
import AuthProvider from './AuthOperationM/AuthProvider.jsx';
import PrivateRoute from './AuthOperationM/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Homelayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('http://localhost:3000/plantinfo').then(res => res.json())
      }
    ]

  },
  {
    path: "/addplant",
    Component: Addplant,
    children: [
      {
        index: true,
        Component: AddPlantForm
      }
    ]
  },
  {
    path: "/allplant",
    Component: Allplantlayout,

    children: [
      {
        index: true,
        Component: AllPlantsTable,
        loader: () => fetch('http://localhost:3000/plantinfo').then(res => res.json())
      },
      {

        path: 'details/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/plantinfo/${params.id}`).then(res => res.json()),
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        )


      }
    ]
  },
  {

    path: '/myplant',

    Component: MyPlantPageLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/plantinfo').then(res => res.json()),
        Component: MyPage
      }
    ]


  },
  {
    path: '/login',
    Component: LoginPage
  },
  {
    path: '/registar',
    Component: RegisterPage
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
