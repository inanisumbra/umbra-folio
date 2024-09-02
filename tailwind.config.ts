import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bash": "url('./app/img/bash.svg')",
        "clients-main": "url('./app/img/clients-main.svg')",
        "clients": "url('./app/img/clients.svg')",
        "cloud": "url('./app/img/cloud.svg')",
        "earth": "url('./app/img/earth.svg')",
        "satellite": "url('./app/img/satellite4.svg')",
        "server": "url('./app/img/server.svg')",
        "stars": "url('./app/img/stars.svg')"
      },
    },
  },
  plugins: [],
};
export default config;
