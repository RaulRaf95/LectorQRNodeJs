// import express from "express";
// const app = express();
// export default app;

import express from "express";
import {dirname,join} from "path"
import {fileURLToPath} from "url"
import router from "../routes/main.routes.js";

// import html5QrcodeScanner from "funciones.js";

const app = express();
// ruta absoluta del proyecto
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
// motor de plantillas ejs
app.set("views",join(__dirname,"views"));
app.set("view engine","ejs");
// directorios static, resource
app.use(express.static(join(__dirname,"../assets/css")))
app.use(express.static(join(__dirname,"../assets/fonts")))
app.use(express.static(join(__dirname,"../assets/img")))
app.use(express.static(join(__dirname,"../assets/js")))
app.use(express.static(join(__dirname,"../node_modules")))
// rutas de navegacion
app.use(router)

// app.use(html5QrcodeScanner)



export default app;