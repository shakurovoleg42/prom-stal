/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.apromstal.kz",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
