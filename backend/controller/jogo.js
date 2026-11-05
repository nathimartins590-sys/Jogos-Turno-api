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
            const { name, email, password } = req.body

            await ServiceJogo.Criar(name, email, password)

            res.status(201).send({ message: "Usuário criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.session.id
            const { name, email, password } = req.body

            await ServiceJogo.Alterar(id, name, email, password)
        
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
            const { email, password } = req.body
    
            const token = await ServiceJogo.Login(email, password)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}
export default new ControllerJogo()