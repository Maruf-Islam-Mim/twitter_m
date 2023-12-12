import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Home from "../pages/Home/Home";

const PublicRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];

// export public router
export default PublicRouter;
