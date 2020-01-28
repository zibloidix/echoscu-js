class ReleaseResponse {
	constructor() {
		this.name = 'A-RELEASE-RP PDU: RELEASE Response';
	}

	static getInstance(buffer) {
		const type = 0x06;
		if (buffer[0] === type) {
			return new ReleaseResponse();
		}
	}
}

module.exports = ReleaseResponse;