import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email.trim()) {
      newErrors.email = 'O campo de e-mail é obrigatório.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Por favor, insira um e-mail válido.';
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'O campo de senha é obrigatório.';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter no mínimo 6 caracteres.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert('Login realizado com sucesso!');
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src="https://images.vexels.com/media/users/3/143402/isolated/preview/afbbf15d5e82a1c4fb5a55c4eacf3003-icone-de-chapeu-de-formatura.png" alt="Logo Aluno Online" />
      </div>
      <h1>Aluno Online</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
        <button type="submit" className="submit-button">Entrar</button>
      </form>
      <footer>
        <p>© 2026. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Login;