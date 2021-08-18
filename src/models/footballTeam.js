'use strict';

const teamModel=(sequelize,DataTypes)=>sequelize.define('team',{
    teamName:{type: DataTypes.STRING, required: true },
    favPlayer:{type: DataTypes.STRING, required: true },
    hisNumber:{type: DataTypes.INTEGER, required: true},
    yourComment:{type: DataTypes.STRING}

});
module.exports=teamModel