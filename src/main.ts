import './style.css'
import ReactDOM from 'react-dom/client'
import HomePage from "./Pages/HomePage.tsx"
import React from 'react'
const root=document.getElementById('app') as HTMLElement

const rootNode=ReactDOM.createRoot(root)

rootNode.render(

        React.createElement(HomePage)

)