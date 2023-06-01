'use client';

import axios from 'axios';
import { useState } from 'react';
import { Button } from "../components/button";
import { Input } from "../components/input";

export default function Home() {
  const [formState, setFormState] = useState<SigninInterface>({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  async function handleSignup(event: React.FormEvent) {
    event.preventDefault();

    const response = await axios.post('https://localhost:3000', { data: formState });
    console.log(response.data);
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://www.svgrepo.com/show/174635/clipboard-outline.svg" alt="logo" />
          ReqEasy
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Criar conta
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
              <div>
                <Input
                  title="Informe seu Nome"
                  type="text" name="name"
                  id="name"
                  placeholder="João da Silva"
                  value={formState.name}
                  onChange={handleChange} />
              </div>
              <div>
                <Input
                  title="Informe seu email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="exemplo@email.com"
                  value={formState.email}
                  onChange={handleChange} />
              </div>
              <div>
                <Input
                  title="Informe sua senha"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={formState.password}
                  onChange={handleChange} />
              </div>
              <Button type="submit" title="Criar Conta" />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Já possui uma conta? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Faça Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
