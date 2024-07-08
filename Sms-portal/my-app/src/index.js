import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App";
import "./css/style.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Library from "./component/Library";
import Group from "./component/Group";
import Contact from "./component/Contact";
import Sendsms from "./component/Send-sms";
import AddMessage from "./component/AddMessage";
import smsstore from "./redux/smsstore";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Library",
        element: <Library />,
      },
      {
        path: "Group",
        element: <Group />,
      },
      {
        path: "AddMessage",
        element: <AddMessage />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
     
      {
        path: "Send-sms",
        element: <Sendsms />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={smsstore}>
   
      <RouterProvider router={router} />
    
  </Provider>
);
