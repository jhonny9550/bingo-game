import { createBrowserRouter } from "react-router-dom";
import NewGamePage from "../pages/NewGamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewGamePage />,
  },
]);

export default router;
