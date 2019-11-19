const CompanyModel = require('../models').Company;

exports.add = async (req, res) => {
  const params = req.body;  
  const companyData = await CompanyModel.create(params, {plain: true});  
  return res.send(companyData);  
}

exports.get = async (req, res) => {  
  const allCompanies = await CompanyModel.findAll();
  console.log('add', allCompanies);
  return res.send(allCompanies);  
}

exports.delete = async (req, res) => {  
  const companyId = req.body.id;
  const companyData = await CompanyModel.destroy({
    where: {
      id: companyId
    }
})
if(companyData === 1) {
  return res.send('Success');  
} else {
  return res.send('Bad Data');
}    
}

exports.update = async (req, res) => {
  console.log('req.body', req.body);
  
  const companyId = req.body.id;  
  const newData = { name: req.body.name };  
  
  await CompanyModel.update(newData, {
    where: {id: companyId}});  

  const userData = await CompanyModel.findAll({
      where: { id: companyId }
    });
  res.send(userData);
}