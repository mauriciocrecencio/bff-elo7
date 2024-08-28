const config = {
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 120,
  "plugins":[
    await import("prettier-plugin-tailwindcss")
  ]
}

export default config