import { Router } from "express";

const router = Router();

// router.get("/",(req,res) => res.render("index",{title:"prueba"}));

router.get("/",(req,res) => {
  res.render("index",{title:"LectorQR"})
});

router.get("/widgets",(req,res) => {
  res.render("widgets",{title:"LectorQR"})
});
// router.use(()=>{
//   "Peticion no encontrada"
// })

export default router;