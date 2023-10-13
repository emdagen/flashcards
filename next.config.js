/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/manage/flashcards",
        permanent: false,
      },
      {
        source: "/manage",
        destination: "/manage/flashcards",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
