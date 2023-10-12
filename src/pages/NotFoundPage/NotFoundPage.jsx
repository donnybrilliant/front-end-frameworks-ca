import Error from "../../components/ui/Error";

const NotFoundPage = () => {
  document.title = "404 | Shop";
  return <Error>404: Not found</Error>;
};

export default NotFoundPage;
