module.exports = function (sequelize, DataTypes) {
    var Questions = sequelize.define("Questions", {
        question: DataTypes.STRING,
        category: DataTypes.STRING,
        rep: DataTypes.INTEGER,
        const: DataTypes.INTEGER,
        green: DataTypes.INTEGER,
        lib: DataTypes.INTEGER,
        dem: DataTypes.INTEGER,
    },{
        timestamps: false
    });
    return Questions;
};