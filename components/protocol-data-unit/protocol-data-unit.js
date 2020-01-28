const pduTypes = [
  require('../assoc-request'),
  require('../assoc-accept'),
  require('../assoc-reject'),
  require('../data'),
  require('../release-request'),
  require('../release-response')
];

class ProtocolDataUnit {
  constructor(buffer) {
    debugger;
    return pduTypes.map((pduType) => pduType.getInstance(buffer)).find((pduInstance) => pduInstance);
  }
}

module.exports = ProtocolDataUnit;
