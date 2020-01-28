class AssocRequest {
	constructor() {
		this.name = 'A-ASSOCIATE-RQ PDU: ASSOC Request';
	}

	static getInstance(buffer) {
		const type = 0x01;
		if (buffer[0] === type) {
			return new AssocRequest();
		}
	}
}

module.exports = AssocRequest;
