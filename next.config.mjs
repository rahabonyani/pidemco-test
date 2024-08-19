/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/calendar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
