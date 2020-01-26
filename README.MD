## Opinionated Linter and Formatter for Nuxt projects

Be sure to have _eslint extension_ in vscode

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Run

`npm i eslint-config-sohocl`

Create  _.eslintrc.js_ file in root project and add these lines

```
module.exports = {
  extends: 'eslint-config-sohocl'
}
```


Then, you can add lint and lintfix scripts to your package.json:
```
"scripts": {
  "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
  "lintfix": "eslint --fix --ext .js,.vue --ignore-path .gitignore ."
}
```

