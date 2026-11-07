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
        const jogo = await jogo.findByPk(id)

        if (!jogo) {
            throw new Error("Usuário não encontrado")
        }

        jogo.descricao = descricao || jogo.descricao
        jogo.data = data || jogo.data
        jogo.vencedor = vencedor || jogo.vencedor

        await jogo.save()
    }

    async Deletar(id) {
        const jogo = await jogo.findByPk(id)

        if (!jogo) {
            throw new Error("Usuário não encontrado")
        }
        await jogo.destroy()
    }
}
export default new RepositoryJogo()