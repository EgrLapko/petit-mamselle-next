import { Container } from "@material-ui/core";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg">{children}</Container>
      </main>
    </>
  );
};

export default Layout;
