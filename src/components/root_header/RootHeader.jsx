import { Helmet } from "react-helmet";

const RootHeader = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="shortcut icon"
          href="https://cdn.geekwire.com/wp-content/uploads/2023/07/xlogo.jpeg"
          type="image/x-icon"
        />
      </Helmet>
    </>
  );
};

export default RootHeader;
