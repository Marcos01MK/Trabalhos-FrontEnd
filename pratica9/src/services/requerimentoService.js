const BASE_URL = 'http://localhost:3000/requerimentos';

export const listarRequerimentos = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const cadastrarRequerimento = async (requerimento) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requerimento),
  });
  return response.json();
};