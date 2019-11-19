module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        name: {
          type:  DataTypes.STRING,
          allowNull: false,
        },
        designation: {
          type: DataTypes.STRING,
          defaultValue: false,
        },
    }, {});
    Employee.associate = function(models) {
        Employee.belongsTo(models.Company, {
            foreignKey: 'companyId',
            onDELETE: 'CASCADE',
        });
    };
    return Employee;
}