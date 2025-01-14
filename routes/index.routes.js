const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const authRouter = require("./auth.routes")
router.use("/auth", authRouter)


const { verifyToken, verifyAdmin } = require("../middlewares/auth.middlewares")

// EJEMPLO DE RUTA PRIVADA
router.get("/private-route-example", verifyToken, (req, res) => {

  // console.log(req.headers)

  // ! EL BACKEND NECESITA SABER QUIEN ES EL USUARIO
  // ! ESTA INFO ES DECIFRADA DEL TOKEN E IMPOSIBLE DE MANIPULAR
  console.log(req.payload)

  res.send("envio de informacion privada o accion privada")

})

router.get("/admin-route-example", verifyToken , verifyAdmin, (req, res) => {
  res.send("envio de informacion o accion solo para admins")
})

module.exports = router;
