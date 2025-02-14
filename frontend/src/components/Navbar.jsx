import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/tasks">Tareas</Link>
      <Link to="/login">Iniciar Sesión</Link>
      <Link to="/register">Registrarse</Link>
    </nav>
  );
};

export default Navbar;
