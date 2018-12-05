# ADA + Ripio Block Explorer

Explorador de bloques de la blockchain Ethereum construido en el workshop de ADA dictado por Ripio.

Para ver casa STEP funcionando solo hace falta ingresar a la carpeta `blockexp` del step que se desea ver funcionando y ejecutar:

```bash
$ npm install
```
```bash
$ npm start
```


## STEP 0 - Setup

Estos son las instrucciones para llegar al step 0

```bash
$ npm install -g create-react-app
```
```bash
$ create-react-app blockexp
```
```bash
$ cd blockexp
```
```bash
$ npm start
```

## STEP 1 - Estructura

Estos son las instrucciones para llegar al step 0

```bash
$ cd src
```
```bash
$ rm App.js
```
```bash
$ mkdir components
```
```bash
$ mkdir components/App
```
```bash
$ mv App.css components/App/styles.css
```
```bash
$ cd components/App
```
```bash
$ touch index.js
```
```bash
$ cd ..
```
```bash
$ mkdir Home
```
```bash
$ touch Home/index.js
```
```bash
$ touch Home/style.css
```
```bash
$ cp -r Home/ Block/
```

Editar /src/index.js reemplazar `import App from './App';` por `import App from './components/App';`

Instalar dependencias `npm install --save react-router-dom` y `npm install --save web3`

Editar /src/components/App/index.js


## STEP 2 - Rutas

Editar /src/components/App/index.js
Crear el componente Home
Crear el componente Block

## STEP 3 - Web3

Editar el componente Home para import Web3 para ver el numero de bloque

## STEP 4 - Escuchar blockchain y listar los ultimos bloques

Editar el componente Home

## STEP 5 - Detalle del bloque

Editar el componente Block

## STEP 6 - Estilos

Estilos de los componentes
