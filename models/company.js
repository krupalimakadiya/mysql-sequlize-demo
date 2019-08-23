module.exports = (sequelize, DataTypes) => {
    var Company = sequelize.define('Company', {
        name: DataTypes.STRING
    }, {});
    Company.associate = function(models) {
        Company.hasMany(models.Employee, {
            foreignKey: 'companyId',
            as: 'employees',
        })
    };
    return Company;
}