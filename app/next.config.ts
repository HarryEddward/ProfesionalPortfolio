import type { NextConfig } from "next";
import MillionLint from "@million/lint";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        pathname: '/**', // Asegúrate de incluir el patrón correcto
      },
    ],
  },

};

export default MillionLint.next({ rsc: true })(nextConfig);