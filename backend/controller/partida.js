class ControllerGame {
    Status(_, res) {
        const resultado = ServicePartida.DanoBase()
        res.send(resultado)
    }

    Defesa(_, res) {
        const resultado = ServicePartida.Defesa()
        res.send(resultado)
    }

    Curar(_, res) {
        const resultado = ServicePartida.Curar()
        res.send(resultado)
    }

    Ataque(_, res) {
        const resultado = ServicePartida.Atacar()
        res.send(resultado)
    }
}