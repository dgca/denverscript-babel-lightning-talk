import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { myCoolPlugin } from "./plugin/babel-plugin";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          myCoolPlugin({
            textReplacer: {
              from: "World",
              to: "DenverScript",
            },
            headingClassName: "blue-text",
          }),
        ],
      },
    }),
  ],
});
