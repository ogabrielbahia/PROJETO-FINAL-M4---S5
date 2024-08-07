


const Paciente = sequelize.define("Paciente",{
    id: {
        type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true
    },
    numero_telefone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

export { Paciente };