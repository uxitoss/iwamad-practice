import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <div className="blob blob-purple"></div>
      <div className="blob blob-pink"></div>
      <Header title="4th week of course" />
      <main>
        <Outlet />
      </main>
      <Footer year={2026} name="Starkova Veronika" />
    </>
  );
}

export default Layout;