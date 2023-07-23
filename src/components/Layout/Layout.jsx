import { Header, Ul, Link, Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </Ul>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
export default Layout;
