import { useAuth } from '../contexts/AuthContext';

function Topbar() {
  const { usuario } = useAuth();

  return (
    <div>
      {usuario && <span>Bem-vindo, {usuario.nome}!</span>}
    </div>
  );
}

export default Topbar;