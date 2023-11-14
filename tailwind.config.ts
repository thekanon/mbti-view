import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F0EDFF", // 가장 밝은 색상
          200: "#D9D2FF",
          300: "#C2B6FF",
          400: "#AB9BFF",
          500: "#6949FF", // 기본 색상
          600: "#5038CC", // 조금 더 진한 색상
          700: "#382699",
          800: "#211466",
          900: "#0A0233", // 가장 진한 색상
        },
        secondary: {
          100: "#FFF7E0", // 가장 밝은 색상
          200: "#FFEEC0",
          300: "#FFE5A0",
          400: "#FFDC80",
          500: "#FFC107", // 기본 색상
          600: "#CC9805", // 조금 더 진한 색상
          700: "#997104",
          800: "#665103",
          900: "#332802", // 가장 진한 색상
        },
        // alert / status
        success: "#12D18E",
        info: "#6949FF",
        warning: "#FACC15",
        error: "#F75555",
        disabled: "#D8D8D8",
        "disabled-button": "#543acc",
        greyscale: {
          900: "#212121",
          800: "#424242",
          700: "#616161",
          600: "#757575",
          500: "#9E9E9E",
          400: "#BDBDBD",
          300: "#E0E0E0",
          200: "#EEEEEE",
          100: "#F5F5F5",
          50: "#FAFAFA",
        },
        dark: {
          1: "#181A20",
          2: "#1F222A",
          3: "#262A35",
          4: "#35383F",
        },
        // Others
        white: "#FFFFFF",
        black: "#000000",
        red: "#F44336",
        pink: "#E91E63",
        purple: "#9C27B0",
        "deep-purple": "#673AB7",
        indigo: "#3F51B5",
        blue: "#2196F3",
        "light-blue": "#03A9F4",
        cyan: "#00BCD4",
        teal: "#009688",
        green: "#4CAF50",
        "light-green": "#8BC34A",
        lime: "#CDDC39",
        yellow: "#FFEB3B",
        amber: "#FFC107",
        orange: "#FF9800",
        "deep-orange": "#FF5722",
        brown: "#795548",
        "blue-grey": "#607D8B",
        // background
        "background-purple": "#F9F8FF",
        "background-yellow": "#FFFCEB",
        "background-green": "#F1FDF5",
        "background-blue": "#F6F9FF",
        "background-teal": "#F2FFFD",
        "background-red": "#FFF7F8",
        "background-orange": "#FFF8ED",
        // transparent
        "transparent-purple": "#6949FF",
        "transparent-yellow": "#FFD300",
        "transparent-green": "#12D18E",
        "transparent-blue": "#246BFD",
        "transparent-teal": "#019B83",
        "transparent-red": "#FF5A5F",
        "transparent-orange": "#FF9800",
        "transparent-cyan": "#00BCD4",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"], // Nunito 폰트 설정
      },
    },
  },
  plugins: [],
};
export default config;
