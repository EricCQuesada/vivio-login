import React, { useState } from 'react';

const Cadastro = () => {
  const [users, setUsers] = useState([]);

  const handleCadastro = () => {
    // Lógica para cadastrar um novo usuário
    // Pode ser uma chamada a uma API, armazenamento local ou qualquer outra abordagem que desejar
    const newUser = { name: 'Exemplo', email: 'exemplo@example.com' };
    setUsers([...users, newUser]);
  };

  return (
    <div className="container mx-auto max-w-xs">
      <h1 className="text-2xl font-bold mb-4">Tela de Cadastro</h1>
      <button
        onClick={handleCadastro}
        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
      >
        Cadastrar
      </button>
      <ul className="mt-4">
        {users.map((user, index) => (
          <li key={index}>
            Nome: {user.name} | E-mail: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cadastro;