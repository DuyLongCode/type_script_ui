import './style.css'
import ReactDOM from 'react-dom/client'
import React from "react";
import HomePage from "./Pages/HomePage.tsx";  // Updated to use default import

const root = document.getElementById('app') as HTMLElement

const rootNode = ReactDOM.createRoot(root)

rootNode.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(
      HomePage,
      null,
      'Hello Vite + React!'
    )
  )

)