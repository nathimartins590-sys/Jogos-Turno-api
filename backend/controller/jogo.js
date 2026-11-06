import ServiceJogo from '../service/jogo.js'

class ControllerJogo {

    async Buscar(req, res) {
        try {
            const jogo = await ServiceJogo.Buscar()

            res.status(200).send({ jogo })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Detalhe(req, res) {
        try {
            // session === usuario logado
            const id = req.session.id
            const jogo = await ServiceJogo.Detalhe(id)

            res.status(200).send({ jogo })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { descricao, data, vencedor } = req.body

            await ServiceJogo.Criar(descricao, data, vencedor)

            res.status(201).send({ message: "Usuário criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.session.id
            const { descricao, data, vencedor } = req.body

            await ServiceJogo.Alterar(id, descricao, data, vencedor)

            res.status(200).send({ message: "Usuário alterado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.session.id

            await ServiceJogo.Deletar(id)

            res.status(204).send({ message: "Usuário deletado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { descricao, data, vencedor } = req.body

            const token = await ServiceJogo.Login(descricao, data, vencedor)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}
export default new ControllerJogo()