import express from "express"
import ControllerUser from "../controller/jogo.js"

const router = express.Router()

router.get('/status', ControllerUser.Buscar)
router.get('/ataque', ControllerUser.Detalhe)
router.post('/defesa', ControllerUser.Criar)
router.put('/curar', ControllerUser.Alterar)
router.delete('/deletar', ControllerUser.Deletar)
// router.get('/resetar', Controller.Resetar)

export default router