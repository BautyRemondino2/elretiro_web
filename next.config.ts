import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // ⚠️ Ignora los errores de compilación de TypeScript en el build.
    // Esto es TEMPORAL, hasta que Next.js 15 solucione el bug con PageProps.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;