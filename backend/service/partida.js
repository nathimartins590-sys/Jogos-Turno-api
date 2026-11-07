import RepositoryPartida from '../repository/partida.js'

class ServicePartida {
    async Status() {
        return RepositoryPartida.Status()
    }
    async Ataque (){
        return RepositoryPartida.Ataque()
    }
    async Defesa(){
        return RepositoryPartida.Defesa()
    }
    async Curar(){
        return RepositoryPartida.Curar()
    }
    async Resetar(){
        return RepositoryPartida.Resetar()
    }
}

export default new ServicePartida()