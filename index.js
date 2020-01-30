const ProtocolDataUnit = require('./components/protocol-data-unit');
const mockBuffer = require('./components/mock-buffer');
const log = console.log;

const pdu = new ProtocolDataUnit(mockBuffer.getAssocRequest());
log(pdu);
