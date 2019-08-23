module.exports = (sequelize, DataTypes) => {
    var Company = sequelize.define('Company', {
        name: DataTypes.STRING
    }, {});
    Company.associate = function(models) {

    };
    return Company;
}