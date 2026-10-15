/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export — an `out/` folder of plain HTML/JS/CSS for any static host.
  output: 'export',
  // Directory-style URLs (/privacy/ over /privacy.html), which static hosts prefer.
  trailingSlash: true,
  images: {
    // next/image's optimiser needs a server; the photos are sized and compressed already.
    unoptimized: true,
  },
};

export default nextConfig;
