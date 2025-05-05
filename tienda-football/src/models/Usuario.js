// src/models/Usuario.js
import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    enum: ["usuario", "admin"],
    default: "usuario",
  },
}, { timestamps: true });

export default mongoose.models.Usuario || mongoose.model("Usuario", UsuarioSchema);