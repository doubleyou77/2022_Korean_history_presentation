const CheckingTool = require('./CheckingTool');

class Check {
  constructor(body) {
    this.body = body;
  }

  async checkedResult() {
    const spell = this.body;
    try {
      const value = await CheckingTool.spellCheck(spell);
      return { success: true, message: value };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }
}

module.exports = Check;