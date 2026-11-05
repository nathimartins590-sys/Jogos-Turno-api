import jogo from "../model/jogo.js"

class RepositoryJogo {

    async Buscar() {
        return jogo.findAll()
    }

    async Detalhe(id) {
        return jogo.findByPk(id)
    }

    async BuscarEmail(email) {
        return jogo.findOne({ where: { email } })
    }

    async Criar(name, email, password) {
        await jogo.create({ name, email, password })
    }

    async Alterar(id, name, email, password) {
        const jogo = await jogo.findByPk(id)
        
        if(!jogo) {
            throw new Error("Usuário não encontrado")
        }

        jogo.name = name || jogo.name
        jogo.email = email || jogo.email
        jogo.password = password || jogo.password

        await jogo.save()
    }

    async Deletar(id) {
        const jogo = await jogo.findByPk(id)
        
        if(!jogo) {
            throw new Error("Usuário não encontrado")
        }

        await jogo.destroy()
    }

}

export default new RepositoryJogo()