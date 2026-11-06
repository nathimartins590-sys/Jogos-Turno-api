import ServiceJogo from '../service/jogo.js'

class ControllerJogo {

    async Buscar(_, res) {
        try {
            const jogos = await ServiceJogo.Buscar()

            res.status(200).send({ jogos })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Detalhe(req, res) {
        try {
            // session === usuario logado
            const id = req.session.id
            const jogos = await ServiceJogo.Detalhe(id)

            res.status(200).send({ jogos })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { descricao, data, vencedor } = req.body

            await ServiceJogo.Criar(descricao, data, vencedor)

            res.status(201).send({ message: "Jogo criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.session.id
            const { descricao, data, vencedor } = req.body

            await ServiceJogo.Alterar(id, descricao, data, vencedor)
        
            res.status(200).send({ message: "Jogo alterado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.session.id

            await ServiceJogo.Deletar(id)

            res.status(204).send({ message: "Jogo deletado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}

export default new ControllerJogo()