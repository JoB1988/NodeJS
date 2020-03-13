class UserMiddleware {
    validateUser(req, res, next){
        try {
            const user = req.body;
            if(!user.nome || !user.password || !user.email){
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