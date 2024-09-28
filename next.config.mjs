/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      enforce: "pre",
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            dimensions: true,
            expandProps: true,
            svgo: false,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
