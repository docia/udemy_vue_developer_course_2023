import { defineConfig } from "vite"
// import { plugins } from "../postcss.config.cjs"
import eslint from "vite-plugin-eslint"

export default defineConfig ({
    plugins: [eslint()]
})