import axios from "axios";
import React, { useState } from "react";

export default function SignIn() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  const response = await axios.post(
      "http://localhost/ecommerce/back/cadastro.php",
      {
        nome,   // vai como "name"
        email,  // vai como "email"
        senha   // vai como "senha"
      }
    );

    console.log(response.data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded shadow-md w-80 flex flex-col gap-4">
        <div>
          <label>Nome</label>
          <input type="text" name="nome" onChange={(e) => setNome(e.target.value)} className="border-1" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="border-1" />
        </div>
        <div>
          <label>Senha</label>
          <input type="password" name="senha" onChange={(e) => setSenha(e.target.value)} className="border-1" />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
