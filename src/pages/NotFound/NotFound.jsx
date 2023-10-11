import Error from "../../components/Error";

const NotFound = () => {
  document.title = "404 | Shop";
  return <Error>404: Not found</Error>;
};

export default NotFound;
