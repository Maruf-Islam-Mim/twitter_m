import { createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivetRouter from "./PrivetRouter";
import Layout from "../components/layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [...PublicRouter, ...PrivetRouter],
  },
]);

// export router
export default router;
