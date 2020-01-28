class AssocReject {
	constructor() {
		this.name = 'A-ASSOCIATE-RJ PDU: ASSOC Reject';
	}

	static getInstance(buffer) {
		const type = 0x03;
		if (buffer[0] === type) {
			return new AssocReject();
		}
	}
}

module.exports = AssocReject;
