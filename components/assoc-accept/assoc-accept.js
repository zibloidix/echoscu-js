class AssocAccept {
	constructor() {
		this.name = 'A-ASSOCIATE-AC PDU: ASSOC Accept';
	}

	static getInstance(buffer) {
		const type = 0x02;
		if (buffer[0] === type) {
			return new AssocAccept();
		}
	}
}

module.exports = AssocAccept;
