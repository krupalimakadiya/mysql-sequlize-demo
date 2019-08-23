const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
console.log('config', config);
const db = {};
let sequelize;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);    
}

sequelize.sync({ alter: true}).then(function(){
console.log('database created suucessfully');
}).catch(function(err){
    console.log('err', err);
})

fs.readdirSync(__dirname)
.filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(function(file){  
    const model = sequelize['import'](path.join(__dirname, file));    
    db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
    if(db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
