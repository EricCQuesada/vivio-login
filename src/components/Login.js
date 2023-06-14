import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [greeting, setGreeting] = useState('');
  const [isError, setIsError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    if (!email.trim() || !password.trim()) {
      setIsError(true);
      setGreeting('');
      return;
    }

    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const user = data.results[0];

      const { first, last } = user.name;
      const username = `${first} ${last}`;

      setIsLoggedIn(true);
      setGreeting(`Olá, ${username} seja bem-vindo ao sistema da Viveo!`);
      setIsError(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setIsError(true);
      setGreeting('');
      return;
    }

    setIsLoggedIn(true);
    setGreeting(`Olá, ${email} seja bem-vindo ao sistema da Viveo!`);
    setIsError(false);
  };

  return (
    <div className="container mx-auto max-w-xs">
      <h1 className="text-2xl font-bold mb-4">Tela de Login</h1>
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
      <div className="flex gap-2 mb-4">
        <button
          onClick={handleRegister}
          className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
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

      {isLoggedIn && !isError && (
        <div className="mt-4">
          <p className="text-green-500">{greeting}</p>
        </div>
      )}

      {isError && (
        <p className="text-red-500 mt-4">Preencha todos os campos corretamente.</p>
      )}
    </div>
  );
};

export default Login;
