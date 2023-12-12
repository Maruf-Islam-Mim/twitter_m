import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/login">Log in</Link>
      <hr />
      <Link to="/sign-Up">Sign Up</Link>
    </>
  );
};

export default Home;
