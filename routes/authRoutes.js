
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { fieldValidator } = require('../api/HTTP/Middleware/fieldValidator');
const {
  login,
  refreshToken
} = require('../api/HTTP/Controllers/authController')

     
router
  // Endpoint to autenticatión JWT
  .post(
    '/login',
    [
      check('email', 'Email no valido').isEmail(),
      check('password', 'Contraseña debe tener minimo 6 caracteres').isLength({
        min: 6,
      }),
      fieldValidator
    ],
    login,
  )
  // Endpoint to refresh token
  .post( '/token', refreshToken )


module.exports = router;
