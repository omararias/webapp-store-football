'use client';

import { useState } from "react";

export default function RegistroPage() {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMensaje(data.message);
        setError(false);
        setEmail("");
        setPassword("");
      } else {
        setMensaje(data.message || "Algo salió mal");
        setError(true);
      }

    } catch (error) {
      console.error("❌ Error en el registro:", error);
      setMensaje("Error en el registro. Por favor, inténtalo de nuevo.");
      setError(true);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Registro de usuario</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Registrarse
        </button>

        {mensaje && (
          <p className={`mt-4 text-sm ${error ? "text-red-600" : "text-green-600"}`}>
            {mensaje}
          </p>
        )}
      </form>
    </main>
  );

  
}