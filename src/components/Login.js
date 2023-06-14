import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistrationError, setIsRegistrationError] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [greeting, setGreeting] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // Verifica se o campo de e-mail e senha estão vazios, nulos ou em branco
    if (!email.trim() || !password.trim()) {
      setIsRegistrationError(true);
      setIsLoginError(false);
      return;
    }

    // Aqui você pode adicionar a lógica para fazer o cadastro com as informações fornecidas
    // Pode ser uma chamada a uma API, armazenamento local ou qualquer outra abordagem que desejar

    // Exemplo: Vamos simular um cadastro bem-sucedido após 2 segundos
    setTimeout(() => {
      setIsRegistered(true);
      setIsRegistrationError(false);
      setIsLoginError(false);
    }, 2000);
  };

  const handleLogin = () => {
    // Verifica se o campo de e-mail e senha estão vazios, nulos ou em branco
    if (!email.trim() || !password.trim()) {
      setIsLoggedIn(false);
      setIsLoginError(true);
      setIsRegistrationError(false);
      return;
    }

    setIsLoggedIn(true);
    setIsLoginError(false);
    setIsRegistrationError(false);
    setGreeting(`Olá, ${email} seja bem-vindo ao sistema da Vivio!`);
  };

  return (
    <div className="container mx-auto max-w-xs">
      <h1 className="text-2xl font-bold mb-4">Tela de Login</h1>
      {isRegistered ? (
        <div>
          <p className="mb-4">Cadastro realizado com sucesso!</p>
          <p>E-mail: {email}</p>
          <p>Password: ****</p>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="border border-gray-400 rounded px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="border border-gray-400 rounded px-2 py-1 w-full"
            />
          </div>
          <button
            onClick={handleRegister}
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded mr-2"
          >
            Cadastrar
          </button>
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
          >
            Entrar
          </button>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <p className="text-green-500 mt-4">Login realizado com sucesso!</p>
          <p>{greeting}</p>
        </div>
      )}
      {isRegistrationError && (
        <p className="text-red-500 mt-4">Cadastro inválido. Preencha todos os campos.</p>
      )}
      {isLoginError && (
        <p className="text-red-500 mt-4">Login inválido. Verifique suas credenciais.</p>
      )}
    </div>
  );
};

export default Login;