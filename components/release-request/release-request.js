class ReleaseRequest {
	constructor() {
		this.name = 'A-RELEASE-RQ PDU: RELEASE Request';
	}

	static getInstance(buffer) {
		const type = 0x05;
		if (buffer[0] === type) {
			return new ReleaseRequest();
		}
	}
}

module.exports = ReleaseRequest;
