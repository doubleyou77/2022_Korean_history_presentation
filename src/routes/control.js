const Check = require('../models/Check');

const page = {
  home: (req, res) => {
    console.log('get');
    res.render('index');
  },
};

const process = {
  check: async (req, res) => {
    const check = new Check(req.body.content);
    
    const response = await check.checkedResult();
    
    return res.status(200).json(response);
  },
};

module.exports = { page, process };