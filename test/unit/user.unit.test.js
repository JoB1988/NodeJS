const repo = require('../../src/core/repo/user.repo')

describe('testando o repositório do usuário', () =>{
    it('listar usuários', async () => {
        const result = await repo.list();
        expect(Array.isArray(result)).tobe(true);
    })
    it('listar usuários', async () => {
        const result = await repo.insert({
            nome: 'Jonathan',
            email: 'jonathan@jonathan.com',
            password: '1234'
        });
        expect(typeof result == 'object').tobe(true);
    })
    it('listar usuários', async () => {
        const result = await repo.list();
        expect(Array.isArray(result)).tobe(true);
    })
})