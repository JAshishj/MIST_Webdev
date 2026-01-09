import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { WatchlistProvider } from './Components/manhwa_watchlist';
import './index.css'
import Home from "./Pages/home"; 
import Search from "./Pages/search";
import Watchlist from "./Pages/watchlist";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {path: "/search", element: <Search /> },
  {path: "/watchlist", element: <Watchlist /> },
  {path: "*", element: <div className="text-white text-3xl text-center mt-20">404 - Page Not Found</div> }
],
{  basename: "/MIST_Webdev/Task-5/"}
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WatchlistProvider>
      <RouterProvider router={router} />
    </WatchlistProvider>
  </StrictMode>,
)
