import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmailIcon from "../assets/icons/emailIcon.png";
import BasicFooter from "../components/basicFooter";
import BasicHeader from "../components/basicHeader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita reload da página
    console.log("Email:", email, "password:", password);

    // Aqui você faria a chamada para sua API de login
    // axios.post("/login", { email, senha }) ...
  };

  return (
    <div className="bg-[#F5F5F5] h-screen  flex flex-col ">
        <BasicHeader />
      <div className="flex flex-1 items-center mt-10 mb-10 justify-center">
        <form
          onSubmit={handleSubmit}
          className="justify-center items-center bg-[#FFFFFF] p-5 m-5 rounded-md  max-w-xl w-full shadow-md "
        >
          <div className="mx-4">
            <h1 className="text-center text-4xl font-bold">Faça seu login</h1>
            <h2 className="text-xl text-center p-2">Entre na sua conta para continuar</h2>
            <div className="flex flex-col mt-6">
              <label className="mb-1 ">E-mail</label>
              <div className="flex border-1 border-slate-400 rounded-sm bg-sky-50 items-center mb-6 mt-2">
                <img src={EmailIcon} alt="" className="h-5 w-5 ml-4 mt-1" />
                <input
                  type="email"
                  placeholder="usuário@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full outline-none p-1.5"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Senha</label>
              <div className="flex border-1 border-slate-400 rounded-sm bg-sky-50 items-center mb-6 mt-2">
                <img src={EmailIcon} alt="" className="h-5 w-5 ml-4 mt-1" />
                <input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full outline-none p-1.5"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <button
                type="submit"
                className="bg-[#2563EB] text-white p-1 rounded-md hover:bg-[#1E40AF] transition cursor-pointer mb-6"
              >
                Entrar
              </button>

              <Link to="/" className="flex justify-center text-[#2563EB] hover:underline">
                Esqueceu a senha?
              </Link>
              <div className="flex gap-1 justify-center">
                <p>Não tem uma conta? </p>
                <Link to="/signIn" className="flex justify-center text-[#2563EB] hover:underline">
                  {" "}
                  Criar conta
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <BasicFooter />
    </div>
  );
}
