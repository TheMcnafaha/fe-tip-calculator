import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        "strong-cyan": "hsl(172, 67%, 45%)",
        "very-dark-cyan": "hsl(183, 100%, 15%)",
        "dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "grayish-cyan": " hsl(184, 14%, 56%)",
        "light-grayish-cyan": "hsl(185, 41%, 84%)",
        "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
