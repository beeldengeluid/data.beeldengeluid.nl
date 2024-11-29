import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { includeIgnoreFile } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    includeIgnoreFile(gitignorePath),
    {
    files: ["**/*.ts", "**/*.js", , "**/*.vue"],
    ignores: ["**/matomo-tracking-code.js"],
}, ...compat.extends(
    "@nuxt/eslint-config",
    "plugin:vue/vue3-recommended",
    "plugin:vuetify/base",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
), {
    languageOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
    },

    rules: {
        "vue/multi-word-component-names": ["error", {
            ignores: ["default", "index", "error", "about", "[...slug]"],
        }],
    },
}];
