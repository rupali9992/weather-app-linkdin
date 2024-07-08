import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

export default function Fetch_Movie_Child() {
  return (
    <div>
      <Tabs defaultActiveKey="second" className="justify-content-center">
        <Tab eventKey="first" title="Popular">
          <Tab1 />
        </Tab>
        <Tab eventKey="second" title="Upcoming">
          <Tab2 />
        </Tab>
        <Tab eventKey="third" title="Top_rated">
          <Tab3 />
        </Tab>
      </Tabs>
    </div>
  );
}
