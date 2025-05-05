import { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Usuario from "@/models/Usuario";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email y contraseña requeridos" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    await connectToDatabase();

    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return new Response(
        JSON.stringify({ message: "El usuario ya existe" }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = new Usuario({
      email,
      password: hashedPassword,
    });

    await nuevoUsuario.save();

    return new Response(
      JSON.stringify({ message: "Usuario registrado con éxito" }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("❌ Error detallado:", error);
    return new Response(
      JSON.stringify({ message: "Error del servidor" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}