import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./layout/RootLayout/RootLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootLayout />
  </StrictMode>
);
