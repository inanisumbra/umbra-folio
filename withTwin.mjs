/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import babelPluginTypescript from "@babel/plugin-syntax-typescript"
import babelPluginMacros from "babel-plugin-macros"
import * as path from "path"
import * as url from "url"
import babelPluginTwin from "babel-plugin-twin"

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

// The folders containing files importing twin.macro
const includedDirs = [
  path.resolve(__dirname),
  path.resolve(__dirname, "app"),
  path.resolve(__dirname, "app", "components"),
  path.resolve(__dirname, "app", "img"),
  path.resolve(__dirname, "app", "utils"),
  path.resolve(__dirname, "app", "parallax"),
  path.resolve(__dirname, "app", "styles"),
]

/** @returns {import('next').NextConfig} */
export default function withTwin(
  /** @type {import('next').NextConfig} */
  nextConfig,
) {
  return {
    ...nextConfig,
    eslint: {
      dirs: ["pages", "utils", "parallax", "styles", "img"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
    webpack(
      /** @type {import('webpack').Configuration} */
      config,
      options,
    ) {
      config.module = config.module || {}
      config.module.rules = config.module.rules || []
      config.resolve.fallback = { fs: false, path: false }
      config.module.rules.push({
        test: /\.(tsx|ts)$/,
        include: includedDirs,
        use: [
          {
            loader: "babel-loader",
            options: {
              sourceMaps: options.dev,
              plugins: [
                babelPluginTwin, // Optional
                babelPluginMacros,
                [babelPluginTypescript, { isTSX: true }],
              ],
            },
          },
        ],
      })
      config.module.rules.push({
        test: /\.svg$/i,
        include: [  path.resolve(__dirname, "app", "img"),],
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack", "url-loader"],
      })

      if (typeof nextConfig.webpack === "function")
        return nextConfig.webpack(config, options)

      return config
    },
  }
}
