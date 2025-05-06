// src/lib/auth.ts

export function isLoggedIn(): boolean {
    const token = localStorage.getItem("token");
    return !!token; // Retorna true si hay token
  }
  
  export function getToken(): string | null {
    return localStorage.getItem("token");
  }
  
  export function logout(): void {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirige al login
  }