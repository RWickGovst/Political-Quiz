module.exports = function (sequelize, DataTypes) {
    var Questions = sequelize.define("Questions", {
        question: DataTypes.STRING,
        category: DataTypes.STRING,
    },{
        timestamps: false
    });
    return Questions;
};