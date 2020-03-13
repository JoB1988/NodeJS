const validators = require('../../core/utils/validator')
class UserMiddleware {
    validateUser(req, res, next){
        try {
            const user = req.body;       
            if(!validators.saveValidation(user)){
                return res.status(401).send('Dados de usuário inválido')
            } else {
                next();
            }
        } catch (error) {
            throw error
        }
    }
}

module.exports = new UserMiddleware()