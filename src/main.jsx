import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import App from "./App.jsx";
import Main from "./pages/Main.jsx";
import Meta from "./pages/Meta"
import MetaEscape from "./pages/MetaEscape"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: "", element: <Main />},
            {path: "meta", element: <Meta />},
            {path: "meta-escape", element: <MetaEscape />}
        ]
    }
])
const rootElement = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootElement);
reactRoot.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
