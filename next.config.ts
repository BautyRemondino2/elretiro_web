import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Fija la raíz del proyecto para el file tracing (evita el warning por
  // múltiples lockfiles y asegura el bundling correcto en producción).
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
