


const Paciente = sequelize.define("Paciente",{
    PacienteID: {
        type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DataNascimentoe: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Sexo:{
        type: DataTypes.ENUM('Masculino','Feminino','Outro'),
        allowNull: true,
    },
    Telefone: {
        type: DataTypes.STRING,
    },
    Endereco: {
        type: DataTypes.TEXT,
    },
   
});

export { Paciente };