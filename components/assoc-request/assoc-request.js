class AssocRequest {
	constructor(buffer) {
		this.name = 'A-ASSOCIATE-RQ PDU: ASSOC Request';
		this.buffer = this.getBuffer(buffer);
		this.pduType = '0x01',
		this.pduLength = this.getPduLength();
		this.protocolVersion = this.getProtocolVersion();
		this.calledEntryTitle = this.getCalledEntryTitle();
		this.callingEntryTitle = this.getCallingEntryTitle();
    this.applicationContext = this.getItem('10');
    //this.presentationContext = this.getItem('20');
    this.abstractSyntax = this.getItem('30');
    this.transferSyntax = this.getItem('40');
    //this.userInfo = this.getItem('50');
    this.maxPDULength =  this.getItem('51');
    this.implementationUID = this.getItem('52');
    this.implementationVersion = this.getItem('55');
  }
  
  getBuffer(buffer) {
    return {
      header: buffer.slice(0,73),
      body: buffer.slice(74, buffer.length - 1)
    }
  }

	getPduLength() {
		return this.buffer.header.readUIntBE(2,4);
	}

	getProtocolVersion() {
		return this.buffer.header.readUIntBE(6,2);
	}

	getCalledEntryTitle() {
		return this.buffer.header.toString('utf8', 10, 26).trim();
	}

	getCallingEntryTitle() {
		return this.buffer.header.toString('utf8', 26, 42).trim();
  }
  
	getItem(itemCode) {
		const itemTypePosition = this.buffer.body.indexOf(`${itemCode}00`, 'hex');
		const itemLengthPosition = itemTypePosition + 2;
		const itemValuePosition = itemLengthPosition + 2;

		const itemType = this.buffer.body[itemTypePosition].toString(16);
		const itemLength = this.buffer.body.readUIntBE(itemLengthPosition, 2);
		const itemValue = this.buffer.body.toString('utf8', itemValuePosition, itemValuePosition + itemLength);
		return {
			itemType,
			itemLength,
			itemValue
		};

	}

	static getInstance(buffer) {
		const type = 0x01;
		if (buffer[0] === type) {
			return new AssocRequest(buffer);
		}
	}

}

module.exports = AssocRequest;
