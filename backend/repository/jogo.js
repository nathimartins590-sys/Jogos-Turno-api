import jogo from "../model/jogo.js"

class RepositoryJogo {

    async Buscar() {
        return jogo.findAll()
    }

    async Detalhe(id) {
        return jogo.findByPk(id)
    }

    async Criar(descricao, data, vencedor) {
        await jogo.create({ descricao, data, vencedor })
    }

    async Alterar(id, descricao, data, vencedor) {
        const jogos = await jogo.findByPk(id)
        
        if(!jogos) {
            throw new Error("Usuário não encontrado")
        }

        jogos.descricao = descricao || user.descricao
        jogos.data = data || user.data
        jogos.vencedor = vencedor || user.vencedor

        await jogo.save()
    }

    async Deletar(id) {
        const jogos = await jogo.findByPk(id)
        
        if(!jogos) {
            throw new Error("Jogo não encontrado")
        }

        await jogos.destroy()
    }

}

export default new RepositoryJogo()