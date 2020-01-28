class Data {
	constructor() {
		this.name = 'P-DATA-TF PDU: Data';
	}

	static getInstance(buffer) {
		const type = 0x04;
		if (buffer[0] === type) {
			return new Data();
		}
	}
}

module.exports = Data;
