const assert = require('assert');

const config = {};
config.bnnSize = require('../src/core/bnnSize.js'),
config.bnnPosition = require('../src/core/bnnPosition.js'),
config.bnnGradient = require('../src/core/bnnGradient.js'),
config.bnnImport = require('../src/core/bnnImport.js'),
config.bnnAlign = require('../src/core/bnnAlign.js');
config.bnnWidth = require('../src/core/bnnWidth.js');
config.bnnHeight = require('../src/core/bnnHeight.js');

const banana = require('../src/banana.js')(config);

describe('render()', () => {

  it('should return the fully rendered css', () => {

    const stylesheet = '.a {color:#000;bnn-size: 50px 100px;}' +
      '.b {color:#000;bnn-position: 10px 5px 8px 90px;margin: 10px;}';

    const result = banana.render('teste.bnn', stylesheet);

    const expect = '.a {\n  color: #000;\n  width: 50px;\n' +
      '  height: 100px;\n}\n\n.b {\n  color: #000;\n' +
      '  top: 10px;\n  right: 5px;\n  bottom: 8px;\n' +
      '  left: 90px;\n  margin: 10px;\n}';

    assert.equal(result, expect);
  });

});
