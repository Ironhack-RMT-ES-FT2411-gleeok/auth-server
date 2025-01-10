const jwt = require("jsonwebtoken")

function verifyToken(req, res, next) {

  try {
    
    console.log("ejecutando el middleware")
    const token = req.headers.authorization.split(" ")[1]

    const payload = jwt.verify(token, process.env.TOKEN_SECRET)
    // si comprueba que el token es valido, continua con el next()
    // si comprueba que el token no es valido moverse al catch
    // si el token es valido, nos devuelve la info de ese usuario
    // console.log(payload)
    req.payload = payload

    next() // continua con la ruta

  } catch (error) {
    res.status(401).json({errorMessage: "Token no valido o no existe"})
  }

}

module.exports = {
  verifyToken
}