/** @type {import('next').NextConfig} */
const nextConfig = {
  alias: {
    "@": require("path").resolve(__dirname, "src"),
  },
};

module.exports = nextConfig;
