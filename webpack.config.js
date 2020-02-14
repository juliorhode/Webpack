const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  // la direccion de origen del archivo principal de la aplicacion
  entry: "./src/app.js",
  // Paa generar la salia
  output: {
    // Indicamos donde van a quedar los archivos convertidos
    path: __dirname + "/built",
    // Indicamos el nombre que le daremos al archivo convertido
    filename: "bundle.js"
  },
  devServer: {
    // Configurando el puerto del servidor
    port: 3000
  },
  module: {
    rules: [
      {
        // Todos los archivos que terminen con .css
        test: /\.css$/i,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'}
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Se indica cual es el codigo html (origen) que se requiere que copie. Acepta ruta relativa. Esto lo que realmente lo que hace, es que copia el html y lo pasa a la carpeta build
      template: "./src/index.html"
    })
  ]
};
