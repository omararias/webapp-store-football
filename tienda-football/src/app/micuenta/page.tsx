'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/lib/auth";

export default function MiCuenta() {
  const router = useRouter();
  const [autenticado, setAutenticado] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = isLoggedIn();
    setAutenticado(auth);

    if (!auth) {
      router.push("/login");
    }
  }, []);

  if (autenticado === null) {
    return <p className="text-gray-500">Verificando sesión...</p>; // Loading temporal
  }

  if (!autenticado) {
    return null; // Evita mostrar contenido privado mientras redirige
  }

  return <h1>Mi cuenta. Panel privado validado con JWT ✅</h1>;
}