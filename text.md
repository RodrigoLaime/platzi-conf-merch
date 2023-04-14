## crear proyecto react desde cero sin npm create-react-app
npm i react react-dom

## Husky es una herramienta que nos permite ejecutar Git Hooks de forma más amigable y sencilla con los cuales vamos a garantizar que se corren las pruebas pertinentes en nuestro código y de esta forma no enviar un bug o inconsistencias al repositorio del proyecto.
npm install husky --save-dev
en el paclkage.json agregar
 "husky": {
    "hooks": {
      "pre-commit": "npm test", 
      "pre-push": "npm test",
      "...": "..."
    }
  }

## configurar webpack
-instalar webpack
npm install webpack webpack-cli webpack-dev-server --save-dev
-instalar webpack plugins
npm install html-webpack-plugin html-loader 
-instalar babel
npm install babel-loader  @babel/preset-env @babel/preset-react @babel/core --save-dev

-instalar webpack plugins css
npm i css-loader mini-css-extract-plugin --save-dev

##
 npm install -g eslint
//ayuda en el formato o lineamiento de la estructuta, busca reglas a cumplir a la hora de trabajar
 npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
//prettier garantiza en tener un estandar de indentacion, comas, etc
 npm install prettier eslint-plugin-prettier eslint-config-prettier

 ## PROYECT initialiced
 npm i raect-router-dom --save

 ## paquete para trabjar con paypal
 npm i react-paypal-button-v2 //no funciona investigar
 npm install @paypal/react-paypal-js

 <!-- 
 05/05/2002
 
 44554529

 45725575 key
  -->
  <!-- cara9479005f2b0dc03a14e90b544121  key-->
  <!-- http://api.positionstack.com/v1/forward
    ? access_key =  cara9479005f2b0dc03a14e90b544121 
    & callback = FUNCTION_NAME -->

    1//0hcifn2v_jArWCgYIARAAGBESNwF-L9Ir75rhwLNWHio4EyT9qyoaQXZMkfT0N7FXk1cXCgv0Zsvyb2KBEIxFabEMZrlfhqyKglU 