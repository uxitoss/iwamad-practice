import { NavLink } from 'react-router';

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;