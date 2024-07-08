import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NewUser from "./components/New-User";

import "./css/style.css";
import StockCalculator from "./components/StockCalculator";
import CarloanCalculator from "./components/CarloanCalculator";
import P1 from "./components/P1";
import Markscalculation from "./components/Marks-calculation";
import UseEffect from "./components/UseEffect";
import Main from "./components/Main";
import Flags from "./components/Flags";
import Parent_Flags from "./components/Parent-Flags";
import Parent_Weather from "./components/Parent-Weather";
import Fetch_movie_data from "./components/Fetch_movie_data";

import Popular from "./components/Popular";
import Assignment_Parent1 from "./components/Assignment_Parent1";
import M1 from "./components/M1";
import UserRegShow from "./components/UserRegShow";
import Class from "./components/Class";
// import Library from "./components/Library";
// import Addgroup from "./components/Add-group";
// import AddMessage from "./components/Add-Message";
// import Addcontact from "./components/Add-contact";
// import Sendsms from "./components/Sendsms";
// import { Provider } from "react-redux";
// import Smsstore from "./Redux/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "markscalculation",
        element: <Markscalculation />,
      },
      {
        path: "UseEffect",
        element: <UseEffect />,
      },
      {
        path: "Main",
        element: <Main />,
      },
      {
        path: "Flags",
        element: <Flags />,
      },
      {
        path: "Fetch_movie",
        element: <Fetch_movie_data />,
      },
      {
        path: "Assignment_parent1",
        element: <Assignment_Parent1 />,
      },
      {
        path: "Popular",
        element: <Popular />,
      },

      {
        path: "Parent-Weather",
        element: <Parent_Weather />,
      },
      {
        path: "Parent_Flags",
        element: <Parent_Flags />,
      },
      {
        path: "M1",
        element: <M1 />,
      },
      // {
      //   path: "Library",
      //   element: <Library />,
      // },
      // {
      //   path: "Add-group",
      //   element: <Addgroup />,
      // },
      // {
      //   path: "Add-Message",
      //   element: <AddMessage />,
      // },
      // {
      //   path: "Add-Contact",
      //   element: <Addcontact />,
      // },
      // {
      //   path: "Send-sms",
      //   element: <Sendsms />,
      // },
      {
        path: "P1",
        element: <P1 />,
      },
      {
        path: "class-component",
        element: <Class  x='200' y ='10'/>,
      },
      {
        path: "NewUser",
        element: <NewUser />,
      },
      {
        path: "userRegShow",
        element: <UserRegShow />,
      },

      {
        path: "StockCalculator",
        element: <StockCalculator />,
      },
      {
        path: "CarloanCalculator",
        element: <CarloanCalculator />,
      },
    ],
  },
]);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
 
    <RouterProvider router={router} />
 
);
