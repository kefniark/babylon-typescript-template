# BabylonJS Template

Really simple and ready to develop game with **BabylonJS** template

Pull the code and directly work in the `./src` folder

---

## Contents

* BabylonJS
* Typescript
* TSLint
* Webpack
* CSS

Export is configured as:
* Fix ratio 16:9 (720p)
* Automatic scaling with black border
* ES6 (tree shaking + code splitting)

---

## Usage

### Install
```
npm install
```
 - clone this repository and run this command

### Dev
```
npm run dev
```
 - this will start a dev server on http://localhost:8080

### Build
```
npm run build
```
 - this will compile the game into the `./dist/` folder
you can test it with `npm run local-server`
 - this will expose the build folder on http://localhost/

### Linting
```
npm run lint
```
 - its recommended to use https://marketplace.visualstudio.com/items?itemName=eg2.tslint