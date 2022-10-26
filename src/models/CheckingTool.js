const hanspell = require('hanspell');

class CheckingTool {
  static spellCheck(spell) {
    const end = function () {
      console.log('// check ends');
    };

    const error = function (err) {
      console.error('// error: ' + err);
    };

    return new Promise((res, rej) => {
      hanspell.spellCheckByPNU(spell, 6000, (v) => {
        res(v);
      }, end, error);
    });
  }
}

module.exports = CheckingTool;