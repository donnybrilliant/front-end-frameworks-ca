import Error from "../../components/ui/Error";

// Page to display the 404 Page
const NotFoundPage = () => {
  document.title = "404 | Shop";
  return <Error>404: Not found</Error>;
};

export default NotFoundPage;
