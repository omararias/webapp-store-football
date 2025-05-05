import { NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Usuario from "@/models/Usuario";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  await connectToDatabase();

  const usuario = await Usuario.findOne({ email });

  if (!usuario) {
    return new Response(JSON.stringify({ message: "Usuario no encontrado" }), {
      status: 404,
    });
  }

  const isPasswordValid = await bcrypt.compare(password, usuario.password);

  if (!isPasswordValid) {
    return new Response(JSON.stringify({ message: "Contraseña incorrecta" }), {
      status: 401,
    });
  }

  const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  return new Response(JSON.stringify({ message: "Login exitoso", token }), {
    status: 200,
  });
}