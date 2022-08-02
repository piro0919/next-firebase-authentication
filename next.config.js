const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  sassOptions: {
    additionalData: async (content, { resourcePath }) => {
      if (resourcePath.includes("node_modules")) {
        return content;
      }

      if (resourcePath.endsWith("mq-settings.scss")) {
        return process.env.NODE_ENV === "production" ? "" : content;
      }

      return "@use 'styles/mq' as mq;" + content;
    },
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

module.exports = nextConfig;
