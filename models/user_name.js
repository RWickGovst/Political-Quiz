module.exports = function(sequelize, DataTypes) {
    var User_result = sequelize.define("User_result", {
      complete:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }, 
      result: DataTypes.STRING,
     
    });
    return User_result;
  };
  