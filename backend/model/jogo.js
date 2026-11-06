import database from "../config/database.js";

class Jogo {
    constructor() {
        this.model = database.db.define("jogo", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            descricao: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            data: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            vencedor: {
                type: database.db.Sequelize.STRING,
                allowNull: false
                // unique: true
            }
        })
    }
}

export default new Jogo().model
