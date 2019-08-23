const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const models = require('./models');
const route = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', route);

app.get('*', (req, res) => 
res.status(200).send({
    message: 'Welcome to the Node js and Sequlize Demo',
}));

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
models.sequelize.sync().then(function() {
    app.listen(port, function() {
      console.log('Express server listening on port ', port);
    });
});
  
module.exports = app;

