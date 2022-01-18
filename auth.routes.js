const Router = require('express')
const authController = require('./auth.controller')
const {check} = require('express-validator')
const authMiddleWare = require('./middleware/authMiddleware')
const roleMiddleWare = require('./middleware/RoleMiddleWare')
const router = new Router()

router.post('/registration', [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть больше 4 и меньше 10 символов').isLength({min: 4, max: 10}),
] ,authController.registration)
router.post('/login', authController.login)
router.get('/users', roleMiddleWare(['USER']), authController.getUsers)

module.exports = router