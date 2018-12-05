STEP 0 - Setup

$ npm install -g create-react-app
$ create-react-app blockexp
$ cd blockexp
$ npm start

STEP 1 - Estructura

$ cd src
$ rm App.js
$ mkdir components
$ mkdir components/App
$ mv App.css components/App/styles.css
$ cd components/App
$ touch index.js
$ cd ..
$ mkdir Home
$ touch Home/index.js
$ touch Home/style.css
$ cp -r Home/ Block/
Editar /src/index.js reemplazar `import App from './App';` por `import App from './components/App';`
Instalar dependencias `npm install --save react-router-dom` y `npm install --save web3`
Editar /src/components/App/index.js


STEP 2 - Rutas

Editar /src/components/App/index.js
Crear el componente Home
Crear el componente Block

STEP 3 - Web3

Editar el componente Home para import Web3 para ver el numero de bloque

STEP 4 - Escuchar blockchain y listar los ultimos bloques

Editar el componente Home

STEP 5 - Detalle del bloque

Editar el componente Block
