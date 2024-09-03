/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack:(
    config,
    options,
  ) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack", "url-loader"],
    })
    return config
  }
};

export default nextConfig;
