const protocolDataUnit = require('./components/protocol-data-unit');
const mockBuffer = require('./components/mock-buffer');
const log = console.log;

const pdu = new protocolDataUnit(mockBuffer.getDataResponse());
log(pdu);
log(mockBuffer.getAssocRequest());
log(mockBuffer.getAssocAccept());
log(mockBuffer.getAssocReject());
log(mockBuffer.getDataRequest());
log(mockBuffer.getDataResponse());