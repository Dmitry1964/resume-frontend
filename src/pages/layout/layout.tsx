import Container from 'src/features/container/container';
import Header from 'src/features/header/header';
import Main from 'src/features/main/main';


const Layout = (): React.ReactNode => (
  <Container>
    <Header />
    <Main />
  </Container>
);
export default Layout;
