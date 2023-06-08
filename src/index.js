import React from "react";
import { createRoot } from 'react-dom/client';
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();


const app = document.getElementById('root');

// create a root
const root = createRoot(app);

//render app to root
root.render(<App />);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // document.getElementById("root")
);
