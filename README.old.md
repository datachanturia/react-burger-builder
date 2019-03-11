
* Create & Configure React app:
    * install ``` npm install create-react-app ```
    * run ``` create-react-app burger-builder ```
    * run ``` npm run eject ```
    * goto './config/webpack.config.js'
    * find ``` 'css-loader' ``` & add new options below it: 
        ``` { modules: true, localIdentName: '[name]__[local]__[hash:base64:5]' } ``` 
    * install ``` npm install prop-types axios --save ```

* Run ``` npm start ``` and go to ``` 127.0.0.1:3000 ```
