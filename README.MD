## Opinionated Linter and Formatter for Nuxt projects

### Requisitos
- Asegurate de descargar y activar la extension _eslint_ en vscode

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

- No tener archivos relacionados al linting o formatting que puedan causar conflictos, como _.editorconfig_  _.prettierrc.js_ , etc.


Ejecuta

`npx install-peerdeps -D @sohocl/eslint-config-nuxt`

Crea el archivo _.eslintrc.js_  y agrega estas lineas. Si ya existe uno en tu raiz, reemplazar con el contenido indicado

```
module.exports = {
  extends: '@sohocl/eslint-config-nuxt'
}
```


Luego, tienes 2 opciones:

Puedes agregar estos scripts a tu package.json, para ejecutar desde linea de comandos:
```
"scripts": {
  "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
  "lintfix": "eslint --fix --ext .js,.vue --ignore-path .gitignore ."
}
```
O simplemente agregar estas lineas en las settings de vscode (se recomienda en el workspace, y no global)
y los fixes y formateo se ejecutaran cada vez que guardes archivo. Sinceramente, no se por qué, no eligirías esta opción, 🙃 .

Pone tus settings con esta estructura para que solo afecten a tu workspace
- .vscode
  - settings.json

```
{
  "editor.formatOnSave": true,
  "vetur.validation.template": false,
  "vetur.format.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

