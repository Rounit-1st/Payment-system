import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery.jsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from './components/Theme/Theme.js';
import OurMembers from "./components/OurMembers/OurMembers.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import OurAlumni from "./components/OurAlumni/OurAlumni.jsx";
import OurBranches from "./components/OurBranches/OurBranches.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="members" element={<OurMembers />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="alumni" element={<OurAlumni />} />
      <Route path="branches" element={<OurBranches />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
