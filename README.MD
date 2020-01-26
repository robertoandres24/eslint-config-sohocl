# Opinionated Linter and Formatter for Nuxt projects

## REQUISITOS
---
- Asegurate de descargar y activar la extension _eslint_ en vscode

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

- No tener archivos en la raiz relacionados al linting o formatting que puedan causar conflictos, como _.editorconfig_  _.prettierrc.js_ , etc.

- No tener configuraciones globales (settings de vscode) relacionadas con prettier, eslint o vetur.

- No es necesario tener instalado la extension de vscode Prettier


## INSTALACION 
---

En la raíz de tu proyecto Nuxt:
- Ejecuta
`npx install-peerdeps -D @sohocl/eslint-config-nuxt`

- Crea el archivo _.eslintrc.js_  y agrega estas lineas. Si ya existe uno en tu raiz, reemplazar con el contenido indicado

```
module.exports = {
  extends: '@sohocl/eslint-config-nuxt'
}
```

**IMPORTANTE**

Este archivo NO debe ser modificado con nuevas reglas, ya que la estandarización de linting y formateo propuesta para el equipo, perdería su sentido. 
En caso de proponer modificaciones o nuevas reglas, ver la seccion [Nuevas Reglas](#nuevas-reglas)


## USO
---

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

En la raiz del proyecto Nuxt, crea una carpeta _.vscode_ y en su interior un archivo _settings.json_ para que solo afecten a tu workspace actual.
```
.vscode
  settings.json
```
 y que contenga las siguientes configuraciones.
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

**LISTO!!!**

Cada vez que abras un archivo, eslint te resaltará con colores, los posibles errores o malas practicas de tu codigo ya sea en archivos .vue o .js. ademas del formateo en conjunto con prettier

## NUEVAS REGLAS 
---
Las nuevas reglas se deben discutir en equipo, y una vez aceptadas por la mayoría, los pasos a seguir serían:
- Clonar el prsente repositorio
- Realizar tus modificaciones en el archivo _.eslintrc.js_
- Realizar un Pull Request

Una vez aceptados los cambios se debe actualizar el npm package: 
- verificar la version actual del package:

`npm version`

mostrará en consola algo asi:

```
{ '@sohocl/eslint-config-nuxt': '1.0.4',
  ...,
  ...
}
```

- en este caso debo upgradear hacia la 1.0.5 , entonces ejecuto:

`npm version 1.0.5`

- republico el package

`npm publish`

- por ultimo todos los miembros del equipo podrán obtener estas nuevas configuraciones, ejecutando en sus proyectos Nuxt:

`npm update`

