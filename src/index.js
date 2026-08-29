import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PortfolioProvider } from "./context/PortfolioContext";
import { ToastProvider } from "./Components/ui/Toast";
import { ConfirmProvider } from "./Components/ui/ConfirmDialog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <PortfolioProvider>
            <ToastProvider>
                <ConfirmProvider>
                    <App />
                </ConfirmProvider>
            </ToastProvider>
        </PortfolioProvider>
    </React.StrictMode>
);
