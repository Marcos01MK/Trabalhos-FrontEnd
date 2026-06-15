const BASE_URL = 'http://localhost:3000/requerimentos';

const getToken = () => {
  return localStorage.getItem('token');
};

const checkAuth = () => {
  const token = getToken();
  if (!token) {
    throw new Error('Não autorizado');
  }
  return token;
};

export const listarRequerimentos = async () => {
  try {
    const token = checkAuth();
    const response = await fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Não autorizado');
    }
    return response.json();
  } catch (err) {
    throw err;
  }
};

export const cadastrarRequerimento = async (requerimento) => {
  try {
    const token = checkAuth();
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(requerimento),
    });
    if (!response.ok) {
      throw new Error('Não autorizado');
    }
    return response.json();
  } catch (err) {
    throw err;
  }
};
