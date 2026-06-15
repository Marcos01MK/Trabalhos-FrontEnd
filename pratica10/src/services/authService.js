const BASE_URL = 'http://localhost:3000/usuarios';

export const login = async (email, senha) => {
  const response = await fetch(BASE_URL);
  const usuarios = await response.json();

  const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  if (!usuario) {
    throw new Error('E-mail ou senha inválidos');
  }

  // Simula um token JWT (em um projeto real, isso viria do backend)
  const token = btoa(JSON.stringify({ id: usuario.id, email: usuario.email }));
  return { usuario, token };
};

export const logout = () => {
  localStorage.removeItem('usuario');
  localStorage.removeItem('token');
};

export const getUsuarioAutenticado = () => {
  const usuario = localStorage.getItem('usuario');
  const token = localStorage.getItem('token');
  return { usuario: JSON.parse(usuario), token };
};