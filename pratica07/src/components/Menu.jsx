import { useAuth } from '../contexts/AuthContext';

function Menu() {
  const { logout } = useAuth();

  return (
    <nav>
      <button onClick={logout}>Sair</button>
    </nav>
  );
}

export default Menu;