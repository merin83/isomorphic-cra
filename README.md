This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Cra-Universal](https://github.com/antonybudianto/cra-universal).

## Development
```
i) yarn
(run the below command in seperate window at the root directory)
<br/>
ii) yarn start 
<br/>
iii) yarn cra-universal start
```

## Production
```
# Change directory to your project root first, and run:
yarn cra-universal build

# This command will build both client and server and put them into `./dist`
```

## Deployment
```
First, follow the Production guide mentioned above.
Since the bundle used Webpack Node Externals, you need to run npm install --production on the copied /dist, but this time you don't need to install its devDependencies
Use process manager like PM2 to run your server, your run target is ./dist/server/bundle.js
```
