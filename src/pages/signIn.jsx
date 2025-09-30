import axios from "axios";
import React, { useState } from "react";
import BasicHeader from "../components/basicHeader";
import BasicFooter from "../components/basicFooter";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senhaConf !== senha) {
      setErroSenha(true);

      toast.error("As senhas não conferem!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });

      return;
    }

    const response = await axios.post("http://localhost/ecommerce/back/cadastro.php", {
      nome,
      email,
      senha,
    });

    console.log(response.data);
  };

  const [senhaConf, setSenhaConf] = useState("");

  return (
    <div className="bg-[#F5F5F5]  h-screen flex flex-col ">
      <BasicHeader />
      <div className=" bg-[#F5F5F5] flex flex-1 items-center py-20 justify-center">
        <form
          onSubmit={handleSubmit}
          className="justify-center items-center bg-[#FFFFFF] p-5 m-5 rounded-md  max-w-xl w-full shadow-md "
        >
          <div className="mx-4">
            <h1 className="text-center text-4xl font-bold">Faça seu Cadastro</h1>
            <h2 className="text-xl text-center mt-2 p-2">Insira seus dados abaixo para continuar</h2>
            <div className="flex flex-col mt-6">
              <div className="flex flex-col">
                <label className=" font-bold ">Nome</label>
                <input
                  type="text"
                  name="nome"
                  onChange={(e) => setNome(e.target.value)}
                  className="flex border-1 border-slate-400 rounded-sm bg-sky-50 items-center mb-6 mt-2 w-full outline-none p-1.5 "
                  required
                />
              </div>
              <div className="flex flex-col mt-6">
                <label className="  font-bold ">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex border-1 border-slate-400 rounded-sm bg-sky-50 items-center mb-6 mt-2 w-full outline-none p-1.5 "
                />
              </div>
              <div className="flex flex-col mt-6">
                <label className=" font-bold ">Senha</label>
                <input
                  type="password"
                  name="senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className={`flex border-1 border-slate-400 rounded-sm items-center mb-6 mt-2 w-full outline-none p-1.5 ${
                    erroSenha ? "bg-red-200" : "bg-sky-50"
                  }`}
                />
              </div>

              <div className="flex flex-col mt-6">
                <label className=" font-bold ">Confirme sua senha</label>
                <input
                  type="password"
                  value={senhaConf}
                  name="senhaConf"
                  onChange={(e) => setSenhaConf(e.target.value)}
                  className={`flex border-1 border-slate-400 rounded-sm items-center mb-6 mt-2 w-full outline-none p-1.5 ${
                    erroSenha ? "bg-red-200" : "bg-sky-50"
                  }`}
                  required
                />
              </div>
              <div className="flex mt-6 mb-6 gap-2 items-center">
                <input type="checkbox" name="checkTerms" id="checkTerms" required />
                <p className="font-bold">Li e aceito os termos</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <button
                type="submit"
                className="bg-[#2563EB] text-white text-2xl font-bold p-1 rounded-md hover:bg-[#1E40AF] transition cursor-pointer mb-6"
              >
                Cadastrar
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
              />

              <div className="flex gap-1 justify-center">
                <p>Já tem uma conta? </p>
                <Link to="/login" className="flex justify-center text-[#2563EB] hover:underline">
                  Faça seu login
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
