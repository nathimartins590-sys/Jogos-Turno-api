import partida from '../model/partida.js'

class RepositoryPartida{
    async Status() {
        return partida.findAll()
    }

    async Ataque(campeaoInicial, monstroInicial) {
        return partida.findByPk(campeaoInicial, monstroInicial)
    }

    async Defesa(campeaoInicial, monstroInicial) {
        return partida.findByPk(campeaoInicial, monstroInicial)
    }

    async Curar(campeaoInicial, monstroInicial) {
        return partida.findByPk(campeaoInicial, monstroInicial)
    }

    async Resetar() {
        return partida.findAll()
    }
}
 export default new RepositoryPartida