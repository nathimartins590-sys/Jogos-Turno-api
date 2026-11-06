import RepositoryJogo from '../repository/jogo.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET = 'batata123'
const SALT = 12

class ServiceJogo {

    async Buscar() {
        return RepositoryJogo
            .Buscar()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        return RepositoryJogo.Detalhe(id)
    }

    async Criar(descricao, data, vencedor) {
        if (!descricao || !data || !vencedor) {
            throw new Error("Favor informar todos os parametros")
        }
        await RepositoryJogo.Criar(descricao, data, vencedor)
    }

    async Alterar(id, descricao, data, vencedor) {
        if (!id || !descricao || !data || !vencedor) {
            throw new Error("Favor informar todos os parametros")
        }
        const jogoalterar = await RepositoryJogo.update(id, descricao, data, vencedor)
        return jogoalterar
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        await RepositoryJogo.Deletar(id)
    }
}

export default new ServiceJogo()