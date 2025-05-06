import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Tienda Football",
  description: "Venta de artículos de football americano",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-800">
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href="/">🏈 Tienda Football</Link>
          </h1>
          <nav className="flex gap-4">
            <Link href="/productos" className="hover:underline">Productos</Link>
            <Link href="/carrito" className="hover:underline">Carrito</Link>
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/registro" className="hover:underline">Registro</Link>
            <Link href="/admin" className="hover:underline">Admin</Link>
            <Link href="/micuenta" className="hover:underline">Mi Cuenta</Link>
            <Link href="/logout"className="hover:underline">Cerrar sesión</Link>
          </nav>
        </header>

        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
