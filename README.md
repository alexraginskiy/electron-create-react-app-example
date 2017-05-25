# React + Electron easy setup tutorial

Get the bootstrapping power of `create-react-app` to power your electron apps.

Clone this repo and run the following in the project directory:

```shell
npm install
npm run start-ui
npm start

# or for yarn
yarn install
yarn run start-ui
yarn start
```

## Create from scratch:
* Install [create-react-app](https://github.com/facebookincubator/create-react-app)
* Create a new react project: `create-react-app my-electron-app`
* Use npm or yarn to add Electron: `npm install --save electron` or `yarn add electron`
* Add `"homepage: "./"` to `package.json`
* Add your main electron script, and link it in `package.json`, for example: `"main": "main.js"`
* Rename `"start"` in `package.json "scripts"` to `"start-ui"`
* Add electron start script to `package.json`: "start": "electron ."`
* In your `main.js`, open render windows and point to the dev url `win.loadURL('http://localhost:3000')`
* Run `start` and `start-ui` with npm or yarn: `npm start`, `npm run start-ui`
