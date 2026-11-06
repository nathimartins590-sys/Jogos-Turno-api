import RepositoryJogo from "../repository/jogo.js"

class ServiceJogo {

    async Buscar() {
        return RepositoryJogo.Buscar()
    }

    async Detalhe(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        return RepositoryJogo.Detalhe(id)
    }

    async Criar(descricao, data, vencedor) {
        if(!descricao|| !data|| !vencedor) {
            throw new Error("Favor informar todos os parametros")
        }

        await RepositoryJogo.Criar(descricao, data, vencedor)
    }

    async Alterar(id, descricao, data, vencedor) {
        if(!id || !descricao|| !data|| !vencedor) {
            throw new Error("Favor informar todos os parametros")
        }

        await RepositoryJogo.Alterar(id, descricao, data, vencedor)
    }

    async Deletar(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        await RepositoryJogo.Deletar(id)
    }
}

export default new ServiceJogo()